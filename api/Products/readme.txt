todos los productos
http://localhost:3004/products
retorna un array de objetos [{}]

busqueda por nombre (query)
http://localhost:3004/products?name=value
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
