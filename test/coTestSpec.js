const expect = require("chai").expect;
const sinon = require("sinon");

const { Product } = require("../src/entities/Product");
const { FullCoverageProduct } = require("../src/entities/FullCoverageProduct");
const { MegaCoverageProduct } = require("../src/entities/MegaCoverageProduct");
const { SpecialFullCoverageProduct } = require("../src/entities/SpecialFullCoverageProduct");
const { SuperSaleProduct } = require("../src/entities/SuperSaleProduct");

const { CarInsurance } = require("../src/entities/CarInsurance");

describe("Product tests using EXPECT interface from CHAI module: ", function () {
  
  describe("Check updatePrice method: ", function () {
    it('Check updatePrice() with initial values: sellIn = 0 and price = 0, should return: sellIn = -1 and price = 0', function(){
      const ci = new CarInsurance([ new Product("Medium Coverage", 0, 0) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(-1);
      expect(products[0].price).to.equal(0);
    });

    it('Check updatePrice() with initial values: sellIn = -4 and price = 10, should return: sellIn = -5 and price = 8', function(){
      const ci = new CarInsurance([ new Product("Low Coverage", -4, 10) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(-5);
      expect(products[0].price).to.equal(8);
    });

    it('Check updatePrice() with initial values: sellIn = 3 and price = 10, should return: sellIn = 2 and price = 9', function(){
      const ci = new CarInsurance([ new Product("Low Coverage", 3, 10) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(2);
      expect(products[0].price).to.equal(9);
    });
  });

});


describe("FullCoverageProduct tests using EXPECT interface from CHAI module: ", function () {
  
  describe("Check updatePrice method: ", function () {
    it('Check updatePrice() with initial values: sellIn = 0 and price = 0, should return: sellIn = -1 and price = 2', function(){
      const ci = new CarInsurance([ new FullCoverageProduct("Full Coverage", 0, 0) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(-1);
      expect(products[0].price).to.equal(2);
    });

    it('Check updatePrice() with initial values: sellIn = -6 and price = 49, should return: sellIn = -7 and price = 50', function(){
      const ci = new CarInsurance([ new FullCoverageProduct("Full Coverage", -6, 49) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(-7);
      expect(products[0].price).to.equal(50);
    });

    it('Check updatePrice() with initial values: sellIn = 5 and price = 50, should return: sellIn = 4 and price = 50', function(){
      const ci = new CarInsurance([ new FullCoverageProduct("Full Coverage", 5, 50) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(4);
      expect(products[0].price).to.equal(50);
    });
  
  });


});

describe("SpecialFullCoverageProduct tests using EXPECT interface from CHAI module: ", function () {
  
  describe("Check updatePrice method: ", function () {
    it('Check updatePrice() with initial values: sellIn = 0 and price = 0, should return: sellIn = -1 and price = 0', function(){
      const ci = new CarInsurance([ new SpecialFullCoverageProduct("Special Full Coverage", 0, 0) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(-1);
      expect(products[0].price).to.equal(0);
    });

    it('Check updatePrice() with initial values: sellIn = 1 and price = 10, should return: sellIn = 0 and price = 13', function(){
      const ci = new CarInsurance([ new SpecialFullCoverageProduct("Special Full Coverage", 1, 10) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(0);
      expect(products[0].price).to.equal(13);
    });

    it('Check updatePrice() with initial values: sellIn = 8 and price = 30, should return: sellIn = 7 and price = 32', function(){
      const ci = new CarInsurance([ new SpecialFullCoverageProduct("Special Full Coverage", 8, 30) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(7);
      expect(products[0].price).to.equal(32);
    });

    it('Check updatePrice() with initial values: sellIn = 15 and price = 20, should return: sellIn = 14 and price = 21', function(){
      const ci = new CarInsurance([ new SpecialFullCoverageProduct("Special Full Coverage", 15, 20) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(14);
      expect(products[0].price).to.equal(21);
    });

    it('Check updatePrice() with initial values: sellIn = 1 and price = 50, should return: sellIn = 0 and price = 50', function(){
      const ci = new CarInsurance([ new SpecialFullCoverageProduct("Special Full Coverage", 1, 50) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(0);
      expect(products[0].price).to.equal(50);
    });
  
  });


});


describe("SuperSaleProduct tests using EXPECT interface from CHAI module: ", function () {

  describe("Check updatePrice method: ", function () {
    it('Check updatePrice() with initial values: sellIn = 0 and price = 0, should return: sellIn = -1 and price = 0', function(){
      const ci = new CarInsurance([ new SuperSaleProduct("Super Sale Product", 0, 0) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(-1);
      expect(products[0].price).to.equal(0);
    });

    it('Check updatePrice() with initial values: sellIn = -5 and price = 20, should return: sellIn = -6 and price = 16', function(){
      const ci = new CarInsurance([ new SuperSaleProduct("Super Sale Product", -5, 20) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(-6);
      expect(products[0].price).to.equal(16);
    });

    it('Check updatePrice() with initial values: sellIn = -4 and price = 3, should return: sellIn = -5 and price = 0', function(){
      const ci = new CarInsurance([ new SuperSaleProduct("Super Sale Product", -4, 3) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(-5);
      expect(products[0].price).to.equal(0);
    });

    it('Check updatePrice() with initial values: sellIn = 1 and price = 1, should return: sellIn = 0 and price = 0', function(){
      const ci = new CarInsurance([ new SuperSaleProduct("Super Sale Product", 1, 1) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(0);
      expect(products[0].price).to.equal(0);
    });

    it('Check updatePrice() with initial values: sellIn = 2 and price = 2, should return: sellIn = 1 and price = 0', function(){
      const ci = new CarInsurance([ new SuperSaleProduct("Super Sale Product", 2, 2) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(1);
      expect(products[0].price).to.equal(0);
    });
  
  });


});


describe("MegaCoverageProduct tests using EXPECT interface from CHAI module: ", function () {
 
  describe("Check updatePrice method: ", function () {
    it('Check updatePrice() with initial values: sellIn = -10 and price = 80, should return the same values', function(){
      const ci = new CarInsurance([ new MegaCoverageProduct("Mega Coverage Product", -10, 80) ]);
      const products = ci.updatePrice();
      expect(products[0].sellIn).to.equal(-10);
      expect(products[0].price).to.equal(80);
    });
  });

});