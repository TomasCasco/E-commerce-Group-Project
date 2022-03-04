todos los productos
http://localhost:3004/products
retorna un array de objetos [{}]

busqueda por nombre (query)
http://localhost:3004/products?name=value
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
