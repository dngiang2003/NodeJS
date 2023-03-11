/**
 * 0
 * false
 * "" - ''
 * undefiend
 * NaN
 */

var fullName = "Do Ngoc Giang"

if (fullName) {
    console.log("DIEU KIEN DUNG");
} else {
    console.log("DIEU KIEN SAI");
}
// DIEU KIEN DUNG

var x = 'Apples';

switch(x) {
    case 1:
        console.log(1);
        break;
    case 2:
    case 'Apples':
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("mac dinh")
}

// 2