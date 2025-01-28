
//input element 
const inputElement = document.querySelector('.input');
const header = document.querySelector('h1');
const btns = document.querySelectorAll('.btns');
const resetBtn = document.querySelector('.reset-btn');


let count = 0;
let incrementorDecby = null;

inputElement.addEventListener('input', (e) => {
    const userVal = +e.target.value;
    incrementorDecby = userVal;
})

function increment()  {
    if(incrementorDecby) {
        count = count + incrementorDecby;
    }else {
        count = count + 1
    }
    header.textContent = count;
}

function decrement() {
    if(incrementorDecby) {
        count = count - incrementorDecby;
    }else{
        count = count - 1
    }
    header.textContent = count;

}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btn =  e.target.dataset;
        console.log(btn);
        if(btn.increment === "increment") {
            console.log(btn);
            increment();
        } if(btn.decrement === 'decrement') {
            decrement();
        }
    })
});

resetBtn.addEventListener('click', () => {
    inputElement.value = "";
    incrementorDecby = null;
    count = 0
    header.textContent = count
})






