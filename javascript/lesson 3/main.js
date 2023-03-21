// QUY TẮC ĐẶT TÊN HÀM, 3 loại function 
// Declaration Function: function cơ bản, đã học vào buổi trc
// Expression Function

var sayHello = function (a,b) {
    console.log("hello world")
    return a+b;
}

// arrow function =>
var sayHi = () => {
    console.log("hi")
}
// Khi có giá trị trả về
var sum = (a,b) => {
    return a+b;
}
// Viết ngắn gọn
var sum = (a,b) => a+b;

// MẢNG 
var languages = ["java", "js", "python"]
console.log(languages[1]) // truy xuất phần tử trong mảng, chú ý mảng chạy từ phần tử 0
console.log(languages.length) // độ dài mảng
// Làm việc với mảng
console.log (languages.toString()) // chuyển sang chuỗi , mảng không đổi
console.log (languages.join("-")) // chuyển sang chuỗi, có thể thêm dấu ngăn cách 
// .pop()  >> xoá phần tử cuối mảng, trả về phần tử đã xoá
// .push([phần tử muốn thêm vào])     >> thêm 1 hoặc nhiều phần tử vào cuối mảng, trả về độ dài mới
// .shift()  >> xoá phần tử đầu mảng, trả về phần tử đã xoá
// .unshift([]) >> Tương tự push nhưng thêm vào đầu
// .splice (vị trí bắt đầu, số phần tử muốn xoá từ vị trí đầu, phần tử muốn chèn vào có thể chèn nhiều phần tử)
var lang2 = ["ruby"]
languages.concat(lang2) // nối chuỗi
// .slice(index, số lượng) >> cắt mảng, không thay đổi mảng ban đầu, trả về giá trị cắt


//  LÀM VIỆC VỚI CHUỖI
var myString = "lập trình javascript"
// Độ dài chuỗi: .length
// indexOf("chuỗi cần tìm", vị trí bắt đầu tìm mặc định là 0) >> trả về index của chuỗi tìm đc, ko có thì trả về -1    
// lastIndexOf("chuỗi", vị trí)  >> tương tự nhưng tìm từ dưới
// search("chuỗi")  >> tương tự indexof nhưng ko truyền đc tham số thứ 2
// slice(index, số lượng)   >> cắt chuỗi, tương tự mảng
console.log(myString.replace("javascript", "js"))  // thay thế javascript >> js
console.log(myString)
// thay thế tất cả >> replace(/javascript/g, "js")
// toUpperCase() >> chuyển thành chữ hoa
// toLowerCase() >> chuyển thành chữ thường
// trim() >> xoá khoảng trắng đầu cuối
console.log(myString.split(' ')) // chuyển string thành array dựa vào dấu ngăn cách trong split
// lấy index >> myString.charAt(index) hoặc myString[index]