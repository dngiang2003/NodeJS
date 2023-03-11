// vong lap truyen thong

var sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);
// 5050

var str = "javascript";
var strLength = str.length;
for (i = 0; i < strLength; i++) {
	console.log(str[i]);
}
// output:
// j
// a
// v
// a
// s
// c
// r
// i
// p
// t

// for in loop: Vòng lặp for ... in được sử dụng để lặp qua các thuộc tính của đối tượng.

var Student = {fullName: "Do Ngoc Giang", age: 20, major: "Software Engineer"}

for (let x in Student) {
    console.log(x); // fullName, age, major
    console.log(Student[x]); // "Do Ngoc Giang", 20, major
}

// for of loop: Cú pháp for...of để chạy vòng lặp trên String, Array. Hoặc các đối tượng tương tự như Array 

let iterable = [2, 4, 6];

for (const value of iterable) {
    console.log(value);
} // 2 4 6


// forEach(): là một phương thức được tích hợp sẵn trong JavaScript, 
// được sử dụng để lặp qua từng phần tử của một mảng và thực hiện một hành động nào đó với mỗi phần tử.

let arr = [1, 2, 3, 4];

arr.forEach(function(element) {
    console.log(element);
}); // 1 2 3 4

arr.forEach(element => console.log(element));