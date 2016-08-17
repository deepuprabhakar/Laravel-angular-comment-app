<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Comment extends Model
{
    protected $fillable = ['username', 'comment'];

    protected $appends = ['time'];

    public function getTimeAttribute()
    {
        $time = new Carbon($this->attributes['created_at']);
        return $time->diffForHumans();
    }
}
