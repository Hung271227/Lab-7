import { Product } from "./product.js";

const products = [
  new Product(
    1,
    "Áo thun nữ",
    199000,
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
  ),
  new Product(
    2,
    "Quần jean nữ",
    299000,
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
  ),
  new Product(
    3,
    "Váy nữ",
    259000,
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
  ),
  new Product(
    4,
    "Áo sơ mi nam",
    249000,
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
  ),
  new Product(
    5,
    "Áo thun nam",
    159000,
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  ),
  new Product(
    6,
    "Quần jean nam",
    329000,
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
  ),
];

const productList = document.getElementById("product-list");

productList.innerHTML = products.map((product) => product.display()).join("");
