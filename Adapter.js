class MotorV2 {
	simpleInterface() {
		console.log('MotorV2');
	}
}
class MotorV8 {
	simpleInterfaceV8() {
		console.log('MotorV8');
	}
}

class MotorV8Adpter {
	constructor(motor) {
		this.motor = motor;
	}

	simpleInterface() {
		this.motor.simpleInterfaceV8();
	}
}

class Auto {
	startMotor(motor) {
		motor.simpleInterface();
	}
}

const auto = new Auto();

const oldMotorV2 = new MotorV2();
const oldMotorV8 = new MotorV8();

auto.startMotor(oldMotorV2);
auto.startMotor(new MotorV8Adpter(oldMotorV8));
