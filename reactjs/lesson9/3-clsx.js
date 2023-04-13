// Cài thư viện npm i clsx
// import clsx from 'clsx'
// Sử dụng:
<h1 className = {clsx(style.header,
 "header-menu",
 {[style.dark]:true},
 {"mgr-8":true}
 )}></h1>
// Trong clsx có thể truyền vào 1 object  để tạo 1 class có tình true/false
// Ngĩa là nếu true thì thêm class đó vào element, false thì ko
// có thể tạo 1 biến để lưu các giá trị của class
const classes = clsx(style.header,
    "header-menu",
    {[style.dark]:true},
    {"mgr-8":true})

//  <h1 className = {classes}></h1> 