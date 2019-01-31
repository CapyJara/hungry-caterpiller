const colorList = [
    'blue',
    'green',
    'red',
];

const colorButtons = document.getElementById('color-buttons');

for(let i = 0; i < colorList.length; i++) {
    let color = colorList[i];
    const colorBlocks = document.createElement('button');
    colorBlocks.value = color;
    colorBlocks.classList.add('color-block', color);
    colorBlocks.textContent = color;

    colorButtons.appendChild(colorBlocks);

}


