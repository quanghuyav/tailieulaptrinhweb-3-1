// DOM CSS
// b1: trỏ đến element
// b2: thông qua thuộc tính style
// Chú ý chuyển từ snake case sang camel case

element.style.backgroundColor = 'red';
// Cách thêm nhiều thuộc tính vào object
Object.assign(element.style,{
    width: '200px',
    height: '100px'
})
// Object.assign nhận vào 2 tham số, tham số thứ nhất là đối tượng muốn thêm thuộc tính, tham số thứ 2 là 1 đối tượng muốn thêm vào đối tượng 1

// ClassList: trả về đối tượng DOMTokenList, có nhiệm vụ quản lý các class của element
// add
// contain
// remove
// toggle

/**SỰ KIỆN (event)
 * Sự kiện là những tương tác của người dùng, trình duyệt vào trang web
 * Có 2 cách
 * - Cách 1: Attributes event
 * - Cách 2: Gán event sử dụng element node
 */ 
 // Attributes event: Viết trực tiếp vào vị trí attribute trong mã html của element cần tạo sự kiện, nhớ thêm tiền tố 'on' 
 // Cú pháp: tên sự kiên = "mã javascript"

 // Gán event sử dụng element node
 // b1: Lấy ra được element
 // b2: sử dụng theo cú pháp bên dưới
 element.onclick = function(){
    console.log('hello')
 }