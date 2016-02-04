<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class WebsiteContentController extends BaseController
{
    public function showDemoPage(Request $request) {
        return view("demo");
    }
}
