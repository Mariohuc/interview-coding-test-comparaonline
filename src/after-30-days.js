const fs = require('fs');

const { Product } = require("./entities/Product");
const { FullCoverageProduct } = require("./entities/FullCoverageProduct");
const { MegaCoverageProduct } = require("./entities/MegaCoverageProduct");
const { SpecialFullCoverageProduct } = require("./entities/SpecialFullCoverageProduct");
const { SuperSaleProduct } = require("./entities/SuperSaleProduct");

const { CarInsurance } = require("./entities/CarInsurance");

/**
 * Creation of products
 */

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new FullCoverageProduct('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new MegaCoverageProduct('Mega Coverage', 0, 80),
  new MegaCoverageProduct('Mega Coverage', -1, 80),
  new SpecialFullCoverageProduct('Special Full Coverage', 15, 20),
  new SpecialFullCoverageProduct('Special Full Coverage', 10, 49),
  new SpecialFullCoverageProduct('Special Full Coverage', 5, 49),
  new SuperSaleProduct('Super Sale', 3, 6),
];

var data = '';
const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
  data += `${product.name}, ${product.sellIn}, ${product.price}\n`;
};

data = '******** Day 0 ********\nname, sellIn, price\n';
carInsurance.products.forEach(productPrinter);
data += '\n';

for (let i = 1; i <= 30; i += 1) {
  data += `******** Day ${i} ********\nname, sellIn, price\n`;
  carInsurance.updatePrice().forEach(productPrinter);
  data += '\n';
}

fs.writeFile('products_after_30_days.txt', data, function (err) {
  if (err) return console.log(err);
  console.log('products_after_30_days.txt created!');
});