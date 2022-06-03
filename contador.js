let numberIncrement = document.querySelector("#number-increment");

const incrementar = () => {
    let num = parseInt(numberIncrement.textContent);
    numberIncrement.textContent = num + 1;
}

const decrementar = () => {
    const num = parseInt(numberIncrement.textContent);
    numberIncrement.textContent = num - 1;
}