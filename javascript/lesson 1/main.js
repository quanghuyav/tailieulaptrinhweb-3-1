/** 1. BIẾN TRONG JAVASCRIPT
 *  - Trong JavaScript, biến được sử dụng để lưu trữ dữ liệu và cho phép chúng ta thực hiện các tính toán hoặc thao tác trên dữ liệu đó
 *  - Từ khoá : var, let, const
 *  - vd:   var x = 1
 *          let y = x + 1
 *          const PI = 3,14 >> HẰNG SỐ
 */
var x = 1;
let y;
const PI = 3.14; 
const c = 3*(10**8)

/** 2. QUY TẮC ĐẶT TÊN (để đặt cho biến, hàm, đối tượng... hoặc bất cứ cái gì cần đặt tên)
 *  - Phân biệt chữ hoa, chữ thường. Nghĩa là fullName và FullName là 2 tên khác nhau
 *  - Chỉ sử dụng các ký tự sau khi đặt tên: các chữ cái, chữ số, dầu gạch dưới (_)
 *  - Javascript ko ưa kí tự (-), nên là đừng dùng nó để đặt tên
 *  - Bắt đầu bằng chữ cái hoặc dấu gạch dưới (_), không được bắt đầu bằng số hoặc ký tự đặc biệt
 *  - Đặt tên có ý nghĩa, ngắn gọn 
 *  - Không đặt trùng các từ khoá đã được định nghĩa sắn trong javascript (vd: var, let, function...)
 *  - Các kiểu đặt tên
 *      + Camel case: firstName, lastName, numberOfStudents, isNumber, person
 *      + Pascal case: Person, LastName
 *      + Snake case: first_name, LAST_NAME
 */

var fullName = "John Smith"
var age = 30
var isStudent = true

var a = "John Smith"; // Tên biến quá ngắn và không nói lên ý nghĩa của biến
var 2ndAddress = "123 Main St"; // Tên biến bắt đầu bằng số
var this_is_my_variable_name = "test"; // Tên biến quá dài và khó đọc
var let = "test"; // Tên biến trùng với từ khóa trong JavaScript
var myvariable = "test"; // Tên biến sử dụng ký tự đặc biệt


/** 3. COMMENT TRONG JS
 *  - Mục đích:
 *      + Ghi chú
 *      + Vô hiệu hoá mã
 *  - Phím tắt: Ctrl + /  (máy mac: Command + /), hoặc dùng dấu //
 */

// comt

/*
Đoạn mình muốn cmt

*/

/** 
 * 
*/




/** 4. MỘT SỐ HÀM BUILT-IN TRONG JS
 *  - Là những hàm được xây dựng sẵn của Javascript
 *  - Một số hàm cơ bản: Alert, Confirm, Prompt,Console, setTimeout, setInterval
 */

setTimeout (function () {
    alert("xin chào")
}, 1000)

/** 5. KIỂU DỮ LIỆU
 *  - Number: 1 2 3 3,14 -3
 *  - String: "1" ; 'abc' ; "con mèo" ; "" ; "   " ; "true"
 *  - Boolean: true/false
 *  - Undefined: Biểu diễn biến chưa được định nghĩa hoặc giá trị của biến không được gán
 *  - Null: Biểu diễn giá trị null, tức là không có giá trị
 *  - Object (Đối tượng) / Array (Mảng) : Object
 *  - Function
 *  - Ngoài ra, trong JavaScript còn có một kiểu dữ liệu đặc biệt là kiểu Symbol, được sử dụng để tạo ra các giá trị duy nhất không thể thay đổi. Tuy nhiên, kiểu này ít được sử dụng trong lập trình JavaScript cơ bản.
 * 
 */

/** 6. TOÁN TỬ SỐ HỌC
 *  +   --> Phép cộng
 *  -   --> Phép trừ
 *  *   --> Phép nhân
 *  /   --> Phép chia
 *  **  --> Phép luỹ thừa
 *  %   --> Phép chia lấy dư
 *  ++  --> Phép tăng 1 đơn vị (dùng cho biến)
 *  --  --> Phép giảm 1 đơn vị (dùng cho biến)
 */

/** 7. TOÁN TỬ SO SÁNH
 *  ==  --> So sánh bằng, chỉ so sánh giá trị
 *  === --> So sánh bằng, so sánh cả kiểu dữ liệu lẫn giá trị
 *  !=  --> So sánh khác, chỉ so sánh giá trị
 *  !== --> So sánh khác, so sánh cả kiểu dữ liệu lẫn giá trị
 *  >   --> So sánh lớn hơn
 *  >=  --> So sánh lớn hơn hoặc bằng
 *  <   --> So sánh nhỏ hơn
 *  <=  --> So sánh nhỏ hơn hoặc bằng
 */

/** 8. TOÁN TỬ LOGIC
 *  && --> Toán tử AND >>> vế 1 and vế 2 and vế 3 
 *  || --> Toán tử OR   >>> vế 1 or vế 2 or vế 3
 *  !  --> Toán tử NOT
 */