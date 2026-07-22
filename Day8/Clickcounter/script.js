let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

function updateCounter(){

    countDisplay.innerHTML = count;

    if(count === 0 || count === 10){
        countDisplay.style.color = "red";
    }
    else{
        countDisplay.style.color = "#007BFF";
    }

    if(count === 0){
        decreaseBtn.disabled = true;
    }
    else{
        decreaseBtn.disabled = false;
    }

    if(count === 10){
        increaseBtn.disabled = true;
    }
    else{
        increaseBtn.disabled = false;
    }

}

function increaseCount(){

    if(count < 10){
        count++;
    }

    updateCounter();

}

function decreaseCount(){

    if(count > 0){
        count--;
    }

    updateCounter();

}

updateCounter();