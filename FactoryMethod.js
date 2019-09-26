class BMW {
	constructor(model, price, speed) {
		this.model = model;
		this.price = price;
		this.speed = speed;
	}
}

class BMWFactory {
	create(type) {
		return {
			X5: new BMW('X5', 10000, 180),
			X6: new BMW('X6', 20000, 150),
		}[type];
	}
}

const factory = new BMWFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');

console.log('x5', x5);
console.log('x6', x6);
