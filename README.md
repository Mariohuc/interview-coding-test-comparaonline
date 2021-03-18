# ComparaOnline Test

## Interviewee Notes

According to the evaluation rules:
- Design an Object Oriented solution:
  - The proposed solution consists of a parent class called `Product` and its derived subclasses, which each correspond to the 4 types of product (**Full Coverage**, **Mega Coverage**, **Special Full Coverage** and **Super Sale**). Each class implements its own updatePrice(), and now thanks to polymorphism, the behavior of this method will depend on the type of instance that invokes it.
- The solution must be scalable, we expect to be able to add new products on the future:
  - When you have a new product type, you must define a subclass derived from `Product` and overload its updatePrice() method if necessary.
- Meaningful git commits, we expect to see your solution approach as commit messages:
  - The commits include messages that summarize everything done so far.
- We expect a Node.js (>6) codebase, otherwise you should provide a `Dockerfile` with all the required dependencies to run the required commands.
  - Node 14.5.0 was used
- 100% code coverage, you should provide the report and the command to run the tests and get the coverage report.
  - To run the tests and generate the report use the command `npm run test`.
  - The report is generated by command line through the `nyc` package, which allows different output formats such as html (which is used and can be seen in the **coverage** folder by opening the **index.html** file) or other formats.
  - The unit tests covered the classes of: `Product`,`FullCoverageProduct`, `MegaCoverageProduct`, `SpecialFullCoverageProduct` and `SuperSaleProduct`, where all tests were passed and 100% code coverage was obtained.
  - Additionally a test case was added to `CarInsurance` to test its constructor basically.


## Final notes

- The initialization of the properties of the products is the responsibility of the user since the constructor of the Product class does not define previous validations.
- As well as the `npm run test` command, the `npm run after-30-days` command is also provided to generate the file `products_after_30_days.txt` which is identical in form to the initial example.
- The **SuperSaleProduct**'s updatePrice() was implemented based on the **Product**'s updatePrice(). This degrades the price twice as fast as **Product**.

```js
// Product's updatePrice()
...
  updatePrice(){
    if( this.price > 0 ){
      this.price -= 1;
    }

    this.sellIn -= 1;

    if( this.sellIn < 0 ){
      if( this.price > 0 ) this.price -= 1;
    }
  }
...
```
```js
// SuperSaleProduct's updatePrice()
...
  updatePrice(){
    if( this.price > 0 ){
      this.price -= 1;
      if( this.price > 0 ) this.price -= 1;
    }

    this.sellIn -= 1;

    if( this.sellIn < 0 ){
      if( this.price > 0 ){ 
        this.price -= 1;
        if( this.price > 0 ) this.price -= 1;
      }
    }
  }
...
```