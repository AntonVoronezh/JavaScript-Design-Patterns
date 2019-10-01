class Car {
	constructor() {
		this.autoPilot = false;
		this.signaling = false;
		this.parktronik = false;
	}
}

class Builder {
	constructor() {
		this.car = new Car();
	}

	addAP() {
		this.car.autoPilot = true;
		return this;
	}
	addSIG() {
		this.car.signaling = true;
		return this;
	}
	addPT() {
		this.car.parktronik = true;
		return this;
	}
	addE(engine) {
		this.car.engine = engine;
		return this;
	}

	build() {
		return this.car;
	}
}

const car1 = new Car();
const car2 = new Builder().addAP().addE('V5').build();

console.log('car1', car1);

console.log('car2', car2);
