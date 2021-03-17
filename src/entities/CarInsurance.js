class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    this.products.forEach((prod) => prod.updatePrice())
    return this.products;
  }
}

module.exports = { CarInsurance }