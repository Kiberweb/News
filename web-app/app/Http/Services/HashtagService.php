<?php

namespace App\Http\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Services\TranslitService;
use Carbon\Carbon;

class HashtagService
{
    private $translate;

    public function __construct(TranslitService $translate)
    {
        $this->translate = $translate;
    }
    /**
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function create(Request $request): array
    {
        try {
            DB::table('hashtags')->insert([
                'name' => $request->get('name'),
                'link' => $request->get('link'),
                'created_at' => Carbon::now(),
            ]);
        } catch (\Throwable $e) {
            return [
                'status' => 500,
                'message' => $e->getMessage(),
            ];
        }

        return [
            'status' => 200,
            'message' => 'Hashtag add!',
        ];
    }

    /**
     *
     * @return array
     */
    public function list(int $limit): array
    {
        try {
            return [
                'status' => 200,
                'message' => 'list hashtags',
                'data' => DB::table('hashtags')
                            ->select('id','name','link')
                            ->paginate($limit)
                            ->toArray(),
            ];
        } catch (\Throwable $e) {
            return [
                'status' => 500,
                'message' => $e->getMessage(),
            ];
        }
    }

    /**
     *
     * @param  int  $id
     * @return array
     */
    public function show(int $id): array
    {
        try {
            return [
                'status' => 200,
                'data' => DB::table('hashtags')
                    ->select('id','name','link')
                    ->where('id', '=', $id)
                    ->get()
            ];
        } catch (\Throwable $e) {
            return [
                'status' => 500,
                'message' => $e->getMessage(),
            ];
        }
    }

    /**
     *
     * @return array
     */
    public function update(int $id, array $values): array
    {
        try {
            DB::table('hashtags')
                ->where('id', '=', $id)
                ->update([
                    'name' => $values['name'],
                    'link' => $values['link'],
                    'visible' => $values['visible'],
                    'updated_at' => Carbon::now(),
            ]);

            return [
                'status' => 200,
                'message' => 'Hashtag updated successful!'
            ];
        } catch (\Throwable $e) {
            return [
                'status' => 500,
                'message' => $e->getMessage(),
            ];
        }
    }

    /**
     * @param  int  $id
     * @return array
     */
    public function delete(int $id): array
    {
        try {
            DB::table('news_to_hashtags')
                ->where('id_hashtag', '=', $id)
                ->delete();

            DB::table('hashtags')
                ->where('id', '=', $id)
                ->delete();

            return [
                'status' => 200,
                'message' => 'Hashtag delete successful!'
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
            $link = DB::table('hashtags')
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
