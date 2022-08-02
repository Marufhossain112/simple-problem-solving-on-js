var myData = [43, 76, 55, 32, -2, 6, -3, 9, -23];
// var ngNum = [];
// for (let i = 0; i < myData.length; i++) {
//   if (myData[i] < 0) {
//     min = myData[i];
//     ngNum.push(min);
//   }
// }
// console.log(ngNum);
function isPositive(value) {
    return value > 0;
}
var positiveNum = myData.filter(isPositive);
console.log(positiveNum);

