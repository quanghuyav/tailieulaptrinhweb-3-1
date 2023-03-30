// Hướng dẫn cấu hình lại react project
// Sử dụng npx create-react-app [tên ứng dụng]
// Giới thiệu npm npx yarn

/** npm
 *  - project scope: cài trên project
 *      npm i [tên thư viện]
 *      npm i -D [tên thư viện] // hoặc --save-dev
 *      npm unistall [tên thư viện]   // xoá thư viện, ko phần biệt là ở depen hay ở devDepen
 *  - global scope: cài luôn thư viện trên máy
 *      npm i -g create-react-app // cài thư viện create-react-app trên máy, mỗi lần tạo 1 project react có thể dùng luôn thư viện này
 *      npm unistall -g [tên thư viện]
 */ 

/** npx được cài kèm node,npm
 *  - dùng để thay thế cho npm global
 *  - nghĩa là ko cần tải thư viện create-react-app vẫn dùng đc
 *  - nó sẽ kiểm tra xem thư viện create-react-app đã được cài chưa, nếu được cài bằng global rồi thì sử dụng bình thường, còn chưa cài thì nó sẽ tải create-react-app về, tạo ứng dụng, sau đó lại xoá create-react-app đi
 * 
 */

// Yarn, cũng dùng để quản lý thư viện cho npm

// Sử dụng npm i để tải các thư viện đã khai báo trong package.json khi mà xoá thư mục node_modules

// import/export component

/** hooks trong react
 *  - Là những hàm được viết sẵn để sử dụng bên trong function component
 *  - Chỉ dùng được trong function component
 *  - Tạo những component đơn giản, đầy đủ tính năng
 */

// useState(): giúp đơn giản hoá việc thay đổi giao diện khi dữ liệu thay đổi
// Cần import {useState} from 'react'
function myComponent(){
    const [state,setState] = useState(initState)
    //...
}

// làm việc với callback
    setState(preState => preState+1)
// tối ưu với initState bằng callback(sẽ lấy giá trị trả về của callback làm initState)
// Chú ý khi thêm thuộc tính vào object, phải sử dụng toán tử spread (...)