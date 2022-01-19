<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\DB;

class NewsHashtagsService
{
    public function getHashtagsNews(int $hashtagId) {
        return DB::select('SELECT news.id, news.title, news.text, news.link FROM news_to_hashtags AS nh LEFT JOIN news ON news.id = nh.id_news WHERE nh.id_hashtag = :hashtagId', ['hashtagId' => $hashtagId]);
    }
    public function getNewsHashtags(int $newsId)
    {
        return DB::select('SELECT hashtags.id, hashtags.name, hashtags.link FROM news_to_hashtags AS nh LEFT JOIN hashtags ON hashtags.id = nh.id_hashtag WHERE nh.id_news = :newsId', ['newsId' => $newsId]);
    }
}
