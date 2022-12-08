const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener("input", (event) => {
    if (!event.currentTarget.value) {
        nameOutput.textContent = 'Anonymous';
    }
})

