<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'Alexa Biopharma')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body class="font-sans">
    @include('includes.header')
    <main>
        @yield('content')
    </main>
    @include('includes.footer')
</body>
</html>
