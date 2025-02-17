const episodesPerSeasons = [10, 10, 10, 10, 10, 9, 7, 6]

episodesPerSeasons.unshift(17)
episodesPerSeasons.push(1)
episodesPerSeasons.shift()
episodesPerSeasons.pop()

episodesPerSeasons.splice(0, 4, 1, 2, 3, 4)

let aArray = episodesPerSeasons.slice(3, 7)

console.log(episodesPerSeasons)
console.log(aArray)


let newArray = [].concat(episodesPerSeasons, aArray)

console.log(newArray.filter(i => i === 10))

console.log(episodesPerSeasons.map(a => `${a}`))
console.log(episodesPerSeasons.sort((a, b) => { return a - b }))


let age = 20
const numbers = [20, 1, 2, 3, 4, 5];

// Используем метод reduce() для нахождения суммы всех элементов
const sum = numbers.reduce((a, b) => {
    return a + b
}, age)// Начальное значение аккумулятора age

console.log(sum)//55


//Practic
//1
let products = ['o', 'o', 'o', 'f', 'o', 'f']

products.push('o')
products.unshift('o')

const vegetables = products.filter(i => i === 'o')
console.log(products)
console.log(vegetables)


//2
const zoo1 = ['бурундук', 'белка', 'лев', 'орёл', 'орёл', 'орёл', 'обезьяна', 'змея', 'сова', 'слон', 'черепаха', 'медведь']
const zoo2 = ['панда', 'коала', 'утка', 'жираф', 'попугая', 'попугая', 'попугая', 'орёл', 'тигр', 'пингвин', 'осьминог', 'бабочка']
const zoo3 = ['лягушка', 'обезьяна', 'лев', 'орёл', 'орёл', 'попугая', 'попугая', 'попугая', 'жираф', 'змея', 'черепаха']

// Объедините все три массива в один общий
const allAnimals = zoo1.concat(zoo2, zoo3)

// Выбираем из общего массива всех орлов и попугаев
const eaglesParrots = allAnimals.filter(a => a === 'орёл' || a === 'попугая')

// Отправляем орлов и попугаев в ветклинику ?
const treatedAnimals = eaglesParrots.map(a => `${a}`)
console.log(treatedAnimals)


//3
const vehicles = ["M", "V", "A", "M", "M", "S", "V", "V", "S", "M"];

const isLandTransport = (vehicle) => {
    const isLandTransport = ["V", "V", "S", "M"];

    return isLandTransport.includes(vehicle);
};

const allLandTransport = vehicles.every(isLandTransport);
console.log(allLandTransport); // false, в массиве есть ✈️ и ?


//4
const foodDescriptions = [
    "Салат Цезарь",
    "Паста Болоньезе",
    "Ролл Филадельфия",
    "Суп Том Ям",
    "Стейк Медиум",
    "Пицца Маргарита",
    "Чизкейк Нью-Йорк",
    "Хот-дог с сыром",
    "Суши Филадельфия",
    "Фруктовый салат",
];

const lengthStr = (str) => {
    return str.length
}


let lenFood = foodDescriptions.sort((a, b) => {
    return lengthStr(a) - lengthStr(b)
})




//5
const fruits = ["яблоко", "банан", "киви", "манго", "груша"];

const sumFruits = fruits.reduce((a, b) => {
    return a + b.length
}, 0)



//6
const number = [2, 4, 7, 1, 9, 4, 12, 7, 98, 7]

const newNumber = number.filter((a) => {
    if(a % 2 === 0) {
        return a
    }
})




//Object

let person1 = {name: "Alex", age: 30};
let person2 = {name: "Alex", age: 30};


function isDeepEqual(obj1, obj2) {

    if (obj1 === obj2) {
        return true;
    }

    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

  
    if (keys1.length !== keys2.length) {
        return false;
    }


    for (let key of keys1) {
            if (!keys2.includes(key) || !isDeepEqual(obj1[key], obj2[key])) {

            return false;
        }

    }

    return true;

};



const itemsInCart = [
    { product: 'Носки', quantity: 3 },
    { product: 'Штаны', quantity: 1 },
    { product: 'Кепка', quantity: 1 },
]

let aOne = structuredClone(itemsInCart)

aOne[0].product = 'Sick'


let cat = {
    name: 'Tom',
    isHunter: true
}
  
let mouse = {
    name: 'Jerry',
    isHunter: false
}
  
cat.isHunter = mouse.isHunter;//cat - isHunter: false && mouse - isHunter: false
mouse.isHunter = undefined; //cat - isHunter: false && mouse - isHunter: undefined
mouse = cat; //cat - isHunter: false && mouse - isHunter: false

// console.log(mouse.isHunter);//false
// console.log(cat.isHunter);//false



function Animal () { }

const animal = Animal() // ❌
console.log(animal) // undefined


const animalTwo = new Animal() // ✅

// console.log(animal)
// console.log(animalTwo)




//Object.keys, values, entries

// let user = {
//     name: "John",
//     age: 30
// };

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// for(let value of Object.values(user)) {
//     console.log(value)
// }


let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

//чтобы преобразовать его обратно в объект.
let doublePrises = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries (обратно в объект)
    Object.entries(prices).map(([key, value]) => [ key, value * 2 ])
)

// console.log(doublePrises)


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// function sumSalaries(salaries) {
//     let sum = 0
    
//     for(let key of Object.values(salaries)) {
//        sum += key
//     }

//     return sum
// }

// reduce перебирает массив значений salaries,
// складывает их
// и возвращает результат
// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
// }

// let user = {
//     name: 'John',
//     age: 30
// };

// function count(obj) {
//     return Object.keys(obj).length
// }
  
// console.log(count(user)); // 2



// const makePizza = function(title, cd) {
//     console.log(`Заказ получен ${title}`)
//     setTimeout(cd, 3000)
// }

// const readBooks = function() {
//     console.log('Читаю книгу «Колдун и кристалл»…');
// }

// const eatPizza = function() {
//     console.log('Ура! Пицца готова, пора подкрепиться.');
// }

// makePizza('Piperonia', eatPizza)
// readBooks()


// const doHomework = (subject, callback) => {
//     console.log(`Starting my ${subject} homework.`);
//     callback()
// }

const doHomework = (subject, callback) => {
    console.log(`Starting my ${subject} homework.`);
    callback()
}


// doHomework('math', () => {
//     alert('Finished my homework');
// });

const alertFinished = () => {
    console.log('Finished my homework')
}

doHomework('math', alertFinished)


///Написать функцию с callback’ом, которая загружает данные с задержкой.

const devDoc = (name, fun) => {
    console.log('Данные загружаются')
    setTimeout(fun, 3000)
}

const finshBook = () => {
    console.log('Данные загруженны')
}

devDoc('Tom Soer', finshBook)


//Задача 1: Функция обратного вызова
function processArray(arr, callback) {
    let arrayNew = []

    for(let i = 0; i < arr.length;i++ ) {
        arrayNew.push(callback(arr[i]))
    }

    return arrayNew
}

const numbersi = [1, 2, 3, 4];
const double = processArray(numbersi, (num) => num * 2)
// console.log(double)


//Задача 2: Фильтрация массива
function filterArray(arr, callback) {
    let result = []

    for(let i = 0; i < arr.length;i++) {
        if(callback(arr[i])) {
            result.push(arr[i])
        }
    }

    return result
}

// Пример использования:
const numbersu = [1, 2, 3, 4, 5];
const evens = filterArray(numbersu, (num) => num % 2 === 0);
console.log(evens); // [2, 4]


//Задача 3: Асинхронная обработка
// function fetchData(url, callback) {
//     setTimeout(() => {
//         // Имитация получения данных
//         const data = { message: 'Данные получены с ' + url };
//         callback(data);
//     }, 1000);
// }



// // Пример использования:
// fetchData('https://api.example.com/data', (data) => {
//     console.log(data); // { message: 'Данные получены с https://api.example.com/data' }
// });


//Задача 4: Сортировка массива
function sortArray(arr, compareFunction) {
    return arr.sort(compareFunction)
}

// Пример использования:
const numbe = [5, 3, 8, 1];
const sortedNumbers = sortArray(numbe, (a, b) => a - b);
console.log(sortedNumbers); // [1, 3, 5, 8]


//Задача 5: Уведомление

function notify(message, collback, interval) {
    setTimeout(() => {
        collback(message)
    }, interval)
}

// Пример использования:
notify('Время!', (msg) => {
    console.log(msg); // 'Время!' через заданный интервал
}, 2000);



//Promises

// const promise = new Promise(function(resolve, reject) {
//     // Делаем асинхронную операцию:
//     // Запрос текущего местоположения устройства.
//     // В случае успешного выполнения запроса
//     // колбэк-функция получит данные о местоположении.
//     navigator.geolocation.getCurrentPosition(function(data){
//         // Переводим промис в состояние fulfilled.
//         // Результат выполнения — объект data 
//         resolve(data)
//     })
// })

// const errorPromise = new Promise(function (resolve, reject) {
//     // Переводим промис в состояние rejected.
//     // Результат выполнения — объект Error
//     reject(new Error('Error'))
// })



// function getData(onSuccess, onError) {
//     setTimeout(function() {
//         const result = Math.random()
//         if(result > 0.5 ) {
//             onSuccess(result)
//         }
//         else {
//             onError(new Error('Error'))
//         }
//     }, 1000)
// }

// function promisifieldGetData() {
//     return new Promise(function(resolve, reject) {
//         getData(
//             function(result) {
//                 resolve(result)
//             },
//             function(error) {
//                 reject(error)
//             }
//         )
//     })
// }

// promisifieldGetData()
//     .then(function() {
//         console.log('true')
//     })
//     .catch(function(error) {
//         console.error(error.message)
//     })


let resultPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve('Good')
        reject('Error')
    }, 4000)

})

resultPromise
    .then((value) => { console.log(value) })
    .catch((error) => { console.error(error.message) })




function delay(ms) {
    // ваш код
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
    
delay(3000).then(() => alert('выполнилось через 3 секунды'));