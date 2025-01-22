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
// console.log(persons.isAdult())

let personsTwo = new Personi('Dima', 17)
// console.log(personsTwo.isAdult())


//4. Статические методы
class MathUtils {
    static add(a, b) {
        return a + b
    }
}
// console.log(MathUtils.add(10, 5))


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
// console.log(account.getBalance()); 


//6. Геттеры и сеттеры
class Rectangle {
    constructor(width, height) {
        this._width = width
        this._height = height
    }

    get area() {    
        return this._width * this._height
    }

    set width(value) {
        if(value > 0) {
            this._width = value
        }
    }

    get width() {
        return this._width
    }
}



const rect = new Rectangle(10, 20);
// console.log(rect.area); // 200



//7. Классы и массивы

class Student {
    constructor(name) {
        this.name = name
        this.grades = []
    }

    addGrade(value) {    
        this.grades.push(value)
    }

    averageGrade() {
        const sum = this.grades.reduce((a, b)=> a + b, 0)
        return sum / this.grades.length
    }
}

const student = new Student("Алексей");
student.addGrade(4);
student.addGrade(5);
student.addGrade(3);
// console.log(student.averageGrade()); // 4


//8. Сложная задача: Фабрика объектов

class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }

    static createFromObject(obj) {
        return new Car(obj.brand, obj.model)
    }
}

const carData = { brand: "Tesla", model: "Model 3" };
const car = Car.createFromObject(carData);
// console.log(car); // Car { brand: 'Tesla', model: 'Model 3' }


//Промисы
//1. Пример с таймером:
const timer = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Stop")
    }, 3000)

})

timer
    .then((message) => console.log(message))
    .catch((error) => console.log("No", error))



//
// function checkEvenNumber(number) {
//     return new Promise((resolve, reject) => {
//         if(number % 2 === 0) {
//             resolve('Число четное')
//         } else {
//             reject('Число нечетное')
//         }
//     }) 
// }


// checkEvenNumber(4)
//     .then((istina) => console.log(istina))
//     .then((error) => console.error('Ошибка', error))



//
function userPlay() {


    return new Promise((resolve, reject) => {
        console.log("Загрузка данных...");

        setTimeout(() => {
            const success = Math.random() > 0.5; // 50% вероятность успеха
            if(success) {
                resolve('Данные загружены!')
            } else {
                reject('Ошибка загрузки данных.')
            }
        }, 2000)
    })
}

userPlay()
    .then((users) => console.log(users))
    .catch((error) => console.error('Error', error))