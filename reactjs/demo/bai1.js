// console.log("hello")
// import huyLog from "./app.js"
// import {PI,myObj} from "./app.js"
// import * as myValue from "./app.js"// import toàn bộ từ app.js cho vào trong obj myValue


// huyLog()
// console.log(PI)
// console.log(myValue)

// const root = document.getElementById('root')
// const h1 = document.createElement('h1')
// h1.innerText = " hello world "
// root.appendChild(h1)
// h1.classList.add('h1tag')
// console.log(React)
// const h1React = React.createElement("div",{
//     title: "hello",
//     className: "cl1 cl2 cl3"
// }, React.createElement("h2",null,"hello"), React.createElement("h3",null,"hi"))

// const container = document.getElementById('root') // lấy element root từ dom
// const root = ReactDOM.createRoot(container) // tạo một element root để chứa toàn bộ react element
// root.render(h1React) // render

// csr

// var root = document.querySelector('#root')

// const list = document.createElement('div')
// const item1 = document.createElement('div')
// const item2 = document.createElement('div')
// item1.innerText = "1. ITEM 1"
// item2.innerText = "1. ITEM 2"

// list.appendChild(item1)
// list.appendChild(item2)

// const h3 = document.createElement('h3')
// h3.innerHTML = "hello"
// item2.appendChild(h3)
// console.log(list)

// setTimeout(()=>root.appendChild(list),3000)

// REACT là 1 thư viện viết bằng javascript >> React
console.log(React) // REACT -react element ---- DOCUMENT - document element

const h1React = React.createElement('div',{
    title: "hello h1",
    className: "h1tag heading"
},"hello","hi",React.createElement("h2",null,"đây là h2"))
console.log(h1React)

const container = document.querySelector('#root') // trỏ đến cái root
const root = ReactDOM.createRoot(container)
root = ReactDOM.createRoot(container)
root.render(h1React)



// REACT : vừa tạo element, vừa render ra dom
// code mobile phổ biến, người ta muốn react cũng có thể code được giao diện mobile
// sinh ra cái react native, tách cái react - react dom
// react : tạo ra các reactelement, xử lí logic theo kiểu của react
// Tạo element >> render
// >> DOM (web): reactDOM (trang web xme trên điện thoại vẫn là web)
// >> mobile : react native (ứng dụng mobile)