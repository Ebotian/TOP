class User {
	#age = 0; // private field
	constructor(age) {
		this.age = age; // private field
	}

	get age() {
		return this.#age; // private field
	}
	set age(value) {
		if ((value < 0) || (value > 150)) throw new Error("年龄必须在0到150之间");
		this.#age = value; // private field
  }

  get isAdult() {
    return this.#age >= 18; // private field
  }
}
