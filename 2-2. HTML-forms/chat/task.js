
const сhat = document.querySelector('.chat-widget');

сhat.addEventListener('click', () => {
  сhat.classList.add('chat-widget_active');
})
let answers = ['Что Вам интересно?', 'Есть ли у Вас машина?', 'Сколько Вам лет?', 'Я не хочу отвечать.', 'Не понял. Задайте вопрос заново.']

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function intTo2char(mins) {
  if (mins < 10)
    return '0' + mins
  else
    return mins;
}

const input = document.getElementById("chat-widget__input");

input.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter') && (input.value !== '')) {

    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const time = (intTo2char(hh) + ':' + intTo2char(mm));

    const messages = document.querySelector('.chat-widget__messages');
    // добавит
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${time}</div>
      <div class="message__text">
        ${input.value}
      </div>
    </div>
  `
    let botAnswer = getRandomInt(0, answers.length)

    messages.innerHTML += `
  <div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">
      ${answers[botAnswer]}
    </div>
  </div>
`
    messages.parentElement.scrollTop = messages.parentElement.scrollHeight

    input.value = "";
  }
});


