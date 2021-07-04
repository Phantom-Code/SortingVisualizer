let arr = [],
    arrayStates = { arr: [], swaps: [] };
let linesContainer = document.getElementById("linesContainer");
let len = parseInt(document.getElementById("arrayLength").value);
let speed = parseInt(document.getElementById("speed").value) + 100;
let sortBtn = document.getElementById("sort");

drawAnimations = (array) => {
    let color = document.querySelector(":root");
    color = getComputedStyle(color).getPropertyValue("--primary-color");
    for (let i = 0; i < array.arr.length; i++) {
        setTimeout(() => {
            for (let j = 0; j < array.arr[i].length; j++) {
                document.getElementById(`${j}`).style.height = `${array.arr[i][j] + 2}%`;
                document.getElementById(`${array.swaps[i][0]}`).style.borderRightColor = "cyan";
                document.getElementById(`${array.swaps[i][1]}`).style.borderRightColor = "purple";
                setTimeout(() => {
                    document.getElementById(`${array.swaps[i][0]}`).style.borderRightColor = color;
                    document.getElementById(`${array.swaps[i][1]}`).style.borderRightColor = color;
                }, j + 1 * speed);
            }
        }, i * speed);
    }
};
insertionSort = (array) => {
    let key, j;
    for (let i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;
        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            arrayStates.swaps.push([j, j + 1]);
            arrayStates.arr.push([...array]);
            j--;
        }
        array[j + 1] = key;
    }
    drawAnimations(arrayStates);
};
onLengthChange = (val) => {
    linesContainer.innerHTML = "";
    len = val;
    arr = [];
    temp = initializeArray(arr, len);
    drawLines(temp);
};

shuffleArray = () => {
    linesContainer.innerHTML = "";
    arr = [];
    arr = initializeArray(arr, len);
    drawLines(arr);
};
sortBtn.onclick = () => {
    arrayStates = { arr: [], swaps: [] };
    insertionSort(arr, len);
};
arr = initializeArray(arr, len);
drawLines(arr);
