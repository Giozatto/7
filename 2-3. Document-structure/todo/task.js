const input = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');

input.addEventListener('keydown', (e) => {
  if ((input.value !== '') && (e.key === 'Enter')) {

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
  e.preventDefault();
})
