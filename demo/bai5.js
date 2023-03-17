// Đối tượng = thực thể, sự vật vd: một con chó, một cái máy tính, một lớp học, một bạn học sinh
// Đối tượng(Thực thể, sự vật): đặc điểm của nó + hành vi
// vd: máy tính: - đặc điểm: 3D, chiều dài 30cm, chiều rộg 20cm, dày 5cm, màu đen, màn hình 10 inc, 
// - hành vi: mở lên, phát sáng, phát ra âm thanh, truy cập trang web/....
// Cục đá: đặc điểm: dính bụi, sần sùi, tròn, bán kính...
// Hành vi: năm im
// Đặc điểm: có lông, động vật
// Hành vi: ăn, ngủ, chạy, sủa
// key - value

// Đối tượng = Thuộc tính (tính chất, đặc điểm) + Phương thức (hoạt động, hành vi)
// var myInfo = {
//     name: "huy",
//     age: 24,
//     address: "vietnam",
//     fullName: "nguyen quang huy" ,
//     getAge: function(){
//         return this.age + 1
//     },
//     getName: function(){
//         return this.name
//     }
// }

// var x = 'myEmail'
// myInfo.email = 'abc@gmail.com'
// myInfo.age = 18
// myInfo['myEmail'] = '123@gmail.com' // [''] = .
// console.log(myInfo.age)
// console.log(myInfo.getAge())

// con chó A: tên A, tuổi 2, giống chó: Ngao tây tạng
// chó B: tên B, tuổi 1, giống: husky
// Bản thiết kế: tên, tuổi , giống chó

// function Dog (name, age, type) {
//     this.name = name
//     this.age = age
//     this.type = type
//     this.voice = 'gâu gâu'
//     this.getName = function(){
//         return "con chó này tên là" + name
//     }
// }
// Dog.prototype.address = "Ha Noi"

// var dogA = new Dog("AAAA", 2, "husky")
// var dogB = new Dog("BBBB", 1, "ngao tây tạng")

// dogA.age = 1
// dogA.address = 'Thaibinh'
// console.log(dogA)

// Object Contructor
// MAth là object 
// console.log(Math.min()) // 0 > 1 nhân 100  >> 0 đến 100
// console.log(Math.min(999999999999))
// Hàm tìm giá trị bé nhất
// min = 1 giá trị nào đó, so sánh min với lần lượt từng giá trị trong mảng
// 928492438
// min = 928492438
//

// max : âm vô cùng
// min: dương vô cùng

// function findMin(arr){
//     min = Infinity;
//     for(let i = 0; i<arr.length; i++){
//         if (arr[i]<min) min = arr[i]
//     }
//     return min
// }

// console.log("find min: ",findMin([999999999999999999]))

// min = -10

// Viết một đối tượng học sinh, có tên, tuổi, điểm toán, điểm lý ,điểm hoá, console.log ra màn hình các thông tin của đối tượng, hàm: in ra tổng điểm của học sinh

// var hocSinh = {
//     ten : "Nguyễn Văn A",
//     tuoi: 18,
//     diemToan: 10,
//     diemLy: 10,
//     diemHoa: 9,
//     layTongDiem: function (){
//         return this.diemToan+this.diemLy+this.diemHoa
//     }
// }

// console.log(hocSinh.layTongDiem())

//Bài 1: Viết một đối tượng đại diện cho một sản phẩm ở trong kho: bao gồm (đặc điểm: tên sản phẩm, số lượng, giá tiền) + (phương thức: in ra tên sản phẩm, in ra số lượng sản phẩm, in ra giá tiền sản phẩm, tính tổng giá tiền của tất cả sản phẩm = SL x GT)
// Bài 2: Viết 1 đối tượng đại diện cho 1 chiếc xe ô tô: (đặc điểm : hãng sản xuất, năm sản xuất, màu sắc, tốc độ hiện tại) + (Phương thức: tăng 20 tốc, giảm 20 tốc) 
// Bài 3: Viết 1 contructor Student (tên, tuổi, điểm Toán, điểm Lý, điểm hoá ) (phương thức tính tổng điểm) >> Tạo ra 5 đối tượng học sinh, viết 1 hàm tìm ra học sinh có tổng điểm cao nhất

function Student (ten,tuoi,diemToan,diemLy,diemHoa){
    this.ten = ten
    this.tuoi = tuoi
    this.diemToan = diemToan
    this.diemLy = diemLy
    this.diemHoa = diemHoa
    this.tinhTong = function(){
        return this.diemToan+this.diemLy+this.diemHoa
    }
}

function findMax(arr) {
    var max = -Infinity
    var hocSinhDiemCaoNhat = {}
    for (var i = 0; i<=arr.length-1 ; i++){
        if (arr[i].tinhTong()>max) { 
            max = arr[i].tinhTong()
            hocSinhDiemCaoNhat = arr[i]
        }
    }
    return hocSinhDiemCaoNhat
}

var students = []
for (let i = 1; i <=5 ; i++){
    var name = "student"+i
    students.push(new Student(name,18, Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10)))
}

console.log(students)
console.log(findMax(students))

// js - html DOM