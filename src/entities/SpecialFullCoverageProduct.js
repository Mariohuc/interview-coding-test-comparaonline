const { Product } = require("./Product");

class SpecialFullCoverageProduct extends Product{
  constructor(name, sellIn, price) {
    super(name, sellIn, price);
  }

  updatePrice(){
    
    if( this.price < 50 ) this.price += 1;

    if( this.sellIn < 11 ){
      if( this.price < 50 ) this.price += 1;
    }
    if( this.sellIn < 6 ){
      if( this.price < 50 ) this.price += 1;
    }

    this.sellIn -= 1;

    if( this.sellIn < 0 ){
      this.price = this.price - this.price;
    }
  }
}

module.exports = { SpecialFullCoverageProduct };