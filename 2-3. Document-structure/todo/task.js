const input = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');
const form = document.getElementById('tasks__form');
taskList.innerHTML = ''; /* Удаляю первую задачу */

form.addEventListener('submit', (e) => {
  e.preventDefault(); /* Вынес в самое начало обработчика */
  if (input.value != '') { /* Вместо value было textContent */

    let task = document.createElement('div');
    task.innerHTML = `<div class="task">
       <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`
    taskList.appendChild(task);

    input.value = '';

    taskList.lastChild.querySelector('.task__remove').addEventListener('click', (e) => {
      e.target.closest('.task').remove();
    })
  }
})

