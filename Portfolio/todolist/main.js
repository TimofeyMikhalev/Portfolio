const addInput = document.querySelector('.addinput')
const addBtn = document.querySelector('.addbtn')
const itemInput = document.querySelector('.item')



function addInputDate() {
  //добавление новой задачи
  let elem = document.createElement('li');
  elem.className = 'list'
  elem.innerHTML += `
    ${addInput.value}
    <span>
      <img class="like" src="./images/Group 6.svg" alt="">
      <img class="delete" src="./images/Group 7.svg" alt="">
    </span>
  `;
  itemInput.appendChild(elem);

  addInput.value = ''

  //удаление задачи
  const deleteBtn = document.querySelectorAll('.delete')

  deleteBtn.forEach(e => {
    e.addEventListener('click', (event) => {
  
      const target = event.target;
      if (target && target.classList.contains('delete')) {
        target.closest('.list').remove()
        // Код выше удалит родительский элемент `.list` в котором был нажат `.delete`
      }

    });
  });
  

  const likeBtn = document.querySelectorAll('.like')

  likeBtn.forEach(e => {
    e.addEventListener('click', (event) => {
  
      const target = event.target;
      if (target.classList.contains('like')) {
        const listElement = target.closest('.list');
        if(listElement) {
          listElement.classList.add('show')
        }
        target.closest('.like').remove()
      }
    });
  })
}


addBtn.addEventListener('click', addInputDate)


