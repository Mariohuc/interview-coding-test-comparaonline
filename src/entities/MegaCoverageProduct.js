const { Product } = require("./Product");

class MegaCoverageProduct extends Product{
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice(){
    console.info(`${this.name}'s price and sellIn are never altered!`)
  }
}

module.exports = { MegaCoverageProduct };