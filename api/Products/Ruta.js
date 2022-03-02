const { Router } = require("express");
const app = Router();
// model
const Product = require("./Product");

// todos los productos
app.get("/", async (req, res) => {
  const { name } = req.query;

  if (!name) {
    const products = await Product.find();
    return res.json(products);
  }

  const product = await Product.find({ name });
  return res.json(product);
});

// trae un producto
app.get("/id/:id", async (req, res) => {
  const { id } = req.params;

  const products = await Product.findById(id);
  res.json(products);
});

// crea un producto
app.post("/create", async (req, res) => {
  const { name, price, brand, image, description } = req.body;
  const product = new Product({ name, price, brand, image, description });
  await product.save();
  res.json(product);
});

// actualiza un producto
app.put("/:id", async (req, res) => {
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
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  return res.json({ message: `product ${id} deleted` });
});

module.exports = app;
