<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\HashtagRequest;
use App\Http\Services\HashtagService;

class HashtagController extends Controller
{
    private $hashtag;

    public function __construct(HashtagService $hashtag)
    {
        $this->hashtag = $hashtag;
    }

    /**
     * Display a listing of the resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $limit = $request->get('limit', 15);

        return response()->json(
            $this->hashtag->list($limit),
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(HashtagRequest $request): JsonResponse
    {
        return response()->json(
            $this->hashtag->create($request)
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        return response()->json(
            $this->hashtag->show(id),
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(HashtagRequest $request, int $id): JsonResponse
    {
        return response()->json([
            $this->hashtag->update($id, $request->all()),
        ]);
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
            $this->hashtag->delete($id)
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
            $this->hashtag->issetLink($request->all()),
        );
    }
}
