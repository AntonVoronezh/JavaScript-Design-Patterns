class Conveyor {
	getSalon() {
		console.log('salon');
	}
	getWeels() {
		console.log('weels');
	}
	getColor() {
		console.log('color');
	}
}

class ConveyorFacade {
	constructor(car) {
		this.car = car;
	}

	getNewAuto() {
		this.car.getSalon();
		this.car.getWeels();
		this.car.getColor();
	}
}

const conveyor = new ConveyorFacade(new Conveyor());

const car = conveyor.getNewAuto();
