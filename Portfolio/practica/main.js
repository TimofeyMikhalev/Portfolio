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

// class Car {
//     constructor(brand, model) {
//         this.brand = brand
//         this.model = model
//     }

//     static createFromObject(obj) {
//         return new Car(obj.brand, obj.model)
//     }
// }

// const carData = { brand: "Tesla", model: "Model 3" };
// const car = Car.createFromObject(carData);
// // console.log(car); // Car { brand: 'Tesla', model: 'Model 3' }


// //Промисы
// //1. Пример с таймером:
// const timer = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Stop")
//     }, 3000)

// })

// timer
//     .then((message) => console.log(message))
//     .catch((error) => console.log("No", error))



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
// function userPlay() {


//     return new Promise((resolve, reject) => {
//         console.log("Загрузка данных...");

//         setTimeout(() => {
//             const success = Math.random() > 0.5; // 50% вероятность успеха
//             if(success) {
//                 resolve('Данные загружены!')
//             } else {
//                 reject('Ошибка загрузки данных.')
//             }
//         }, 2000)
//     })
// }

// userPlay()
//     .then((users) => console.log(users))
//     .catch((error) => console.error('Error', error))



//2
//  let usersPlayer = new Promise((resolve, reject) => {
//     setTimeout(() => {  
//         const suc = Math.random() > 0.5;
//         if(suc) {
//             resolve("Успешно завершено: Данные загружены!")
//         } else {
//             reject('Ошибка: Не удалось загрузить данные.')
//         }
//     }, 2000)
// })


// usersPlayer
//     .then((player) => console.log(player))
//     .catch((error) => console.error('Error', error))
//     .finally(() => console.log("Загрузка завершена."))



// //Задача 1: Загрузка данных с сервера
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {    
//             let result = Math.random() > 0.3
//             if(result) {
//                 resolve({ id: 1, name: "John Doe", age: 25 })
//             } else {
//                 reject('Ошибка: Не удалось загрузить данные.')
//             }
//         }, 2000)
//     }) 
// }

// fetchUserData()
//     .then((userData) => console.log("Данные пользователя:", userData))
//     .catch((error) => console.error('Error', error))



//Задача 2: Последовательные асинхронные операции

//загружаешь данные пользователя с сервера.
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         let result = Math.random() > 0.3
//         if(result) {
//             resolve({ id: 1, name: "John Doe"})
//         } else {
//             reject("Не удалось загрузить пользователя")
//         }
//     })
// }


//чтобы “запросить” задачи этого пользователя.
// function fetchTasks() {
//     return new Promise((resolve, reject) => {
//         let result = Math.random() > 0.3
//         if(result) {
//             resolve([{ id: 1, age: 25 }])
//         } else {
//             reject("Не удалось загрузить пользователя")
//         }
//     })
// }

// //Цепочка Promises
// fetchUser()
//     .then((user) => { 
//         console.log(user)
//         return fetchTasks(user.id);
//     })
//     .then((age) => console.log(age))
//     .catch((error) => console.error('Error', error))



//Задача 3: Ускорение выполнения задачи

// function uploadImage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ url: 'www.part.com' })
//         }, 3000)
//     }) 
// }

// function uploadVideo() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ video: 'www.part.com' })
//         }, 5000)
//     })
// }

// Promise.race([uploadImage(), uploadVideo()])
//     .then((value) => {
//         console.log('Первым завершилось', value)
//     })


//Задача 4: Обработка нескольких запросов
// function fetchRequest(time, result, fail = false) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 

//             if(fail) {
//                 reject(`Ошибка в запросе: ${time}`)
//             } else {
//                 resolve(result)
//             }

//         }, time)
//     })
// }

// let timers = [
//     fetchRequest(2000, 'Зфпрос №1'),
//     fetchRequest(4000, 'Зфпрос №2'),
//     fetchRequest(6000, 'Зфпрос №3'),
// ]

// Promise.all(timers)
//     .then((result) => {
//         console.log("Все запросы завершены:", result);
//     })
//     .catch((error) => {
//         console.error('Ошибка запроса', error)
//     })


//Задача 5: Повторение запроса при ошибке
// function fetchWithRetry(fetc, col) {
//     return new Promise((resolve, reject) => {
//         function attempt(remainingAttempts) {
//             fetc()
//             .then(resolve)
//             .catch((error) => {
//                 if(remainingAttempts === 1) {
//                     reject(`Запрос не удался после ${attempts} попыток: ${error}`);
//                 } else {
//                     console.log(`Повторная попытка... Осталось: ${remainingAttempts - 1}`);
//                     attempt(remainingAttempts - 1);
//                 }
//             })
//         }
//         attempt(col)
//     })
// }

// Функция-запрос
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(Math.random() > 0.7) {
//                 resolve('Ok')
//             } else {
//                 reject('No')
//             }
//         }, 1000)
//     })
// }

// // Используем fetchWithRetry
// fetchWithRetry(fetchData, 3)
//     .then((result) => {
//         console.log('Успех', result)
//     })
//     .catch((error) => {
//         console.error('Ошибка', error)
//     })



//fetch и async/await

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json(''))
//     .then(data => console.log(data))
//     .catch(error => console.error('Error', error))


// async function getData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')
//         let append = await response.json('')
//         console.log(append)
//     } 
//     catch(error) {
//         console.log('Erorr', error)
//     }
// }

// getData()

//Задача 1:

// async function getData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')
//         let danno = await response.json()

//         // Перебираем массив и выводим имена
//         danno.map(function(item) {
//             console.log(item.name)
//         })
//     } 
//     catch(error) {
//         console.log('Возникла ошибка!', error)
//     }
// } 

// getData()

//Задача 2:

// async function getTitle() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         let title = await response.json()
      
//         title.slice(0, 5).map((item) => {
//             console.log(item.title)
//         })
//     } 
//     catch(error) {
//         console.log('Возникла ошибка!', error)
//     }
// }

// getTitle() 



//Задача 3:

// let postDev = {
//     title: 'Test Post',
//     body: 'This is a test post',
//     userId: 1
// }

// let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json', // Указываем тип содержимого
//     },
//     body: JSON.stringify(postDev)
// })

// let result = await response.json()
// console.log(result.id)


//Задача 4:
// async function getUser() {
//     try {
//         let respons = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         let result = await respons.json()
    
//         let idUser = result.userId
//         console.log(result.title)
//         try {
//             let userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
//             let userResult = await userResponse.json()

//             console.log(userResult.name)
//         } catch(error) {
//             console.log('Error', error)
//         }
//     } 
//     catch(error) {
//         console.log('Error', error)
//     }
// }

// getUser()

//Задача 5:

// let userPost = [
//     { title: 'Title of the post 1', body: 'Body of the post 1', userId: 1 },
//     { title: 'Title of the post 2', body: 'Body of the post 2', userId: 2 },
//     { title: 'Title of the post 3', body: 'Body of the post 3', userId: 3 },
// ]


// async function createPosts() {
//     try {
//         const promisess = userPost.map(post => {
//             return fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json', // Указываем тип содержимого
//                 },
//                 body: JSON.stringify(post)
//             }).then(response => response.json())
//         })
        
//         const result = await Promise.all(promisess)

//         result.forEach((item) => {
//             console.log(item.id)
//         })

//     } catch(error) {
//         console.log('Error', error)
//     }
  
// }
// createPosts()



//Задача 6: Получить список комментариев для конкретного поста
// async function getPostId() {


//     try {
//         // Получаем данные поста
//         let postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         let result = await postResponse.json()

//         // Используем ID поста для получения комментариев
//         let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${result.id}/comments`)
//         let resultComment = await commentsResponse.json()

//         // Выводим имена авторов комментариев
//         resultComment.map((item) => {
//             console.log(item.name)
//         })
//     }
//     catch(error) {
//         console.log('Ошибка при выполнении запросов:', error);
//     }
// }
// getPostId()


//7 Задача:

async function getUsers() {
    try {
        // Получаем список пользователей
        let getId = await fetch('https://jsonplaceholder.typicode.com/users')
        let result = await getId.json()

        for(let key of result) {
            // Получаем список постов для каждого пользователя
            let getPost = await fetch(`https://jsonplaceholder.typicode.com/users/${key.id}/posts`)
            let resultPost = await getPost.json()

           // Выводим имя пользователя и количество постов
            console.log(`User: ${key.name}, Posts: ${resultPost.length}`)
        }
    
    }
    catch(error) {
        console.log('Ошибка!', error);
    }
}

getUsers()