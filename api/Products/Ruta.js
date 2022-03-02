const { Router } = require("express");
const app = Router();
// model
const Product = require("./Product");

// todos los productos
app.get("/products", async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const products = await Product.find();
      return res.json(products);
    }

    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
    }

    const product = await Product.find({
      name: { $regex: escapeRegExp(name), $options: "i" },
    });
    return res.json(product);
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
    const { name, price, brand, image, description } = req.body;
    const product = new Product({ name, price, brand, image, description });
    await product.save();
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

// actualiza un producto
app.put("/products/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, brand, image, description } = req.body;

  try {
    if (id) {
      const product = await Product.findByIdAndUpdate(
        { _id: id },
        { name, price, brand, image, description }
      );
      return res.json({
        message: `product ${id} updated successfully`,
      });
    } else {
      return res.json("id not found");
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

module.exports = app;
