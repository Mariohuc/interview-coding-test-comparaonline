class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  /**
   * In this method and its overrides, the sequence will always be:
   * - price updates, which are given under the condition that the price is within the inclusive range [0, 50], 
   *   with the exception of MegaCoverageProduct
   * - decrease of the sellIn property,
   * - finally, price update (under the previous conditions).
   */
  updatePrice(){
    if( this.price > 0 ){
      this.price -= 1;
    }

    this.sellIn -= 1;

    if( this.sellIn < 0 ){
      if( this.price > 0 ) this.price -= 1;
    }
  }
}

module.exports = { Product };