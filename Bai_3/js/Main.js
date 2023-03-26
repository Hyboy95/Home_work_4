function find_two_element(arr, val) {
    let distance = Infinity;
    let sum_two_element = 0;
    let result = '';
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sum_two_element = arr[i] + arr[j];
            if (sum_two_element === val) {
                if (Math.abs(arr[i] - arr[j]) < distance) {
                    distance = Math.abs(arr[i] - arr[j]);
                    result = `${arr[i]},${arr[j]} ở vị trí ${i} và ${j} trong mảng<br>`;
                } else if (Math.abs(arr[i] - arr[j]) === distance) {
                    result += `${arr[i]},${arr[j]} ở vị trí ${i} và ${j} trong mảng<br>`;
                }
            }
        }
    }
    if (result === '') {
        result = `Không có`;
        return result;
    }
    return result;
}

let array = [4, 8, -3, 5, 2, 5, 1, 13, -1, -2];
document.getElementById('arr').innerHTML = `Mảng: [${array}]`;

function check_value() {
    let num = +document.getElementById('num').value;
    let x = find_two_element(array, num);
    document.getElementById('result').innerHTML = `Hai số trong mảng có tổng bằng ${num} có khoảng cách nhỏ nhất là:<br>${x}`;
    document.getElementById('num').value = '';
}
