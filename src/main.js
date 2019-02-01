const foodList = [
    'apple',
    'mango',
    'blueberry'
];

const foodButtons = document.getElementById('food-buttons');
const catBody = document.getElementById('caterpillar-body');

for(let i = 0; i < foodList.length; i++) {
    let food = foodList[i];
    const foodChoice = document.createElement('button');
    foodChoice.classList.add('food-choice', food);
    foodChoice.textContent = food;
    
    foodChoice.addEventListener('click', function() {
        eat(food);
    });

    foodChoice.appendChild(food);
}


function eat(food) {
    const body = document.createElement('span');
    body.classList.add('body', food);

    body.appendChild(food);
}