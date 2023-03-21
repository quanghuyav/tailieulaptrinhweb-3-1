// var headingElement= document.querySelector('h1')
// headingElement.title='heading'
// headingElement.classList.add('heading2','heading3')
// headingElement.innerText = 'new heading'
// headingElement.innerHTML="<h1>HELLO</h1>"
// headingElement.innerHTML="<h1>Hi</h1>"

// var heading = document.getElementById('heading-id')
// console.log(heading)

// var heading = document.getElementsByClassName('heading-class')
// console.log(heading) // heading là 1 mảng
// console.log(heading[0]) // truy cập vào element có index là 0 trong mảng


// ID: là duy nhất, trả về luôn cái element có ID đó
// class: có thể đặt trùng class, trả về tất cả các element có class đó >> tạo 1 cái mảng chứa các element đó

// var heading = document.getElementsByTagName('h1')
// console.log(heading)

// // selector
// document.getElementById('heading-id') 
// //chỉ tìm với ID > trả về element

// document.getElementsByClassName('heading-class')
// // chỉ tìm với class > trả về 1 mảng các elements[ele1,ele2]
// // Để truy cập elements[0], elements[1] ...

// document.getElementsByTagName('div')
// // chỉ tìm với tag > trả về 1 mảng các elements[ele1,ele2]
// // Để truy cập elements[0], elements[1] ...

// document.querySelector('.container #heading-id')
// // tìm bằng selector(thẻ+id+class...) >> trả về element

// document.querySelectorAll('.heading-id')
// // tìm bằng selector(thẻ+id+class...) >> trả về mảng elements[ele1,ele2...]
// // Để truy cập elements[0], elements[1] ...

// 2 đầu việc
// Việc 1 là yêu cầu in ra cái thẻ div cha
// Việc 2 là yêu cầu in ra cái thẻ h2 ở bên trong

var containers = document.querySelectorAll('.container')
var container = containers[0]
container.outerHTML = '<h1 class = "container">hello</h1>'
console.log(container.outerHTML)
console.log(document.querySelectorAll('.container')[0].outerHTML)




















// var myInfo = {
//     name: 'huy',
//     age:24,
//     getName: function(){
//         return this.name
//     },
//     setName: function(name){
//         this.name = name
//     }
// }
// myInfo.setName('Long')
// console.log(myInfo.getName())



