
  class Person {
     constructor(name,age){
        this.name = name,
        this.age = age
     }
     introduce(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
     }
  }
  let p = new Person("Ivan",20);
  p.introduce();