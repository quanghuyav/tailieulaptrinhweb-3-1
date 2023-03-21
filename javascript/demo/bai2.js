// var age = 1; 


    
// if (age > 0 && age <=10 ) console.log ("trẻ em")
// if (age > 10 && age <=15) console.log ("c2")
// if (age > 15 && age <=18) console.log ("c3")
// if (age>18) console.log("trưởng thành")

// if (age > 18) console.log ("trưởng thành")
// else if (age > 15) console.log ("c3")
// else if (age > 10) console.log ("c2")
// else console.log("trẻ em")

// var date = "2"
// switch (date) {
//     case 2:
//         console.log("thứ 2")
//         break
//     case 3: 
//         console.log("thứ 3")
//         break
//     case 4: 
//         console.log("thứ 4")
//         break
//     case 5: 
//         console.log("thứ 5")
//         break
//     case 6: 
//         console.log("thứ 6")
//         break
//     case 7: 
//         console.log("thứ 7")
//         break
//     case 8: 
//         console.log("thứ CN")
//         break
//     default:
//         console.log("không hợp lệ") 
// }

// var x = 11;
// var y = x >10 ? x : console.log("x nhỏ hơn 10")// tương đương y = x, 
// //nếu x<10 tương đương >> y = console.log("x nhỏ hơn 10")
// console.log ("y=",y)

// for


// giá trị của i                1               2           3... 99 100 101
// kiểm tra biểu thức logic     đúng            đúng        đ    đ  đ   sai >> xong luôn
// thực hiện code {}            in ra 1         in 2        3    99 100
// thực hiện thay đổi i (i++)   tăng i>>2       tăng >>3    4    100 101 

// Vòng lồng nhau: In bảng cửu chương
// In ra bảng của 2 (2x1 2x2)
// in ra bảng của 3
// ...............4
// for (let i = 2; i<=9;i++) {
//     console.log("các số nhân với ",i )
//     for (let j = 1; j <=9; j++){
//         console.log(`${i}x${j}=${i*j}`)
//     }
// }

// for (let i = 0; i<=20;i++ ){
//     if (i%2==1) {
//         continue;
//     }
//     console.log(i)
// }


// function numberDay(month) {
//     var x;
//     if (month==1 || month==3 || month ==5 || month ==7 || month ==8|| month==10 || month ==12 ){
//         x = 31;
//     } else if ( month == 4 || month == 6 || month == 9 || month == 11){
//         x = 30;
//     } else if (month == 2) x = 28
//     else x = "không hợp lệ"

//     return x 
// }

// console.log(numberDay(2))

function tong(n){ // 3! = 3x2x1 
    var kq = 0; 
    for (let i = 1 ; i<=n ; i++){
        kq = kq+i
    }
    return kq;
}

console.log(tong(4))