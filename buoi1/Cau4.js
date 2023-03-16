// 1. Sử dụng Contructor
function User1(studentCode, password, firstName, lastName, age, major, role) {
    this.studentCode = studentCode;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.major = major;
    this.role = role;
    this.showName = function() {
        console.log("Tên bạn là:", this.firstName + " " + this.lastName);
    }
  }
  
const user1 = new User1('2020605518', '123', 'Hung', 'Truong', 17, 'information technology', ['admin', 'user']);
console.log(user1);
user1.showName();


// 2. Sử dụng Class
class User2 {
    constructor(studentCode, password, firstName, lastName, age, major, role) {
        this.studentCode = studentCode;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.major = major;
        this.role = role;
    }
    showPassword() {
        console.log("Mật khẩu của bạn là:", this.password);
    }
}

const user2 = new User2('2020605518', '123', 'Hung', 'Truong', 17, 'information technology', ['admin', 'user'])
console.log(user2);
user2.showPassword();