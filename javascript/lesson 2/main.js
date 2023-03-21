/** TOÁN TỬ GÁN
 *  x= y
 * x +=y >> x = x + y
 * x -=y >> x = x - y
 * x *= >> x = x*y
 * x /= >> x = x / y
 * x **= >> x = x ** y
 * x %= >> x = x % y
 */


// Dấu $ trong string \\\\

/** CHUYỂN ĐỔI GIỮA CÁC KIỂU DỮ LIỆU
 *
 */


// if
// if - else
// switch - case

var date = 3;
switch (date) {
    case 2: 
        console.log('hôm nay là thứ 2')
        console.log('hôm nay là thứ 22')
        break
    case 3: 
        console.log('hôm nay là thứ 3')
        console.log('hôm nay là thứ 3333')
        break // Nếu không có break sẽ thực thi code từ case đúng đến hết
    default:
        console.log('ko biết')
}

// TOÁN TỬ 3 NGÔI
// [phép so sánh, logic] ? [biểu thức 1] : [biểu thức 2]
// Khi phép so sanh cho kết quả đúng >> trả về giá trị của biểu thức 1
// Khi phép so sánh cho kết quả sai >> trả về giá trị của biểu thức 2

var x = 19;
x > 18 ? console.log("Người lớn") : console.log("trẻ con")
var y = x >18? x : 0
console.log(y)

// Vòng lặp for
for (var i = 1; i <=10;++i){
    console.log(i);
}
console.log(i)

// while 
// do - while
// Chú ý vòng lặp vô tận
// break: dừng vòng lặp
// continue: tiếp tục vòng lặp mà khôgn thực hiện đoạn mã bên dưới continue
for (var i = 0; i<=10;i++){
    if (i%2==1) continue
    console.log(i)
}

// vòng lặp lồng nhau

/** HÀM
 *  - Gồm 2 phần: ĐỊNH NGHĨA HÀM và SỬ DỤNG HÀM (GỌI HÀM)
 *  - Hàm không được thực thi khi định nghĩa
 *  - Hàm chỉ được thực thi khi được gọi
 *  - Có thể nhận tham số
 *  - Có thể trả về 1 giá trị
 */
function myFunc (/*nếu muốn hàm nhận tham số thì khai báo ở đây, tham số cách bởi dấu , */) {
    // Các câu lệnh
    // return nếu muốn hàm trả về 1 giá trị
}


// Bài tập: Kiểm tra chẵn lẻ, kiểm tra số nguyên tố, số ngày trong tháng, kiểm tra tam giác, tính diện tích...
// Tính giai thừa, tính tổng từ 1 > n ..., tìm số lớn nhất trong 3 số
// in tất cả các số nguyên tố nhỏ hơn hoặc bằng số đó
// vẽ 1 tam giác vuông cân bằng dấu * có độ dài cạnh bằng số mình nhập vào

// bài tập: viết hàm
// input: tháng >> output: ngày trong tháng, tháng ko hợp lệ trả về số 0
// Bài 2: input: n >> output: tính giai thừa

