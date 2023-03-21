// // Tạo sự kiện
// // Phần tử + tên sự kiện + func

// // var aElement = document.querySelector('a')

// // aElement.onclick = function(e){
// //     e.preventDefault()
// // }

// var divElement = document.querySelector('.container')


// console.log([divElement])

// divElement.onclick = function(){
//     //cv1
// }
// divElement.onclick = function(){
//     //cv1
//     //cv2
// }

// function cv2(){
//     console.log('thực hiện cv2')
// }

// divElement.addEventListener('click',function(){
//     console.log('thực hiện công việc 1')
// })

// divElement.addEventListener('click',cv2)
// divElement.addEventListener('click',function(){
//     console.log('thực hiện cv 3')
// })

// // divElement.removeEventListener('click',cv2)

// stringify: chuyển từ kiểu dữ liệu thông thường sang json
// parse: chuyển từ json >> sang kiểu dữ liệu để mình sử dụng

// backend gửi 1 số lên, chuỗi .... 
// {"data": "backend gửi", "header": "àkl", "body":"" }

var json1 = `{
    "data": {
      "name": "huy",
      "age": 24
    },
    "header": "json gửi về từ backend",
    "IP": 123456
  }`

  console.log(JSON.parse(json1))
var student = JSON.parse(json1).data
console.log(student)