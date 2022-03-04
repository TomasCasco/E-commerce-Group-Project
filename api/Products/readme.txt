todos los productos
http://localhost:3004/products
retorna un array de objetos [{}]

busqueda por nombre (query)
http://localhost:3004/products?name=value
<<<<<<< HEAD
retorna un array de objetos [{}]

busqueda por categorias (query)
http://localhost:3004/products?categories=["laptops","fragrances"]
retorna un array de objetos [{}]

busqueda por marcas (query)
http://localhost:3004/products?brands=["apple"]
retorna un array de objetos [{}]

ordenar por propiedades
---- orderBy=(name, price, stock, ...)
---- sortBy=1 -> asc
---- sortBy=-1 -> desc
http://localhost:3004/products?orderBy=price&&sortBy=-1
=======
retorna un array de objetos con los nombres que incluyan la query [{}]

ordena por precio asc o desc (query)
http://localhost:3004/products?price=(asc o desc)
retorna un array de objetos con los precios ordenados [{}]

busca por categoria
http://localhost:3004/products?category=(ej: smartphones)
retorna un array de objetos [{}]

ordena por nombre asc o desc
http://localhost:3004/products?name=(ej: asc)
retorna un array de objetos [{}]

busca por marca
http://localhost:3004/products?brand=(ej: apple)
retorna un array de objetos [{}]

busca por categoria y ordena nombres asc o desc
http://localhost:3004/products?category=(ej: smartphones)&&order_name=(ej:asc)
retorna un array de objetos [{}]

busca por categoria y ordena precio asc o desc
http://localhost:3004/products?category=(ej: smartphones)&&price=(ej:asc)
retorna un array de objetos [{}]

busca por categoria y marca
http://localhost:3004/products?category=(ej: smartphones)&&brand=(ej:apple)
>>>>>>> 8b0a63af32d18fa9e272e1d7f930ddc30310362f
retorna un array de objetos [{}]

busqueda por id
http://localhost:3004/products/:id
retorna un objeto con el producto

crear un producto
http://localhost:3004/products/create
recibe por body un objeto con las propiedades del producto
Ej: {
	"name": "messi-2",
	"price":  8888,
	"brand": "messi",
	"image": "http://image.jpeg",
	"description": "asdasdasdasdasd"
    "stock": 100
}

editar un producto
http://localhost:3004/products/update/:id
recibe por body un objeto con las propiedades del producto a editar
Ej: {
	"name": "messi-3",
	"price":  8888,
	"brand": "messi",
	"image": "http://image.jpeg",
	"description": "asdasdasdasdasd"
    "stock": 99
}
returna un json
ej: {
    message: `product ${id} updated successfully`,
    }


eliminar un producto
http://localhost:3004/products/delete/:id
returna un json
ej: {
    message: `product ${id} deleted successfully`,
    }
