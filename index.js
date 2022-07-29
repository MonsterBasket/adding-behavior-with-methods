class Animal {
    constructor(name, gender, message) {
        this.name = name;
        this.gender = gender;
        this.message = message;
    }
    speak() {
        return this.message;
    }
}
class Cat extends Animal {
    constructor(name, gender) {
        super(name, gender, `${name} says meow!`);
    }
}

class Dog extends Animal {
    constructor(name, gender) {
        super(name, gender, `${name} says woof!`);
    }
}
class Bird extends Animal {
    constructor(name, gender) {
        let message;
        if (gender === "male"){
            message = `It's me! ${name}, the parrot!`;
        }
        else{
            message = `${name} says squawk!`
        }
        super(name, gender, message);
    }
}
const cat = new Cat("Sasha", "female")
const dog = new Dog("Rufio", "male")
const bird = new Bird("Pablo", "male")
const bird2 = new Bird("Mable", "female")