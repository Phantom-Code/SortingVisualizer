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
setTheme = (themeName) => {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
};
setYellowTheme = () => {
    setTheme("theme-yellow");
};
setRedTheme = () => {
    setTheme("theme-red");
};
setGreenTheme = () => {
    setTheme("theme-green");
};
(() => {
    console.log(localStorage.getItem("theme"));
    if (localStorage.getItem("theme")) {
        setTheme(localStorage.getItem("theme"));
    } else {
        setTheme("theme-red");
    }
})();
