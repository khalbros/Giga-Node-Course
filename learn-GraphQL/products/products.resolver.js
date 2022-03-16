const productModel = require("./products.model")

module.exports = {
  Query: {
    products: () => {
      return productModel.getAllProducts()
    },
    productsByPrice: (_, args) => {
      return productModel.getProductsByPrice(args.min, args.max)
    },
    productsById: (_, args) => {
      return productModel.getProductsById(args.id)
    },
  },
  Mutation: {
    addProduct: (_, args) => {
      return productModel.addProduct(args.id, args.description, args.price)
    },
    addProductReview: (_, args) => {
      return productModel.addProductReview(args.id, args.rating, args.comment)
    },
  },
}
