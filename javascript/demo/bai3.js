// Viết hàm nhập vào 1 số nguyên, in ra màn hình 1 tam giác vuông có độ dài cạnh bằng số nguyên đó, cạnh tam giác vuông đc thể hiện bằng các dấu *
/*
vd:Nhập vào 4
trả về: 
*
**
***
****
*/

// for (i: 1 > n) { i = 1 in ra 1 * ... i 

// var draw = function (n) {
//     for (let i = 1; i<=n; i++){
//         let x = ''
//         for(let j = 1; j<=i; j++){
//             x = x + '* '
//         }
//         console.log(x)
//     }
// }

// draw(10)

// var sum = (a,b) => {
//     return a+b
// };

// console.log(sum (3,4))

// var sayHi = (x) => console.log("hi")
// // var sayHi = (x) => {
// //     console.log("hi")
// // }
// var sayHi = (x) => {
//    return console.log("hi")
// }


// var x = sayHi()
// console.log(typeof(x))


// console.log(languages[0])
// console.log(languages.length)
// var x = languages.join(' ')
// console.log(x)
// console.log(languages.pop()) // làm mất phần tử cuối cùng của mảng, trả về là phần tử bị xoá
// console.log(languages)

// console.log(languages.push("C#","javascript")) // thêm phần tử, trả về số phần tử sau khi thêm
// console.log(languages)

// // console.log(languages.shift(),languages) //
// // console.log(languages.unshift('c#','js'),languages) 
// var languages = ['java','python','C', "C++"]
// // console.log(languages.splice(1,3,'javascript', "ruby"))
// // console.log(languages)

// console.log(languages.splice(0,2))
// console.log(languages)

// var myString = "học lập trình JAVASCRIPT javascript"
// console.log("ngoặc vuông",myString[100])
// console.log("charat",myString.charAt(100))

// Bài 1: Viết 1 hàm in ra các phần tử của mảng, giá trị trả về là tổng các phần tử
// Bài 2: Viết hàm nhập vào một mảng, trả về phần tử lớn nhất trong mảng
// Bài 3: Viết 1 hàm đảo ngược chuỗi, Đầu vào là 1 chuỗi, trả về 1 chuỗi đảo ngược
// VD: "abcde" >> "edcba"
// 10 giờ chữa nhé các e
//
// function sumArr(arr) {
//     var sum = 0;
//     for (let i = 0; i <= arr.length - 1; i++ ){
//         console.log(arr[i])
//         sum = sum + arr[i]
//     }
// }

// var x = sumArr([1,3,4,5,6])
// console.log(x)

// Tìm số lớn nhất: 1,3,5,6,2,3,4
// max = 6

var findMax = function (arr) {
    var max = arr[0]
    for (let i = 1; i<= arr.length - 1; i ++){
        if (arr[i] > max) max = arr[i]
    }
    return max
}
// console.log(findMax ([1,3,5,6,2,3,4])) hello >> olleh

function reverseString (myString){
    var resultString =''
    for(let i = myString.length-1; i>=0;i--){
       resultString = resultString +  myString[i]
    }
     console.log(resultString);
     return(resultString)
}
// console.log(reverseString('lập trình javascript')) // olleh


// Viết hàm nhập một mảng, đầu ra: một mảng được sắp xếp từ bé tới lớn
//          >> 1 2 3 4 5 7 9
// >> 0 1 1 2 2  3 3 3 3 4 5 5 6 7 8 9 9