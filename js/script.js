const number = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

let counter = 0;
number.innerHTML = counter;

increment.addEventListener('click', function(){
    if(number.style.color == 'red'){
        number.style.color = 'white';
    };
    counter++;
    number.innerHTML = counter;
});

decrement.addEventListener('click', function(){
    if(counter > 0){
        counter--;
    };
    number.innerHTML = counter;
    if(counter == 0){
        number.style.color = 'red';
    };
    
});