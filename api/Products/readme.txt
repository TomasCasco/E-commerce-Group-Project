TODOS LOS PRODUCTOS
http://localhost:3004/products
retorna un array de objetos [{}]


QUERIES DISPONIBLES

http://localhost:3004/products?...

--

Search:

name=stringName

Ejemplo = http://localhost:3004/products?name=samsung galaxy

--

Order:

orderBy=string_Propiedad_Producto ("name" | "price"...etc)

sortBy=string_Order("asc" | "desc")

Ejemplo = http://localhost:3004/products?orderBy=price&sortBy=desc

--

Filters:

brands=array_Brands (["samsung","iphone"...etc])

categories=array_Categories (["categoria1","categoria2"...etc])


Ejemplo = http://localhost:3004/products?brands=["samsung"]&categories=["categoria1"]

--

Aclaracion: Ninguna de las queries es case sensitive, asi que se puede ingresar en miniscula o mayuscula sus respectivos parametros.
Todas las queries pueden implementarse de forma simultanea.
-----------------

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
