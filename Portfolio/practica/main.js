//1. Создание простого класса
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    } 

    introduce() {
        return `Привет, меня зовут ${this.name}, и мне ${this.age} лет.`
    }
}

let person = new Person('Tim', 25)
person.introduce()


//2. Наследование классов
class Animal {
    makeSound() {
        return 'Животное издает звук'
    }
}

class Dog extends Animal{
    makeSound() {
        return 'Собака лает'
    }
}

let animal = new Animal()
animal.makeSound()

let dog = new Dog()
dog.makeSound()



//3. Свойства и методы классов
class Personi {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    isAdult() {
        return this.age >= 18
    }
}

let persons = new Personi('Tima', 25)
console.log(persons.isAdult())

let personsTwo = new Personi('Dima', 17)
console.log(personsTwo.isAdult())


//4. Статические методы
class MathUtils {
    static add(a, b) {
        return a + b
    }
}
console.log(MathUtils.add(10, 5))


//5. Приватные свойства
class BankAccount {
    #balance

    constructor(balance) {
        this.#balance = balance
    }

    getDeposit(ammount) {
        if(ammount > 0) {
            this.#balance += ammount
        }
    }
    
    getBalance() {
        return this.#balance
    }
}

const account = new BankAccount(100)
account.getDeposit(50);
console.log(account.getBalance()); 


//6. Геттеры и сеттеры
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    get area() {    
        this.width * this.height
    }

    set area(width) {
        if(width >= 0) {
            return width
        } else {
            
        }
    }
}



const rect = new Rectangle(10, 20);
console.log(rect.area); // 200