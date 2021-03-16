class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

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