<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Action;

class Type extends Model
{
    use HasFactory;

    public function actions()
    {
        return $this->hasMany(Action::class);
    }
}
