<?php
//
//namespace App\Http\Middleware;
//
//use Closure;
//
//class Cors
//{
//    /**
//     * Get the path the user should be redirected to when they are not authenticated.
//     *
//     * @param  \Closure $next
//     * @return mixed
//     */
//    protected function handle($request, Closure $next)
//    {
//        return "test";
//        dd($request);
////        return $next($request)
////            ->header('Access-Control-Allow-Origin', '*')
////            ->header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
////            ->header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, Authorization, X-Requested-With');
//
//        header("Access-Control-Allow-Origin", "*");
//        header("Access-Control-Allow-Methods: PUT, GET, POST, PATCH, DELETE, OPTIONS");
//        header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");
//        return $next($request);
//    }
//}


namespace App\Http\Middleware;

use Closure;

class Cors
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Allow-Credentials', 'true')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    }
}

