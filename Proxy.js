class OpenDoor {
	open() {
		console.log('open door');
	}
	close() {
		console.log('close door');
	}
}

class SecuritySystem {
	constructor(door) {
		this.door = door;
	}

	open(pass) {
		if (this.auth(pass)) {
			this.door.open();
		} else {
			this.close();
		}
	}
	close() {
		this.door.close();
	}

	auth(pass) {
		return pass === 'aaa';
	}
}

const door1 = new SecuritySystem(new OpenDoor());

console.log('door1.open', door1.open('jjj'));
console.log('door1.open', door1.open('aaa'));
