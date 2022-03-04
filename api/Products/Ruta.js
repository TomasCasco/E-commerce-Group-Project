const { default: axios } = require("axios");
const { Router } = require("express");
const app = Router();
// model
const Product = require("./Product");

// todos los productos
app.get("/products", async (req, res) => {
  let { name, price, category, order_name, brand } = req.query;
  order_name = order_name?.toLowerCase();
  brand = brand?.toLowerCase();

  try {
    if (!name && !price && !category && !order_name && !brand) {
      const products = await Product.find();
      return res.json(products);
    }

    if (name && !price && !category && !order_name && !brand) {
      const product = await Product.find({
        name: { $regex: escapeRegExp(name), $options: "i" },
      });
      return res.json(product);
    }

    if (!name && price === "asc" && !category && !order_name && !brand) {
      const products = await Product.find().sort({ price: 1 });
      return res.json(products);
    }

    if (!name && price === "desc" && !category && !order_name && !brand) {
      const products = await Product.find().sort({ price: -1 });
      return res.json(products);
    }

    if (!name && !price && category && !order_name && !brand) {
      const product = await Product.find({
        category: { $regex: escapeRegExp(category), $options: "i" },
      });
      return res.json(product);
    }

    if (!name && !price && !category && order_name === "asc" && !brand) {
      const products = await Product.find();
      return res.json(
        products.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        )
      );
    }

    if (!name && !price && !category && order_name === "desc" && !brand) {
      const products = await Product.find();
      const desc = products.sort((a, b) =>
        b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1
      );
      return res.json(desc);
    }

    if (!name && !price && !category && !order_name && brand) {
      const products = await Product.find({
        brand: { $regex: escapeRegExp(brand), $options: "i" },
      });
      return res.json(products);
    }

    // todo: ====================  combinando querys

    if (!name && !price && category && order_name === "asc" && !brand) {
      const products = await Product.find({
        category: { $regex: escapeRegExp(category), $options: "i" },
      });
      const result = products.sort((a, b) =>
        a.category.toLowerCase() > b.category.toLowerCase() ? 1 : -1
      );
      return res.json(result);
    }

    if (!name && !price && category && order_name === "desc" && !brand) {
      const products = await Product.find({
        category: { $regex: escapeRegExp(category), $options: "i" },
      });
      const result = products.sort((a, b) =>
        a.category.toLowerCase() > b.category.toLowerCase() ? -1 : 1
      );
      return res.json(result);
    }

    if (!name && price === "asc" && category && !order_name && !brand) {
      const products = await Product.find({
        category: { $regex: escapeRegExp(category), $options: "i" },
      });
      const result = products.sort((a, b) => (a.price > b.price ? 1 : -1));
      return res.json(result);
    }

    if (!name && price === "desc" && category && !order_name && !brand) {
      const products = await Product.find({
        category: { $regex: escapeRegExp(category), $options: "i" },
      });
      const result = products.sort((a, b) => (a.price > b.price ? -1 : 1));
      return res.json(result);
    }

    if (!name && !price && category && !order_name && brand) {
      const products = await Product.find({
        category: { $regex: escapeRegExp(category), $options: "i" },
        brand: { $regex: escapeRegExp(brand), $options: "i" },
      });
      return res.json(products);
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
//   const { data } = await axios.get("https://dummyjson.com/products");
//   const refactApi = data.products.map((product) => {
//     return {
//       name: product.title || "...",
//       price: product.price || 000,
//       brand: product.brand || "...",
//       image: product.images[0] || "image.jpg",
//       stock: product.stock || 000,
//       description: product.description || "...",
//       category: product.category,
//     };
//   });

//   await Product.collection.insertMany(refactApi);
//   res.json("productos creados...");
// });
// hola
module.exports = app;
