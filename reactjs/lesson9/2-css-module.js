// Khi sử dụng css chia theo từng component, rất dễ dẫn đến trường hợp đặt tên trùng class
// Và css đặt ở component nào cũng có giá trị như nhau, dẫn đến việc bị ghi đè css không kiểm soát được
// >> Ra đời css module
//  File css có đuôi là .module.css
//  Import bình thường với đuôi là .module.css
// Khi tạo đuôi .module.css,  file css sẽ đổi tên các class và id có trong css đó theo quy tắc của nó
// ví dụ file css ban đầu:
/*
    .header{
        color: red;
    }
    h1 .content {
        color: blue;
    }

*/
// Sẽ được đổi thành
/*
    .header-abcas{
        color: red;
    }
    h1 .content-pqqk {
        color: blue;
    }

*/
// Các tên thẻ sẽ không bị đổi
// Vì vậy, ví dụ 1 element để class là <h1 className = "header"> sẽ không còn nhận đc css của class header nữa
// Để nhận được css của css module thì phải đổi tên class giống với class trong css module
// Ta có thể lấy tên class mới thông qua obj khi import css module
// ví dụ
import styles from "style.module.css"
// lúc này styles là 1 obj đại diện cho style.module.css
// Trong obj này có những cặp key-value đại diện cho class trc khi bị đổi tên và sau khi bị đổi tên
// key (tên class trc khi bị đổi) : value (tên class sau khi bị đổi)
// Vì vậy khi ta tạo element cần thêm class như sau <h1 className = {styles.header}>

// Chú ý, khi sử dụng css module, đặt tên class trong css nên đặt theo kiểu camel case
// Để tạo 1 phần tử có nhiều class, ta cần kết hợp với mảng
// <h1 className = {[style.header,style.content].join( )}> // Trong join truyền vào dấu cách để tạo ra 1 string gồm 2 class cách nhau bởi dấu cách
