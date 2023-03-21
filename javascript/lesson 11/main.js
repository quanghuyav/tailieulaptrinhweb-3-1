// Sử dụng api
// ES6:
// let const
// arrow function: không được sử dụng từ khoá this trong arrow function
// Template literals (Template string): sử dụng `${x} stringgg` trong khi làm việc với chuỗi
// classes (gần giống với contructor, liên quan đến hướng đối tượng)

// contructor
function Course (name, price){
    this.name = name
    this.price = price

    this.getName = function(){
        return this.name
    }
}
var jsCourse = new Course ("javascript",1000)

// classes giúp code trở nên rõ ràng hơn
class Course {
    constructor(name, price){
        this.name = name;
        this.price = price
    }

    getName(){
        return this.name
    }
}


// Enhanced object literals
// 1. Định nghĩa key, value cho object

var name = "javascript"
var price = 1000
var course = {
    name:name,
    price:price,
    
}
// có thể viết thành
var course = {name,price} // es6 sẽ tự hiểu là name = name, price = price

// 2. Định nghĩa method
var course = {
    name,
    price,
    getName(){  // có thể bỏ cái getName=function(){}, chỉ để là getName(){}
        return this.name
    }
}

// 3. Định nghĩa key cho object dưới dạng biến
var x = 'name'
var y = 'price'
var course ={
    [x]: "javascript",
    [y]: 1000
}

// Default parameter values

function myPow(x,y = 1){ // nếu tham số y không được trueyefn vào sẽ có giá trị mặc định là 1
    return x**y
}

console.log(myPow(3,4))

// Destructuring
var myArr = ["java","python","C++"]
var [a,b,c] = myArr 
var [a,,c] = myArr
var [,,c] = myArr
var [a] = myArr

// Rest parameters: lấy ra phần còn lại
var [a, ...rest] = myArr // có thể thay rest bằng tên khác, nhưng mà nên để là rest
// lúc này a = "java", rest = ["python","C++"]

// Destructuring và rest khi làm việc với object
var course = {
    name:"js",
    price: 1000,
    time: "20h-23h",
    children: {
        name: "nodejs"
    }
}

var {name,price,...rest} = course // lúc này biến name = "js", price = 1000, rest = {time:"20h-23h", children:{...}}
// chú ý, phải lấy tên biến trùng với tên key của object

var {name: courseName} = course // đổi tên biến thành courseName

var {name: courseName, children:{name: childrenName}} = course // lấy trong object con, trùng tên thì đổi tên 

var {image = "default image" } = course // nếu trong course không có key image thì sẽ lấy ra giá trị default

// dùng rest với function
function myLog(...params){ // lúc này param là 1 mảng chứa các tham số truyền vào
    for (let i = 0;i<params.length;i++){
        console.log(i)
    }
}

myLog(3,4,5,4,2,5,"2323") // có thể truyền vô số tham số

function myLog(a,b,...params){ // lúc này a là tham số đầu, b là thứ 2, params sẽ lấy từ tham số thứ 3
    for (let i = 0;i<params.length;i++){
        console.log(i)
    }
}
// có thể sử dụng Destructuring khi làm việc với function
function myFun([a,b]){

}
var myArr = [10,14]
myFun(myArr) // lúc này function sẽ lấy được luôn giá trị a = 10,b = 14 mà không cần đi qua mảng, tương tự với obj

// Spread: khi thêm dấu ... vào trước 1 mảng hoặc hàm, sẽ có tác dụng lấy giá trị bên trong
// vd: arr = [1,2,3] >>> ...arr = 1,2,3

var ar1 = [1,2,3]
var ar2= [4,5,6]
var ar3 = [...ar1,...ar2,7,8,9] // ar3 = [1,2,3,4,5,6,7,8,9]
// tương tự với obj

var arr = [1,2,3]
function myF(a,b,c){

}
myF(...arr) // nó sẽ truyền vào 3 tham số là 1,2,3 chứ ko truyền cả mảng arr