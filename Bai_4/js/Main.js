function first_only_value(arr) {
    loop1: for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                continue loop1;
            }
        }
        return arr[i];
    }
    return `Không có giá trị duy nhất nào trong mảng`;
}

let array = [2, 2, 2, 4, 2, 5, 8, 4, 4, 6, 1, 9];
document.getElementById('arr').innerHTML = `Mảng: [${array}]`;

function check_value() {
    let x = first_only_value(array);
    document.getElementById('result').innerHTML = `Phần tử đầu tiên duy nhất trong mảng: ${x}`;
}
