// Tìm các phần tử giao giữa 2 mảng

let arrA = [1, 7, 4, 2, 3];
let arrB = [5, 2, 6, 3, 1];
let arrRes = [] // [1, 2, 3]

for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
        if (arrA[i] === arrB[j]) {
            arrRes.push(arrA[i]);
            arrA.splice(i, 1);
            arrB.splice(j, 1);
            --i; --j;
            break;
        }
    }
}

console.log(arrRes);

// test đầu đủ trường hợp
// let arrA = [1, 7, 4, 2, 3, 5, 3];
// let arrB = [5, 2, 6, 3, 1, 5, 3];
/// let arrRes = [] // [1, 2, 3, 5, 3]