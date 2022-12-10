const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', (ev) => {
    return ev.currentTarget.value
        ? (outputName.textContent = ev.currentTarget.value)
        : (outputName.textContent = "Anonymous");
})





