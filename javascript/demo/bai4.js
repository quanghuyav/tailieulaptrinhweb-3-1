// Bài 1: Sắp xếp mảng
// Bài 2: Tìm ước chung lớn nhất của 2 số nguyên dương
// Bài 3: Tìm bội chung nhỏ nhất của 2 số nguyên dương
// Bài 4: Kiểm tra xem chuỗi có phải chuỗi đối xứng hay không
// VD: "abccba" >> true,  "abcba" >> true,  "abcdba" >> false
// Bài 5: Kiểm tra xem số nguyên dương nhận vào có phải số nguyên tố không
// Bài 6: Nhập số nguyên dương n, Tìm các số nguyên tố trong khoảng từ 2 tới n

// b1: Quy ra thành bài toán ngoài đời thực  arr  423 24 54  544 65
// b2: Giải quyết bài toán theo cách làm ngoài đời arr1 kq: 1 2 23
// b3: Từ cách giải quyết đấy, vẽ ra thuật toán 
// Tạo 1 mảng kết quả rỗng > Tìm số bé nhất trong mảng ban đầu
// >> Thêm số bé nhất vào cuối của mảng kết quả, xoá số đó ở mảng ban đầu đi
// Lặp lại đến khi hết
// b4: Biến thuật toán thành code


// var findMin = function (arr) {
//     var min = arr[0]
//     var indexMin = 0;
//     for (let i = 1; i<= arr.length - 1; i ++){
//         if (arr[i] < min) {
//             min = arr[i];
//             indexMin = i;
//         }
//     }
//     return [min,indexMin] // [0: là giá trị bé nhất, 1: vị trí giá trị đó]
// }
// function sort (arr) {
//     const arr1 = []
//     while (arr.length > 0){
//         arr1.push(findMin(arr)[0])
//         arr.splice(findMin(arr)[1],1)
//     }
//     return arr1
// }

// console.log(sort([1,4,2,3,6,5]))

// >> [min, indexMin] [1,0] [2,1] [3,1] [4,0] [5, 1] [6,0]
// ban dầu : 6 5    4 độ dài 6 5 4 3
 // kq: 1 2 3 độ dài 0 1 2 3\

// Bài 2: Tìm ước chung lớn nhất: 
// b1: Tìm ước chung lớn nhất của 2 và 4 >>2, 5 15 >> 5, 20 32 >> 4
//  158 146 , (24 28)
// b2: giải quyết
// b3: a,b >> Tạo 1 vòng lặp chạy từ a về 0, mỗi lần lặp lấy a, b chia cho số đó, nếu cả 2 chia hết, thì dừng\
// 24 64>> 24, 23, 22, 21, 20 ,19, 18, 17, 16 , 15 14, 13 12 11 10 9 8
// b4: code

// function UCLN (a,b) {
//     var kq = 1
//     for (let i = a; i>=1;i--){
//         if (a%i == 0 && b%i==0) {
//             kq = i;
//             break;
//         }
//     }
//     return kq;
// }
// console.log(UCLN(13,17))
// Tìm bội chung nhỏ nhất : a, b    8 >> a*b
// 8 10 >> 8  đến 80, 10 11 12 13 1430 31 32 33 34 35 36 37 38 39 40
// 3 5 >> 3 - 15> 3 4 5 6 7 8 9 10 11 12 13 14 15

// function BCNN (a,b) {
//     var kq
//     for (var i = a; i<= a*b; i++){
//         if(i%a==0 && i%b==0){
//             kq = i
//             return kq
//         }
//     }
    
// }

// console.log(BCNN (24,16))

// aacaaaacba lật ngược lại Chú ý: 10 phần tử 0 == 9, 1 == 8>> i == chuỗi.length -1-i
// abcdcdcba c=c luôn đúng
// Cách 1: chạy từ i = 0 đến (a.length-1)/2 nếu chuỗi [i] = chuỗi thứ [chuỗi.length -1-i]

// function check(myStr){
//     for (var i = 0; i<=(myStr.length-1)/2; i++){
//         if (myStr[i]!=myStr[myStr.length-1-i]) return false
//     }
//     return true
// }
// console.log(check("abcdcba"))

// Cách 2: abccba == abccba >> đối xứng. abc != cba
// abcde >> edcba
// function reverseString (myString){
//     var resultString =''
//     for(let i = myString.length-1; i>=0;i--){
//        resultString = resultString +  myString[i]
//     }
//      return(resultString)
// }
// function check(myStr) {
//     if (myStr == reverseString(myStr)) return true
//     else return false
// }
// console.log(check ('abccba'))

//Bài 5: Kiểm tra số nguyên tố,
// Số nguyên tố chỉ chia hết cho 1 và chính nó
// 53 251 , 29 , 251 1 251, 1 > căn 251
//  1 > căn 251 nếu 251 chia hết cho 1 số bất kì trong khoảng =>> nó không là số nguyên tố
// 19 >> 1 đến 4,3//  1 2 3 4 || 5 6 7 8 9 
// 20             //  1 2 3 4 || 5 6 7 8 9 10
// 251 >> i = 2 đến i < 251 : 250// 251 chỉ cần chia hết cho bất kì số nào trong khoảng 2 - 250 thì KHÔNG LÀ SỐ NGUYÊN TỐ
// 11:  2 3 4 5 6 7 8 9 10

// Nhập 1 số n, tìm các số nguyên tố trong khoảng từ 2 - n
function check (a){
    for (var i = 2; i < a; i++){
        if (a%i==0) return false
    }
    return true
}
console.log(check (14))

// 10 ; 2 3 4 5 6 7 8 9 10 >> 2357
// function timSNT (n){
//     var kq = []
//     for (var i = 2 ; i <= n; i ++) {
//         if (check(i) == true) kq.push(i)
//     }
//     return kq
// }
// console.log(timSNT(100))

// Nhập vào số n, tìm n số nguyên tố chạy từ 2
// 4 >> 2 3 5 7
// 1 >> 2
// 10 >> 2 3 5 7 11 13 17 19 23 29

//Tìm 5 số nguyên tố
// kq = [2,3,5,7,11]  kq.length = 5 , dem = 12
// while : kq/length < 5 
/*
    0 < 5: true >> kiểm tra 2 có là số nguyên tố >> thêm 2
    1 < 5 true >> kiểm tra 3 có là os ngt >> thêm 3
    2 < 5 true >> ktra 4 >> sai 
    2 < 5 true >> ktra 5 >> đúng >> thêm 5
    3 < 5 .............6.........
    3<5...............7> đúng là số nt >> 7
    4 < 5 đúng ...........8 sai
    4 < 5 đúng ...........9 sai
    4 < 5 đúng ...........10 sai
    4 < 5 đúng ........11 đúng >> 11
    5<5 sai dừng
*/

function timSNT(n) {
    const kq = [];
    var dem = 2;
    while(kq.length < n) {
        if (check(dem)) kq.push(dem)
        dem ++ 
    }
    return kq
}

console.log(timSNT(15))

// lương 3 năm kinh nghiệm : trung bình 20tr/tháng 
// < 20 tr: làm vui vui 
// Bình thường, ko giỏi thuật toán 20tr/tháng
// Giỏi > 20 tr