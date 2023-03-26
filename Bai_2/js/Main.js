function find_three_element(arr, val) {
    let sum_three_element = 0;
    let result = '';
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                sum_three_element = arr[i] + arr[j] + arr[k];
                if (sum_three_element === val) {
                    result +=
                        `Bộ ba số có tổng bằng ${val}: ${arr[i]}, ${arr[j]}, ${arr[k]} lần lượt ở các vị trí ${i},${j},${k} trong mảng.<br>`;
                }
            }
        }
    }
    if (result === '') {
        result = `Không có bộ ba số nào có tổng bằng ${val} trong mảng`;
        return result;
    }
    return result;
}

let array = [1, 3, -1, 6, 4, 5, 9, 10, 5];
document.getElementById('arr').innerHTML = `Mảng: [${array}]`;

function check_value() {
    let num = +document.getElementById('num').value;
    document.getElementById('result').innerHTML = find_three_element(array, num);
    document.getElementById('num').value = '';
}


