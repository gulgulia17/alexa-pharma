<!DOCTYPE html>
<html>
<head>
    <title>Products</title>
</head>
<body>
    <h1>Products</h1>
    <ul>
    @foreach ($products as $product)
        <li>
            <strong>{{ $product->name }}</strong> - {{ $product->composition }} ({{ $product->type }})
        </li>
    @endforeach
    </ul>
</body>
</html>
