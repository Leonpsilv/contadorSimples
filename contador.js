const numberIncrement = document.querySelector("#number-increment");

const colorChange = () => {
    if (parseInt(numberIncrement.textContent) < 0){
        numberIncrement.style.color = 'red';
    }else if(parseInt(numberIncrement.textContent) === 0){
        numberIncrement.style.color = 'black';
    }else{
        numberIncrement.style.color = '#009300';
    }
    
}   

const incrementar = () => {
    const num = parseInt(numberIncrement.textContent);
    numberIncrement.textContent = num + 1;
    colorChange();
}

const decrementar = () => {
    const num = parseInt(numberIncrement.textContent);
    numberIncrement.textContent = num - 1;
    colorChange();
}

