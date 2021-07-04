let arr = [],
    arrayStates = [];
let linesContainer = document.getElementById("linesContainer");
let len = parseInt(document.getElementById("arrayLength").value);
let speed = parseInt(document.getElementById("speed").value) + 100;
let sortBtn = document.getElementById("sort");

drawAnimations = (array) => {
    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            for (let j = 0; j < array[i].length; j++) {
                document.getElementById(`${j}`).style.height = `${array[i][j] + 2}%`;
            }
        }, i * speed);
    }
};

function merge(array, start, mid, end) {
    let temp = [],
        k = 0,
        i = start,
        j = mid + 1;
    while (i <= mid && j <= end) {
        if (array[i] >= array[j]) {
            temp[k] = array[j];
            j++;
            k++;
        } else {
            temp[k] = array[i];
            i++;
            k++;
        }
    }
    while (i <= mid) {
        temp[k] = array[i];
        i++;
        k++;
    }
    while (j <= end) {
        temp[k] = array[j];
        j++;
        k++;
    }
    for (let index = start; index <= end; index++) {
        array[index] = temp[index - start];
    }
    arrayStates.push([...array]);
}

function mergeSort(array, start, end) {
    if (start < end) {
        let mid = parseInt((start + end) / 2);
        mergeSort(array, start, mid);
        mergeSort(array, mid + 1, end);
        merge(array, start, mid, end);
    }
    drawAnimations(arrayStates);
}
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
    arrayStates = [];
    mergeSort(arr, 0, len - 1);
};
arr = initializeArray(arr, len);
drawLines(arr);
