class Animal{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
    speak(message){
        return message;
    }
}
class Cat extends Animal{
    constructor(name, gender){
        super(name, gender);
        this.message = `${name} says meow!`;
    }
    speak(){
        return super.speak(this.message);
    }
}
class Dog extends Animal{
    constructor(name, gender){
        super(name, gender);
        this.message = `${name} says woof!`;
    }
    speak(){
        return super.speak(this.message);
    }
}
class Bird extends Animal{
    constructor(name, gender){
        super(name, gender);
        if (this.gender === "male")
        this.message = `It's me! ${this.name}, the parrot!`;
        else
        this.message = `${this.name} says squawk!`;
    }
    speak(){
        return super.speak(this.message);
    }
}
const cat = new Cat("Sasha", "female")
const dog = new Dog("Rufio", "male")
const bird2 = new Bird("Mable", "female")
const bird = new Bird("Pablo", "male")