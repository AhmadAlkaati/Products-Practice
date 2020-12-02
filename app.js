let products = [
    {id: 1, manufacturer: 'Samsung', model: 'Samsung galaxy S20 FE', color: 'black', price: 1050.45},
    {id: 2, manufacturer: 'Samsung', model: 'Samsung galaxy S20 Ultra', color: 'black', price: 1200.20},
    {id: 3, manufacturer: 'Samsung', model: 'Samsung galaxy S20 +', color: 'white', price: 2100.30},
    {id: 4, manufacturer: 'Samsung', model: 'Samsung galaxy S10 Lite', color: 'white', price: 1800.65},
    {id: 5, manufacturer: 'Samsung', model: 'Samsung galaxy S10 +', color: 'white', price: 1050.45},
    {id: 6, manufacturer: 'Samsung', model: 'Samsung galaxy S9 +', color: 'black', price: 1110.50},
    {id: 7, manufacturer: 'Huawei', model: 'Huawei Y5P', color: 'black', price: 1770.65},
    {id: 8, manufacturer: 'Huawei', model: 'Huawei P40 Lite', color: 'white', price: 1050.45},
    {id: 9, manufacturer: 'Huawei', model: 'Huawei Y6P', color: 'black', price: 1210.50}
];

// Finding products that are cheaper than 1500 //
let cheaperThan1500 = function (products){
    let targetedProducts= [];
    for(i = 0; i < products.length; i++){
        let product = products[i];
        let price = product.price;
        if(price <= 1500){
          targetedProducts.push(price);
        }
    }
    return targetedProducts;
}

console.log(cheaperThan1500(products));


// Finding prices between 1700 and 2100 //

let rangePrice = function(products){
   let pricesBetween = [];
    for(i = 0 ; i < products.length; i++){
       let product = products[i];
       let price = product.price;
       if( price >= 1700 && price <= 2100){
           pricesBetween.push(price);
       }
  }
   return pricesBetween;
}

console.log(rangePrice(products));

// Calculation of all prices in products //


var total = 0;
let calcPrices = function(products){
   
   for(i = 0; i < products.length; i++){
        total = total + products[i].price;
   }
    return total;
}

console.log(calcPrices(products)); // Expected number is 12,344,15 //