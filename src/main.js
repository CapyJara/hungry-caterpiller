const foodList = [
    'apple',
    'banana',
    'grape'
];

const foodButton = document.getElementById('food-buttons');

for(let i = 0; i < foodList.length; i++) {
    let food = foodList[i];
    const chosenFood = document.createElement('button');
    chosenFood.classList.add('food-choice', food);
    chosenFood.textContent = food;
    
    chosenFood.addEventListener('click', function() {
        grow(food);
    });
    
    foodButton.appendChild(chosenFood);
    
}

const danceButton = document.getElementById('dance-buttons');

for(let i = 0; i < foodList.length; i++) {
    let food = foodList[i];
    const foodDance = document.createElement('button');
    foodDance.classList.add('food-dance', food);
    foodDance.textContent = food;
    
    foodDance.addEventListener('click', function() {
        undoTransform();
        bootyGiggle(food);
    });
    
    danceButton.appendChild(foodDance);
    
}

const growBody = document.getElementById('caterpillar-body');

function grow(food) {
    const eatFood = document.createElement('span');
    eatFood.classList.add('add-body', food);
    
    growBody.appendChild(eatFood);
    console.log('hi');
}

function bootyGiggle(food) {
    const selector = '.add-body.' + food;
    const selectedBody = document.querySelectorAll(selector);

    for(let i = 0; i < selectedBody.length; i++) {
        selectedBody[i].classList.add('transform');
    }
}

function undoTransform () {
    const selectAll = document.querySelectorAll('.add-body');

    for(let i = 0; i < selectAll.length; i++) {
        selectAll[i].classList.remove('transform');
    }
}