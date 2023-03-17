/** SCOPE - PHẠM VI
 * - Global - Toàn cầu (coi như là 1 hàm chứa tất cả mọi thứ trong file)
 * - Code block - Khối mã {} : let, const chỉ sử dụng trong phạm vi {}, nếu khai báo var thì biến đó sẽ được nhảy ra ngoài phạm vi chứa {}
 * Chú ý: cú pháp viết tắt của if không có dấu {} vẫn được tính là trong một khối 
 * - Local scope - Hàm: var, function
 * 
 */

/** Chú ý
 * Không được khai báo 2 biến cùng tên trong 1 phạm vi với let và const
 * Nếu khác phạm vi có thể khai báo cùng tên, nếu phạm vi lồng nhau thì khi sử dụng biến sẽ ưu tiên sử dụng biến được khai báo ở phạm vi gần nhất
 * 
 * 
 * 
 */

// Ví dụ 1:
var x = 1  // thay bằng let, const đều cùng 1 kết quả
function myF () {
    console.log()
}
myF()
// Ví dụ 2: 
// var x = 1
// function myF (x) {
//     console.log(x)
// }
// myF(2)

// ví dụ 3
// {
//     let z = "lett";
//     var y = "varr";
//     const t = "constt";
// }
// console.log(y)
// console.log(z)
// console.log(t)

// ví dụ 4: 
// function myF(){
//     let x = 1
//     console.log(x)
// }

// myF()
// console.log(x)

// Ví dụ 5
// const age = 18
// {
//     const age = 17
//     {
//         const age = 16
//         {
//             const age = 15
//             console.log(age)
//         }
//     }   
// }

/** HTML DOM (Document Object Model)
 *  Khi trang web được tải lên, trình duyệt sẽ tạo 1 html DOM cho trang web
 *  Trình duyệt nhận Mã HTML > dịch > mô hình DOM >> tạo ra giao diện
 *  HTML DOM theo quy chuẩn của W3C
 */

/** 3 thành phần của DOM
 *  - Element
 *  - Text
 *  - Atribute
 */
// Mỗi hình chữ nhật trong hình được gọi là node (điểm giao nhau)
// Javascript giúp truy cập và thêm, sửa, xoá html element
// HTML DOM không phải của Javascript
// Javascript chỉ cung cấp những công cụ để giúp chúng ta có thể truy cập vào DOM
// Javascript kết nối với DOM thông qua DOM API (WEB API) (xuất hiện trên trình duyệt web)

// Application programming interface
/** DOM Document Object trong Javascript
 * Đại diện cho toàn bộ web
 * Khi muốn truy cập vào các thành phần trong web phải đi qua document
 * 
 */
// console.log(document)
// document.write('hello')