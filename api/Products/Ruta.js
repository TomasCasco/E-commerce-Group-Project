// const axios= require("axios");
const { Router } = require("express");
const app = Router();

// controllers
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  updateStock,
  deleteProduct,
} = require("./controller");

// todo: trae todos los productos
app.get("/products", getAllProducts);
//todo: trae un producto por id
app.get("/products/:id", getProductById);
//todo: crear producto
app.post("/products/create", createProduct);
//todo: actualizar producto
app.put("/products/update/:id", updateProduct);
//todo: actualizar stock
app.put("/products/update-stock/:id", updateStock);
//todo: eliminar producto
app.delete("/products/delete/:id", deleteProduct);

/* app.post("/products/create-api", async (req, res) => {
   const { data } = await axios.get("https://dummyjson.com/products");
   const refactApi = data.products.map((product) => {
     return {
      name: product.title.toLocaleLowerCase() || "...",
       price: product.price || 000,
       brand: product.brand.toLocaleLowerCase() || "...",
       image: product.images[0] || "image.jpg",
      description: product.description || "...",
      category: product.category.toLocaleLowerCase(),
    };
  });

  await Product.collection.insertMany(refactApi);
   res.json("productos creados...");
 });
 */
module.exports = app;
