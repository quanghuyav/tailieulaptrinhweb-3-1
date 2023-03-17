// Mô tả lại cách hoạt động của mô hình dom với javascript
// preventDefault: ngăn chặn hành vi mặc định của element
aElement.onclick = function(e) {
    e.preventDefault()
}

// stopPropagation: ngăn chặn sư kiện nổi bọt, dùng ở thẻ con
e.stopPropagation();

// event listener
aElement.addEventListener('click', function(){
    // something
})

// chú ý, để có thể remove event thì lúc add event cần khai báo func riêng ra
function func2 (){
    //something
}
aElement.addEventListener('click', func2)
aElement.removeEventListener('click', func2)

// Phân biệt dom event và eventlistener
// Một cái là thuộc tính, một cái là phương thức
// dom event chỉ có thể gán 1 lần, nếu muốn thực hiện nhiều hoạt động thì phải gán hết vào trong 1 event, để remove thì gán bằng func rỗng

// JSON là viết tắt của JavaScript Object Notation, là một kiểu định dạng dữ liệu tuân theo một quy luật nhất định mà hầu hết các ngôn ngữ lập trình hiện nay đều có thể đọc được. JSON là một tiêu chuẩn mở để trao đổi dữ liệu trên web.
// stringify // parse
// JSON là một chuỗi (string), có quy luật nhất định
// JSON thể hiện dữ liệu
// FE: Yêu cầu BE gửi thông tin 1 món hàng
// BE: Lấy thông tin từ DB, sau đó api chuyển đến FE (thông tin được mã hoá thành chuỗi json)

/**
 *  FE: yêu cầu xuống BE
 *  BE: lấy thông tin từ db, xử lí logic
 *  BE: từ thông tin (number, obj, arr, string, null, underfine, bool) >> JSON 
 *  API: Chuyển Json từ BE sang FE
 *  FE: chuyển từ json >  thông tin (number, obj, arr, string, null, underfine, bool)
 *  FE: thông tin >> in ra giao diện
 */

// FE: javascript
// BE: nodejs (javascript), spring java, .net c#

