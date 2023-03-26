
function find_k_value(arr, k) {
    // tạo mảng mới chứa các phần tử khác nhau ở mảng gốc
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (new_arr.indexOf(arr[i]) === -1) {
            new_arr.push(arr[i]);
        }
    }
    if (k > new_arr.length) {
        return `Không có`;
    }
    new_arr.sort(function (a, b) {return b - a}); //sắp xếp mảng theo thứ tự giảm dần;
    for (let j = 0;j < new_arr.length; j++) {
        if (j + 1 === k) {
            return new_arr[j];
        }
    }
}

let array = [1,-3,5,12,2,2,2,10,9];
document.getElementById('arr').innerHTML = `Mảng: [${array}]`;


function check_value() {
    let num = +document.getElementById('num').value;
    let x = find_k_value(array, num);
    document.getElementById('result').innerHTML = `Phần tử lớn thứ ${num} trong mảng: ${x}`;
    document.getElementById('num').value = '';
}
