let engineOptions = 'petrol, deisel';
let car = {
    nmae : 'nixon',
    brand : 'tata',
    "Driver Train" : engineOptions+', ev',
    price : 15,
    onRoadPrice(price){
        return this.price+2;
    }
};
car['Model Year'] = 2024;
car.price = 18;
console.log(car.onRoadPrice(11));