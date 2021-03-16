const { Product } = require("./Product");

class FullCoverageProduct extends Product{
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice(){
    if( this.price < 50 ) this.price += 1;

    this.sellIn -= 1;

    if( this.sellIn < 0 ){
      if( this.price < 50 ) this.price += 1;
    }
  }
}

module.exports = { FullCoverageProduct };