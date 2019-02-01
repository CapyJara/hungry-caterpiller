const foodList = [
    'apple',
    'mango',
    'blueberry'
];

const foodButtons = document.getElementById('food-buttons');
const catBody = document.getElementById('add-body');


for(let i = 0; i < foodList.length; i++) {
    let food = foodList[i];
    const foodChoice = document.createElement('button');
    foodChoice.classList.add('food-choice', food);
    foodChoice.textContent = food;
    
    foodChoice.addEventListener('click', function() {
        eat(food);
    });

    foodButtons.appendChild(foodChoice);
}


// for(let i = 0; i < foodList.length; i++) {
//     let food = foodList[i];
//     const addBody = document.createElement('button');
//     addBody.classList.add('add-body', food);
//     addBody.textContent = food;
    
//     // foodChoice.addEventListener('click', function() {
//     //     eat(food);
//     // });

//     catBody.appendChild(addBody);
// }

function eat(food) {
    const body = document.createElement('span');
    body.classList.add('body', food);

    catBody.appendChild(body);
}