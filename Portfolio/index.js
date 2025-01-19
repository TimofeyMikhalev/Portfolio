
//166. Яндексформеры
function sum(N, staff, K) {
    // Сортируем грейды по убыванию
    if (K > N) {
        return 0; 
    }

    // Сортируем грейды по убыванию
    staff.sort((a, b) => b - a)
    
    // Вычисляем сумму первых K элементов
    let x = 0;
    for(let i = 0; i < K;i++) {
        x += staff[i]
    }
    // Берём первые K разработчиков и суммируем их грейды
    return x
}

sum(11, [14, 8, 15, 19, 2, 21, 13, 21, 12, 10, 8], 5)
sum(8, [5, 13, 8, 4, 4, 15, 1, 9], 8)


// 1. Сумма двух
var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0;i < nums.length;i++) {
       let a = target - nums[i] 

       if(map.has(a)) {
        return [map.get(a), i]
       }
       map.set(nums[i], i)
    }
};
twoSum([3,2,4], 6)


//9. Число-палиндром
var isPalindrome = function(x) {
    let a = [...x.toString()]
    let b = [...x.toString()].reverse()

    if(JSON.stringify(a) == JSON.stringify(b)) {
        return true
    } else {
        return false
    }

};

isPalindrome(100001)


//13. Римские числа в целые числа
var romanToInt = function(s) {
    
    let a = [...s.toString()]
    let sum = 0;

    a.forEach(i => {
        switch(i) {
            case 'I': 
                sum += 1
                break
            case 'V':
                sum += 5
                break
            case 'X':
                sum += 10
                break
            case 'L':
                sum += 50
                break
            case 'C':
                sum += 100
                break
            case 'D':
                sum += 500
                break
            case 'M':
                sum += 1000
                break
        }
    })
    return sum
};
           

romanToInt("MCMXCIV")