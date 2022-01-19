<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Services\NewsService;
use App\Http\Requests\NewsRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    private $news;

    public function __construct(NewsService $news)
    {
        $this->news = $news;
    }
    /**
     *
     * @param \Illuminate\Http\Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $limit = $request->get('limit', 15);

        return response()->json(
            $this->news->list($limit),
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(NewsRequest $request): JsonResponse
    {
        return response()->json(
            $this->news->create($request->all()),
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $name
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(string $name): JsonResponse
    {
        return response()->json(
            $this->news->show($name),
        );
    }

    public function hashtagToNews(Request $request): JsonResponse
    {
        return response()->json(
            $this->news->hashtagToNews($request->all()),
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(NewsRequest $request, string $id): JsonResponse
    {
        return response()->json(
            $this->news->update($id, $request->all()),
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        return response()->json(
            $this->news->delete($id),
        );
    }

    public function issetLink(Request $request): JsonResponse
    {
        if (is_null($request->get('link'))) {
            return response()->json([
                'message' => 'link is empty!',
                'error' => 500,
            ]);
        }

        return response()->json(
            $this->news->issetLink($request->all()),
        );
    }
}
