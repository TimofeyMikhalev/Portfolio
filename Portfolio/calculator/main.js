let numberBtn = document.querySelectorAll('.number')
let displayNum = document.querySelector('.acran')
let deleteBtn = document.querySelector('.delete')



deleteBtn.addEventListener('click', () => {
    displayNum.textContent = 0
})

numberBtn.forEach(item => {
    item.addEventListener('click', (event) => {
        displayNum.textContent += event.target.textContent 
    })
})