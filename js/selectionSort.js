let arr = [],
    arrayStates = { arr: [], swaps: [] };
let linesContainer = document.getElementById("linesContainer");
let len = parseInt(document.getElementById("arrayLength").value);
let speed = parseInt(document.getElementById("speed").value) + 100;
let sortBtn = document.getElementById("sort");
selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                arrayStates.arr.push([...array]);
                arrayStates.swaps.push([i, j]);
            }
        }
    }
    drawAnimations(arrayStates);
};
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
    selectionSort(arr);
};
arr = initializeArray(arr, len);
drawLines(arr);
