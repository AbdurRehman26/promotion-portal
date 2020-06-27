<?php

namespace App\Http\Controllers\Api\V1;

use App\Data\Repositories\UserRepository;
use Kazmi\Http\Controllers\ApiResourceController;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\User;
use Session;

class UserController extends ApiResourceController{
    
    public $_repository;

    public function __construct(UserRepository $repository){
        $this->_repository = $repository;
    }

    public function rules($value=''){
        $rules = [];

        if($value == 'store'){
            

        }

        if($value == 'update'){

            $rules['id'] =  'required';

        }


        if($value == 'destroy'){

            $rules['id'] =  'required';

        }

        if($value == 'show'){

            $rules['id'] =  'required';

        }

        if($value == 'index'){
         
            $rules['pagination'] =  'nullable|in:true,false';

        }

        return $rules;
    
    }

    public function input($value=''){
        $input = request()->only('id', 'email', 'provider_id', 'image', 'first_name', 'provider_access_token');
        
        return $input;
    }


    public function store(Request $request)
    {

        $credentials = $request->only('email' , 'provider_id' , 'image', 'first_name');

        if(empty($credentials['email'])){
            $request->request->add(['email' => request()->only('provider_id')['provider_id']]);
        }

        if(empty($credentials['email'])){
            $credentials['email'] = $credentials['provider_id'];
        }


        $user = User::where('email', '=' , $credentials['email'])->first();
        

        if (!empty($user)) {

            $user->access_token = $token = $user->createToken('Token Name')->accessToken;
            $user->file_path = $user->image;
    
            if ($token) {
                
                Session::put('token', $token);
                $output = ['mesage' => 'success' , 'data' => ['token' => $token, 'user' => $user]];
                return response()->json($output , 200);
            }
        }

        parent::store($request);


        if($credentials['email']){
            $user = User::where('email', '=' , $credentials['email'])->first();
            $user->access_token = $token = $user->createToken('Token Name')->accessToken;
            $user->first_time_user = true;
            $user->file_path = $user->image;

            if ($token) {
                Session::put('token', $token);

                $output = ['mesage' => 'success' , 'data' => ['token' => $token, 'user' => $user]];
                return response()->json($output , 200);
            }
        }

    }
}