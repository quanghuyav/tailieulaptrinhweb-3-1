/** ĐốI TƯỢNG - OBJECT*/
/*
Trong JavaScript, một đối tượng (object) là một thực thể có tính chất và hành vi. Nó là một trong những thành phần cơ bản của ngôn ngữ lập trình JavaScript và được sử dụng rộng rãi trong việc phát triển ứng dụng web.

Một đối tượng trong JavaScript được định nghĩa bởi một tập hợp các thuộc tính (properties) và phương thức (methods). Thuộc tính của đối tượng có thể là các giá trị như số, chuỗi, hoặc đối tượng khác. Phương thức của đối tượng là các hàm có thể được gọi để thực hiện một số hành động trên đối tượng.

Một đối tượng có thể được tạo ra bằng cách sử dụng cú pháp "object literal" hoặc "constructor function". Trong đó, "object literal" là cách định nghĩa đối tượng bằng cách khai báo một đối tượng mới bằng cách sử dụng cặp dấu ngoặc nhọn và liệt kê các thuộc tính và phương thức của đối tượng. Trong khi đó, "constructor function" là một hàm được sử dụng để tạo ra một đối tượng mới bằng cách sử dụng toán tử "new".

Đối tượng trong JavaScript là một cấu trúc dữ liệu linh hoạt và mạnh mẽ, được sử dụng để biểu diễn các đối tượng thực tế trong ứng dụng web, như đối tượng người dùng, sản phẩm, đơn hàng, v.v. Nó cũng là một trong những khái niệm cốt lõi của lập trình hướng đối tượng (OOP) trong JavaScript.
*/


// Khai báo
var myInfo = {
    name: "huy",
    age: 24,
    address: "Vietnam",
    "full-name" : "nguyen quang huy"
}

// Thêm thuộc tính
myInfo.email = "huynq@gmail.com"
myInfo['my-email'] = "3007nqh@gmail.com"

// Lấy thuộc tính
console.log(myInfo.name)
console.log(myInfo['email'])

// Phương thức trong object
var myNewInfo = {
    name: "huy",
    age: 24,
    address: "Vietnam",
    getName: function(){
        return this.name
    }
}
console.log(myNewInfo.getName())

// Object contructor - Bản thiết kế 
function Person(name, age){
    this.name = name;
    this.age = age,
    this.specie = "human"
}

var student = new Person("lam",21,)
var teacher = new Person("John", 31)
console.log(student)
console.log(teacher)

// Object prototype - nguyên mẫu
Person.prototype.address = "Vietnam"
Person.prototype.getAddress = function(){
    return this.address
}

/** Math object
 *  Math.PI
 *  .round()    >> Làm tròn trên dưới
 *  .abs()      >> trị tuyệt đối
 *  .ceil()     >> làm tròn trên
 *  .floor()    >> làm tròn dưới
 *  .random()   >> tạo số ngẫu nhiên từ 0 > 1
 *  .min()      >> trả về số bé nhất
 *  .max()      >> trả về số lớn nhất
 */
console.log(Math.floor(Math.random()*10))

// Đối tượng date