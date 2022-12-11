// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати
// і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення
//  лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй
//  значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterEl = document.querySelectorAll("#counter button");
const decrementValue = counterEl[0];
const incrementValue = counterEl[1];
const valueEl = document.querySelector("#value")

let clickCount = 0;
decrementValue.addEventListener('click', onDecrementBtnClick) 

function onDecrementBtnClick() {
    clickCount -= 1;
    valueEl.textContent = clickCount;
}

incrementValue.addEventListener ('click',onIncrementBtnClick) 

function onIncrementBtnClick() {
    clickCount += 1;  
    valueEl.textContent = clickCount;
}
console.log(decrementValue);
console.log(incrementValue);
console.log(valueEl);