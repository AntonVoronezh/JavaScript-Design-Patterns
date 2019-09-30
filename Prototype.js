class TeslaCar {
	constructor({ model, color, price }) {
		this.model = model;
		this.color = color;
		this.price = price;
	}

	produce() {
		return new TeslaCar({ model: this.model, color: this.color, price: this.price });
	}
}

const protoCar = new TeslaCar({ model: 'super', color: 'red', price: 10000 });

const car1 = protoCar.produce();
const car2 = protoCar.produce();

console.log('car1', car1);
console.log('car2', car2);

car1.model = 'jjj'

console.log('car1', car1);
console.log('car2', car2);