initializeArray = (array, length) => {
    for (let i = 0; i < length; i++) {
        array[i] = parseInt(Math.random() * 100);
    }
    return array;
};
drawLines = (array) => {
    linesContainer.innerHTML = " ";
    for (let i = 0; i < array.length; i++) {
        linesContainer.innerHTML += `<div id="${i}" style="height:${array[i] + 2}%;"></div>`;
    }
};
onSpeedChange = (val) => {
    speed = -(val * 50) + 101;
};
setYellowTheme = () => {
    document.documentElement.className = "theme-yellow";
};
setRedTheme = () => {
    document.documentElement.className = "theme-red";
};
setGreenTheme = () => {
    document.documentElement.className = "theme-green";
};
