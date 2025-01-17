let numberBtn = document.querySelectorAll('.number')
let signBtn = document.querySelectorAll('.sign')
let displayNum = document.querySelector('.display')
let deleteBtn = document.querySelector('.delete')

let plusBtn = document.querySelector('.plus')
let minusBtn = document.querySelector('.minus')
let umnoBtn = document.querySelector('.umno')
let delenieBtn = document.querySelector('.del')



let total = document.querySelector('.total')
let a = ''
let b = ''
let sign = ''

function deleteDisplay() {
    a = ''
    b = ''
    sign = ''
    displayNum.textContent = 0
    total = 0
}

deleteBtn.addEventListener('click', deleteDisplay)



numberBtn.forEach(item => {
    item.addEventListener('click', (event) => {


        if(sign === '') {
            a += event.target.textContent;

            displayNum.innerText = a
        }
        else {
            b += event.target.textContent;

            displayNum.innerText = b

            console.log(a)
            console.log(b)
            console.log(sign)
        }

    })
    
})


signBtn.forEach(item => {
    item.addEventListener('click', (event) => {

        sign = event.target.textContent;

        displayNum.innerText = sign
    })
})



total.addEventListener('click', () => {
    console.log(sign)
    switch(sign) {
        case '+': 
            total = (+a) + (+b)
            displayNum.innerText = total
            break;
        case '-': 
            total = a - b
            displayNum.innerText = total
            break;
        case 'x': 
            total = a * b
            displayNum.innerText = total
            break;
        case '/': 
            total = a / b
            displayNum.innerText = total
            break;
        case '%': 
            total = (b - a) / (a) * 100 
            displayNum.innerText = total
            break;
    }
})


