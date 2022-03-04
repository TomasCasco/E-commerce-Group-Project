const { default: axios } = require("axios");
const { Router } = require("express");
const app = Router();
// model
const Product = require("./Product");

// todos los productos
app.get("/products", async (req, res) => {
  let { orderBy, sortBy, brands, categories, name } = req.query;

  //transformar querys a miniscula
  orderBy = orderBy?.toLowerCase();
  sortBy = sortBy?.toLocaleLowerCase();
  name = name?.toLocaleLowerCase();

  //crear array con regexp para filtrar categorias
  categories = categories ? JSON.parse(categories) : null;
  categories = categories
    ? categories.map((category) => new RegExp(category, "i"))
    : null;

  //crear array con regexp para filtrar brands
  brands = brands ? JSON.parse(brands) : null;
  brands = brands ? brands.map((brand) => new RegExp(brand, "i")) : null;

  try {
    const products = await Product.find()
      .where(name ? { name: { $regex: ".*" + name + ".*" } } : null)
      .where(brands ? { brand: { $in: brands } } : null)
      .where(categories ? { category: { $in: categories } } : null)
      .sort({ [orderBy]: sortBy });
    res.json(products);
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
    let { name, price, brand, image, stock, description, category } = req.body;
    name = name?.toLocaleLowerCase();
    brand = brand?.toLocaleLowerCase();

    const product = new Product({
      name,
      price,
      brand,
      image,
      stock,
      description,
      category,
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
  let { name, price, brand, image, stock, description, category } = req.body;
  name = name?.toLocaleLowerCase();
  brand = brand?.toLocaleLowerCase();

  try {
    if (id) {
      await Product.findByIdAndUpdate(
        { _id: id },
        { name, price, brand, image, description, category, stock }
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
