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