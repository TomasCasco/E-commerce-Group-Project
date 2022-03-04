const { default: axios } = require("axios");
const { Router } = require("express");
const app = Router();
// model
const Product = require("./Product");

// todos los productos
app.get("/products", async (req, res) => {
  const { name, type } = req.query;
  try {
    if (!name && !type) {
      const products = await Product.find();
      return res.json(products);
    }

    if (name && !type) {
      const product = await Product.find({
        name: { $regex: escapeRegExp(name), $options: "i" },
      });
      return res.json(product);
    }

    if (!name && type) {
      const product = await Product.find({
        type: { $regex: escapeRegExp(type), $options: "i" },
      });
      return res.json(product);
    }

    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
    }
  } catch (err) {
    console.log(err);
  }
});

// trae un producto
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findById(id);
    res.json(products);
  } catch (err) {
    console.log(err);
  }
});

app.get("/products/order/:order", async (req, res) => {
  const { order } = req.params;

  if (order === "asc" || order === "ASC") {
    const products = await Product.find();
    const result = products.sort((a, b) => a.name.localeCompare(b.name));
    return res.json(result);
  } else if (order === "desc" || order === "DESC") {
    const products = await Product.find();
    const result = products.sort((a, b) => b.name.localeCompare(a.name));
    return res.json(result);
  }

  return res.json(await Product.find());
});

// crea un producto
app.post("/products/create", async (req, res) => {
  try {
    const { name, price, brand, image, stock, description, type } = req.body;
    const product = new Product({
      name,
      price,
      brand,
      image,
      stock,
      description,
      type,
    });
    await product.save();
    res.json(product);
  } catch (err) {
    cd;
    console.log(err);
  }
});

// actualiza un producto
app.put("/products/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, brand, image, description, type } = req.body;

  try {
    if (id) {
      await Product.findByIdAndUpdate(
        { _id: id },
        { name, price, brand, image, description, type }
      );
      return res.json({
        message: `product ${id} updated successfully`,
      });
    } else {
      return res.json({ message: "id not found" });
    }
  } catch (err) {
    console.log(err);
  }
});

// elimina un producto
app.delete("/products/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    return res.json({ message: `product ${id} deleted` });
  } catch (err) {
    console.log(err);
  }
});

//! crear productos falsos de prueba
// app.post("/products/create-api", async (req, res) => {
//   const response = await axios.get("https://dummyjson.com/products");
//   const api = await response.data;
//   const refactApi = api.products.map((product) => {
//     return {
//       name: product.title || "...",
//       price: product.price || 000,
//       brand: product.brand || "...",
//       image: product.images[0] || "image.jpg",
//       stock: product.stock || 000,
//       description: product.description || "...",
//     };
//   });

//   await Product.collection.insertMany(refactApi);
//   res.json("productos creados...");
// });

module.exports = app;
