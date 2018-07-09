class Person {
	constructor(name, city, age) {
		this.name = name;
		this.city = city;
		this.age = age;
	}
	sayHello() {
		console.log(
			`Hey! My name is ${this.name} I am ${this.age} years old and I live in ${
				this.city
			}. `
		);
	}
}

let p1 = new Person('David', 'Chattanooga', 40);
let p2 = new Person('April', 'Grand Rapids', 39);
let p3 = new Person('Breslynn', 'Paris', 6);
let p4 = new Person('Beckham', 'Augusta', 4);
let p5 = new Person('Joseph', 'Huntsville', 41);
let p6 = new Person('James', 'Covington', 65);

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();
p6.sayHello();

class Vehicle {
	constructor(manufact, numOfWheels, numOfDoors) {
		this.manufact = manufact;
		this.numOfWheels = numOfWheels;
		this.numOfDoors = numOfDoors;
	}
	aboutVehicle() {
		console.log(
			`Made by ${this.manufact} with ${this.numOfDoors} doors and ${
				this.numOfWheels
			} wheels.`
		);
	}
}

class Truck extends Vehicle {
	constructor(manufact, numOfWheels, isTruck, numOfDoors) {
		super(manufact, numOfWheels, numOfDoors);
		this.isTruck = isTruck;
	}
	aboutVehicle() {
		if (this.isTruck === true) {
			console.log(
				`This ${this.manufact} truck, has ${this.numOfDoors} doors, ${
					this.numOfWheels
				} wheels, and has a truck bed.`
			);
		} else {
			console.log(
				`This ${this.manufact} truck, has ${this.numOfDoors} doors, ${
					this.numOfWheels
				} wheels, but does not have a truck bed.`
			);
		}
	}
}

class Sedan extends Vehicle {
	constructor(manufact, numOfWheels, mpg, size, numOfDoors) {
		super(manufact, numOfWheels, numOfDoors);
		this.mpg = mpg;
		this.size = size;
	}
	aboutVehicle() {
		console.log(
			`This ${this.size} ${this.manufact} sedan, has ${
				this.numOfDoors
			} doors, ${this.numOfWheels} wheels, and gets ${this.mpg} mpg.`
		);
	}
}

class Motorcyle extends Vehicle {
	constructor(manufact, numOfWheels, numOfDoors, hasHandleBars) {
		super(manufact, numOfWheels, numOfDoors);
		this.hasHandleBars = hasHandleBars;
	}
	aboutVehicle() {
			if (this.numOfDoors === 0 && this.hasHandleBars === true) {
				console.log(`This ${this.manufact} motorcycle, has ${this.numOfWheels} wheels, and hadlebars. It's a Motorcycle there are no doors, silly.`);
			} else {
				console.log(`This ${ this.manufact } motorcycle has ${ this.numOfWheels } wheels.\n HandleBars: ${this.hasHandleBars}\n Number of Doors: ${this.numOfDoors} (not sure what type of motorcyle this is)
				`);
			}
	}
}

let v1 = new Truck('Dodge', 4, true, 4);
let v2 = new Truck('Dodge', 4, false, 4);
let v3 = new Sedan('Nissan', 4, 35, 'medium', 4);
let v4 = new Motorcyle('Ducati', 2, 0, true);
let v5 = new Motorcyle('Ducati', 2, 2, true);

v1.aboutVehicle();
v2.aboutVehicle();
v3.aboutVehicle();
v4.aboutVehicle();
v5.aboutVehicle();
