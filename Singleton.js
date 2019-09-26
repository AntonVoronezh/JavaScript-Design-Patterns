class Counter {
	constructor() {
		if (typeof Counter.instance === 'object') {
			return Counter.instance;
		}
		this.count = 0;
		Counter.instance = this;
		return this;
	}

	getCounter() {
	   	return this.count;
	}

	plusOne() {
		this.count++;
	}
}

const a = new Counter();
const b = new Counter();

a.plusOne();
a.plusOne();
a.plusOne();
b.plusOne();

console.log('Counter', a.getCounter(), b.getCounter());
