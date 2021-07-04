let arrayStates = { arr: [], swaps: [], pivots: [] };
let arr = [];
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
                document.getElementById(`${array.pivots[i]}`).style.borderRightColor = "blue";
                document.getElementById(`${array.swaps[i][0]}`).style.borderRightColor = "cyan";
                document.getElementById(`${array.swaps[i][1]}`).style.borderRightColor = "purple";
                setTimeout(() => {
                    document.getElementById(`${array.pivots[i]}`).style.borderRightColor = color;
                    document.getElementById(`${array.swaps[i][0]}`).style.borderRightColor = color;
                    document.getElementById(`${array.swaps[i][1]}`).style.borderRightColor = color;
                }, j + 1 * speed);
            }
        }, i * speed);
    }
};
partition = (array, low, high) => {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j <= high; j++) {
        if (array[j] < pivot) {
            i++;
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            arrayStates.swaps.push([i, j]);
        }
    }
    let temp = array[high];
    array[high] = array[i + 1];
    array[i + 1] = temp;
    arrayStates.arr.push([...array]);
    arrayStates.swaps.push([i + 1, high]);

    arrayStates.pivots.push(high);
    return i + 1;
};
quickSort = (array, low, high) => {
    if (low < high) {
        let pi = partition(array, low, high);
        quickSort(array, low, pi - 1);
        quickSort(array, pi + 1, high);
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
    arrayStates = { arr: [], swaps: [], pivots: [] };
    quickSort(arr, 0, len - 1);
};
arr = initializeArray(arr, len);
drawLines(arr);
