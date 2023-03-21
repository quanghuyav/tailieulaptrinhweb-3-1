// api: link: www.api.google.com www.graph
// fetch("hsàlkjafs").then(function(res){
//     console.log('bước 1, sau khi lấy res thì in ra res')
//     console.log(res)
//     return res.json()
// })
// .then(function(data){
//     console.log('bước 2,sau khi lấy data thì in ra data')
//     console.log(data)
// })
// .catch(function(err){
//     console.log("có lỗi")
// })

// async function getData(api)  {
//     try {
//         res = await fetch(api)
//         data = await res.json()
//         console.log(data)
//         return data
//     }
//     catch {
//         console.log('có lỗi')
//     }
// }




// async function main (){
//     try{
//         let data = await getData('https://jsonplaceholder.typicode.com/posts')
//         let element = document.getElementById('container-id')
//         for (let i = 0 ; i< data.length; i++){
//             element.innerHTML = element.innerHTML + `    <div>
//             <h1>${data[i].title}</h1>
//             <p>${data[i].body}</p>
//           </div>`
//         }
//     }
//     catch{
//         console.log('có lỗi')
//     }
// }

// main()


// var / let / const
// const  // var, let (ko thể thay đổi giá trị - có thể thay đổi giá trị) 
// var // const,let (var có chức năng hoisting)



// var sum1 = function (a,b) {
//     return a+b
// }

// var sum2 = a => a*2

// console.log(sum2(3))

// var course = {
//     name : "javascritp",
//     getName: function (){
//         return this.name
//     }
// }
// console.log(`Khoá học đang học là ${course.getName()}`)

// function Course(name,price){
//     this.name = name;
//     this.price = price,
//     this.getName = function(){
//         return this.name
//     }
// }

// class Course{
//     constructor(name,price){
//         this.name = name;
//         this.price =price
//     }
//     getName = function(){
//         return this.name
//     }
// }

// jsCourse = new Course('javascript',1000)
// pyCourse = new Course('python',2000)
// console.log(jsCourse.getName())

// var x = "name"
// var price = 1000
// var jsCourse = {
//     [x]: 'javascript'  ,
//     price ,// ES6 tự hiểu là mình muốn tạo 2 key là name, price
//     getName(){
//         return this.name
//     }
// }
// console.log(jsCourse)

// function myPow(a=1,b=1){
//     return a**b
// }

// console.log(myPow())

// myArr = [0,1,2,3]
// var [x,y,hello,z] = myArr
// // console.log(rest)

// var course = {
//     name: "js",
//     price: 1000,
//     time: "20h-23h",
//     children: {
//         name: 'reactjs',
//         price: 2000,
//     },
//     image: 'hình ảnh'
// }

// var {name, price,image="image default",...rest} = course
// console.log(name,price,image,rest)

// function sum({num1:a,num2:b}){
//     return a+b
// }

// var myObj = {
//     num1: 5,
//     num2: 4,

// }


// console.log(sum(myObj))

//spread >< rest : ...
// var arr1 = [1,2,3]
// var arr2 = [4,5,6]

// var arr3 = [9,10,"j",...arr1,"hello",...arr2]/// 
// console.log(arr3)

// var obj1 = {name:"javascript",price: 1000}
// var obj2= {time:"20h-23h"}
// var obj3 = {image:"linkimage",...obj2,...obj1}
// console.log(obj3)

function sum(...params){ //rest params = [1,2]
    return params[0]+params[1]
}
var arr = [1,2]
console.log(sum(...arr)) //spread, tương tự sum(1,2)