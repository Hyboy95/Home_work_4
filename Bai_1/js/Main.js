
function find_max(f, a, b) {
    let max = f(a);
    for(let i = a; i <= b; i += 0.001) {
        let y = f(i);
        if(y > max) {
            max = y;
        }
    }
    return max;
}

function f(x) {
    return -3 * x * x + 4 * x + 2;
}

let fx = `f(x) = -3x<sup>2</sup> + 4x +2`;
document.getElementById('func').innerHTML = fx;
let a_num = +prompt('Nhập vào cận dưới (a)');
let b_num = +prompt('Nhập vào cận trên (b)');
let max_f = find_max(f,a_num,b_num);
document.getElementById('result').innerHTML = `Giá trị lớn nhất của hàm số trong khoảng [${a_num},${b_num}]: ${max_f}`;