const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    review: [],
  },
  {
    id: "bluejean",
    description: "Blue Jean",
    price: 55.12,
    review: [],
  },
]

function getAllProducts() {
  return products
}
function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max
  })
}
function getProductsById(id) {
  return products.find((product) => {
    return product.id === id
  })
}

function addProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    review: [],
  }
  products.push(newProduct)
  return newProduct
}
function addProductReview(id, rating, comment) {
  const matchProduct = getProductsById(id)
  if (matchProduct) {
    const newReview = {
      rating,
      comment,
    }
    matchProduct.review.push(newReview)
    return newReview
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
  addProduct,
  addProductReview,
}
