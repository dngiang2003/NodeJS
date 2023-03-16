// Xóa phần tử trùng và sắp xếp giảm dần

const arrA = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];
let mySet = new Set();

// Ép mảng về kiểu Set để loại bỏ các phần tử trùng
for (x of arrA) mySet.add(x);

// Sau đó ép lại về mảng để sắp xếp giảm dần
console.log([...mySet].sort((a, b) => b - a))