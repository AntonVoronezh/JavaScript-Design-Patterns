class Car {
	constructor(price, name) {
		this.price = price;
		this.name = name;
	}

	getPrice() {
		return `price is ${this.price}`;
	}
	getName() {
		return `name is ${this.name}`;
	}
}

class WithCompressor {
	constructor(car) {
		this.car = car;
	}

	getPrice() {
		return `price is ${this.car.getPrice() + 555} because WithCompressor`;
	}
}

class Tesla extends Car {
	constructor() {
		super();
		this.price = 20000;
		this.name = 'Tesla';
	}
}

let tesla1 = new Tesla();
const tesla2 = new Tesla();

tesla1 = new WithCompressor(tesla1);

console.log('tesla1', tesla1.getPrice());
console.log('tesla2', tesla2.getPrice());
