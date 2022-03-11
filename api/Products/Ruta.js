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
  categories = categories ? categories.split(",") : null;
  categories = categories
    ? categories.map((category) => new RegExp(category, "i"))
    : null;

  //crear array con regexp para filtrar brands
  brands = brands ? brands.split(",") : null;
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

// traer todas las marcas
app.get("/products/all/brands", async (req, res) => {
  const products = await Product.find(null, { brand: true, _id: false });
  const brands = new Set();
  products.forEach(({ brand }) => {
    brands.add(brand);
  });
  res.json([...brands]);
});
//traer categorias
app.get("/products/all/categories", async (req, res) => {
  const products = await Product.find(null, { category: true, _id: false });
  const categories = new Set();
  products.forEach(({ category }) => {
    categories.add(category);
  });
  res.json([...categories]);
});

// crea un producto
app.post("/products/create", async (req, res) => {
  try {
    let { name, price, brand, image, stock, description, category } = req.body;
    name = name?.toLocaleLowerCase();
    brand = brand?.toLocaleLowerCase();
    category = category?.toLocaleLowerCase();
    price = parseInt(price);

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
  category = category?.toLocaleLowerCase();
  price = parseInt(price);

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

app.post("/products/create-api", async (req, res) => {
  const { data } = await axios.get(
    "https://api.mercadolibre.com/sites/MLA/search?limit=15&q=monitor 4k"
  );
  let meliApi = await Promise.all(
    data.results.map(async (product) => {
      let productData
      try {
        productData = await axios.get(
          `https://api.mercadolibre.com/items/${product.id}/description`
        );
      } catch (error) {
        productData={
          data:{
            plain_text:"..."
          }
        }
      }
      const { value_name } = product.attributes.find(
        (el) => el.name === "Marca"
      );
      return {
        name: product.title.toLocaleLowerCase() || "...",
        price: product.price || 000,
        brand: value_name ? value_name : "generic",
        image:
          `https://http2.mlstatic.com/D_NQ_NP_2X_${product.thumbnail_id}-F.webp` ||
          "image.jpg",
        description: productData.data.plain_text,
        stock: product.available_quantity,
        category: "Monitors",
      };
    })
  );

  await Product.collection.insertMany(meliApi);
  res.json("productos creados...");
});

module.exports = app;
