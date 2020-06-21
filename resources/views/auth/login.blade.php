<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Scripts -->
     @include('facebook-initializer')
    
    <!-- <script src="{{ asset('js/app.js') }}" defer></script> -->
    <script src="{{ asset('front/app.js') }}" defer></script>


     <link rel="shortcut icon" href="{{ asset('/images/favicon.ico') }}">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">
    <!-- Styles -->
    <!-- <link href="{{asset(mix('css/app.css'))}}" rel="stylesheet"> -->
</head>
<body>


            <div id="app"><!----> <main><section class="section section-shaped section-lg my-0"><div class="shape shape-style-1 bg-gradient-default"><span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span></div> <div class="container pt-lg-md"><div class="row justify-content-center"><div class="col-lg-5"><div class="card border-0 shadow bg-secondary"><!----> <div class="card-body px-lg-5 py-lg-5"><form role="form"><div class="form-group mb-3 input-group input-group-alternative"><!----> <div class="input-group-prepend"><span class="input-group-text"><i class="ni ni-email-83"></i></span></div> <input aria-describedby="addon-right addon-left" placeholder="Email" class="form-control"> <!---->  <!----></div> <div class="form-group input-group input-group-alternative"><!----> <div class="input-group-prepend"><span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span></div> <input aria-describedby="addon-right addon-left" type="password" placeholder="Password" class="form-control"> <!---->  <!----></div> <div class="custom-control custom-checkbox"><input id="BRyirZm" type="checkbox" class="custom-control-input"> <label for="BRyirZm" class="custom-control-label">
                                Remember asdme
                            </label></div> <div class="text-center"><button type="button" class="btn my-4 btn-primary"><!----> <!----> <!----> Sign In</button></div></form></div> <!----> <!----></div></div></div></div> <div class="shape shape-style-1 bg-gradient-default"><span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span></div></section></main> <footer class="footer has-cards"><div class="container"><hr> <div class="row align-items-center justify-content-md-between"><div class="col-md-6"><div class="copyright"></div></div> <div class="col-md-6"><ul class="nav nav-footer justify-content-end"><li class="nav-item"></li> <li class="nav-item"></li> <li class="nav-item"></li> <li class="nav-item"></li></ul></div></div></div></footer></div>


    

</body>


</html>
