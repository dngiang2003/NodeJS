// Chuyển object thành array

let users = [
    { id: 1, name: 'Hung', age: 17, role: 'admin' },
    { id: 32, name: 'HungThu2', age: 71, role: 'admin' },
    { id: 65, name: 'Dung', age: 21, role: 'user' },
    { id: 87, name: 'Quy', age: 99, role: 'user' },
    { id: 123, name: 'Chi', age: 8, role: 'user' },
];

let userArr = [];

for (let user of users) {
    let obj = {};
    obj[user.id] = user;
    userArr.push(obj);
}
   
console.log(userArr);