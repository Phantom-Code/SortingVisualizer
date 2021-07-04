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
bubbleSort = (arr, n) => {
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                arrayStates.swaps.push([j, j + 1]);
                arrayStates.arr.push([...arr]);
            }
        }
        if (!swapped) break;
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
    bubbleSort(arr, len);
};
arr = initializeArray(arr, len);
drawLines(arr);
