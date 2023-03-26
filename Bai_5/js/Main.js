function sum_array(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function max_sum_array(arr1, arr2, arr3, arr4) {
    let new_arr = [arr1, arr2, arr3, arr4];
    let sum_arr = [sum_array(arr1), sum_array(arr2), sum_array(arr3), sum_array(arr4)];
    let max_sum = Math.max(sum_array(arr1), sum_array(arr2), sum_array(arr3), sum_array(arr4));
    let result = '';
    for (let i = 0; i < sum_arr.length; i++) {
        if (max_sum === sum_arr[i]) {
            result += `[${new_arr[i]}] <br>`;
        }
    }
    return result;
}

let arr_1 = [1, 2, 0, -3, 5, 8, 10];
let arr_2 = [0, 4, 3, -2, 20];
let arr_3 = [-3, 2, 31];
let arr_4 = [3, 4, 5, 6, -2, -3, 7, 10];
document.getElementById('arr').innerHTML = `4 mảng:<br>[${arr_1}]<br>[${arr_2}]<br>[${arr_3}]<br>[${arr_4}]`;

function check_value() {
    let x = max_sum_array(arr_1, arr_2, arr_3, arr_4);
    document.getElementById('result').innerHTML = `Mảng có tổng lớn nhất:<br>${x}`;
}

