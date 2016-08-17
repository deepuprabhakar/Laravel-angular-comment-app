<?php

namespace App\Http\Controllers\ExampleControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

use App\Comment;
use App\Events\CommentEvent;

class AngularRoutesController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Default action for all Angular 2 routes
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('backend.content');
    }

    public function store(Request $request)
    {
        $comment = Comment::create($request->all());
        event(new CommentEvent($comment)); 
        return $comment;
    }
    
    public function get()
    {
        return Comment::latest()->get();
    }
}
