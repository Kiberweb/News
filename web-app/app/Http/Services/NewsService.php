<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Http\Services\NewsHashtagsService;
use App\Http\Services\TranslitService;

class NewsService
{
    private $newsHashtags;
    private $translate;

    public function __construct(NewsHashtagsService $newsHashtags, TranslitService $translate) {
        $this->newsHashtags = $newsHashtags;
        $this->translate = $translate;
    }

    public function create($values, int $hashtagCount = 3): array
    {
        $hashtags = $values['id_hashtag'];
        $lang = $values['lang'] ?? 'ru';

        try {
            $news_id = DB::table('news')->insertGetId([
                'title' => $values['title'],
                'text' => $values['text'],
                'link' => $this->translate->translate($values['link'], $lang),
                'created_at' => Carbon::now(),
            ]);

            for ($i = 0; $i < 3; $i++) {
                DB::table('news_to_hashtags')->insert([
                    'id_news' => $news_id,
                    'id_hashtag' => $hashtags[$i],
                ]);
            }

            return [
                'status' => 200,
                'message' => 'News added successfully!',
            ];

        } catch (\Throwable $e) {
            return [
                'status' => 500,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function list(int $limit = 15): array
    {
        try {
            $news = DB::table('news')
                ->paginate($limit)
                ->toArray();

            $articles = collect($news['data']);

            $articles->map(function($articles) {
                $articles->hashtag = $this->newsHashtags->getNewsHashtags($articles->id);
                return $articles;
            });

            $news['data'] = $articles->toArray();

            return [
                'status' => 200,
                'data' => $news,
                'message' => 'list articles',
            ];

        } catch (\Throwable $e) {
            return [
                'status' => 500,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function show(string $link): array
    {
        try {
            $news = DB::table('news')
                ->select('id', 'title', 'text', 'link')
                ->where('link', '=', $link)
                ->get();

            $articles = collect($news);

            $articles->map(function($articles) {
                $articles->hashtag = $this->newsHashtags->getNewsHashtags($articles->id);
                return $articles;
            });

            $news = $articles->toArray();

            return [
                'status' => 200,
                'data' => $news,
                'message' => 'One article',
            ];

        } catch (\Throwable $e) {
            return [
                'status' => 500,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function hashtagToNews(array $value): array
    {
        if ($value['hashtag'] === '') {
            return [
                'status' => 500,
                'message' => 'hashtag empty',
            ];
        }

        try {
            $hashtag = DB::table('hashtags')
                ->select('id', 'link')
                ->where('link', '=', $value['hashtag'])->get();

            return [
                'status' => 200,
                'data' => $this->newsHashtags->getHashtagsNews($hashtag[0]->id),
                'message' => 'news have hashtag',
            ];
        } catch (\Throwable $e) {
            return [
                'status' => 500,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function update(int $id, array $values): array
    {
        $hashtags = $values['id_hashtag'];
        $lang = $values['lang'] ?? 'ru';

        try {
            $news = DB::table('news')
                ->where('id', $id)
                ->update([
                    'title' => $values['title'],
                    'text' => $values['text'],
                    'link' => $this->translate->translate($values['link'], $lang),
                    'updated_at' => Carbon::now(),
                ]);

            if (count($hashtags) == 0) {
                DB::table('news_to_hashtags')
                    ->where('id_news', '=', $id)
                    ->delete();
            } else {
                $tags = DB::table('news_to_hashtags')
                            ->select('id')
                            ->where('id_news', '=', $id)
                            ->get();

                for ($i = 0; $i < 3; $i++) {
                    DB::table('news_to_hashtags')
                        ->where('id', '=', $tags[$i]->id)
                        ->update([
                            'id_hashtag' => $hashtags[$i],
                        ]);
                }
            }

            return [
                'status' => 200,
                'message' => 'News updated successfully!',
            ];
        } catch (\Throwable $e) {
            return [
                'status' => 500,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function delete(int $id): array
    {
        try {
            DB::table('news_to_hashtags')
                ->where('id_news', '=', $id)
                ->delete();

            DB::table('news')
                ->where('id', '=', $id)
                ->delete();

            return [
                'status' => 200,
                'message' => 'News delete successfully!',
            ];
        } catch (\Throwable $e) {
            return [
                'status' => 500,
                'message' => $e->getMessage(),
            ];
        }
    }

    public function issetLink(array $value): array
    {
        $lang = $value['lang'] ?? 'ru';

        $currentLink = $this->translate->translate($value['link'], $lang);

        try {
            $link = DB::table('news')
                ->select('link')
                ->where('link', '=', $currentLink)
                ->get();

            if (count($link) === 0) {
                return [
                    'status' => 200,
                    'data' => $currentLink,
                    'message' => 'This link is allowed!'
                ];
            }

            return [
                'status' => 403,
                'data' => $currentLink,
                'message' => 'This link is already in use!'
            ];
        } catch (\Throwable $e) {
            return [
                'status' => 500,
                'message' => $e->getMessage(),
            ];
        }
    }
}
