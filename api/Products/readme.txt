todos los productos
http://localhost:3004/products
retorna un array de objetos [{}]

busqueda por nombre o type (query)
http://localhost:3004/products?name=value || http://localhost:3004/products?type=value
retorna un array de objetos con los nombres o type que incluyan la query [{}]

busqueda por id
http://localhost:3004/products/:id
retorna un objeto con el producto

order asc o desc por nombre
http://localhost:3004/products/order/:asc || http://localhost:3004/products/order/:desc
returna on array ordenado (si no es "asc" o "desc" retorna ordenado por defecto)

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
