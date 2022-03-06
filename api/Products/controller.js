const Product = require("./Product"); // model

const getAllProducts = async (req, res) => {
  try {
    let { orderBy, sortBy, name, brands, categories } = req.query;

    //transformar querys a miniscula
    orderBy = orderBy?.toLowerCase();
    sortBy = sortBy?.toLocaleLowerCase();

    //crear array con regexp para filtrar categorias
    categories = categories ? JSON.parse(categories) : null;
    brands = brands ? JSON.parse(brands) : null;

    const regex = (query) => {
      if (Array.isArray(query)) {
        query = query ? query.map((q) => new RegExp(q, "i")) : null;
        return query;
      } else {
        query = query ? new RegExp(query, "i") : null;
        return query;
      }
    };

    categories = regex(categories);
    brands = regex(brands);
    name = regex(name);

    const products = await Product.find()
      .where(name ? { name: name } : null)
      .where(brands ? { brand: { $in: brands } } : null)
      .where(categories ? { category: { $in: categories } } : null)
      .sort({ [orderBy]: sortBy });
    return res.json(products);
  } catch (err) {
    console.log(err);
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findById(id);
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

const createProduct = async (req, res) => {
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
};

const updateProduct = async (req, res) => {
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
};

const updateStock = async (req, res) => {
  const { id } = req.params;
  const { stock } = req.params;
  await Product.findByIdAndUpdate({ _id: id }, { stock: stock });
  res.json({ message: "stock updated" });
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    return res.json({ message: `product ${id} deleted` });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  updateStock,
  deleteProduct,
};
