let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
let car = Cars.find(c => c == 'Benz');
console.log(car);

let index = Cars.indexOf('Audi');
console.log(index);

let idx = Cars.findIndex(c => c == "Benz");
console.log(idx);

let Prices = [280, 320, 250, 210];
console.log(Prices.findIndex(p => p > 300));
console.log(Prices.filter(p => p >= 250));

Prices.filter(function (item, index) {
    if (item > 250) {
        console.log(Cars[index] + "'s price is " + item + ", it's larger 250.")
    }
}); 