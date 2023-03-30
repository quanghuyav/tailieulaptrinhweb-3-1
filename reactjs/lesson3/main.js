// Nhắc lại về việc sử dụng giá trị mặc định cho callback khi dùng destructuring của bài trc

// event trong JSX, chú ý sử dụng camel case để gọi sự kiện vd: onClick

function App(){
    return <button onClick ={(e)=>console.log(e.target)}>click me</button>
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App></App>)

// Kết hợp với Object
const MyComponent = {
    Header(){
        return <h1>Header</h1>
    },
    MyContent (){
        return <div>My content</div>
    }
}
const reactElement = <MyComponent.Header></MyComponent.Header>

// boolean, null, underfine sẽ ko được render ra
// Lưu ý khi truyền props qua dấu {}, thì mã js trong dấu {} phải truyền vào là 1 biểu thức, nghĩa là mã js ấy phải trả về giá trị. Những câu lệnh điều kiện hoặc vòng lặp sẽ không truyền được, vì nó không trả về giá trị

// Truyền props giống với atribute của html

function MyInput({className, title, placeholder}){
    return <div className = {className}>
        <input title={title} placeholder={placeholder}></input>
    </div>
}
const reactElement1 = <MyInput className="my-input" title="hello" placeholder="nhập vào"></MyInput>
// Tuy nhiên 1 thẻ html có nhiều atribute mặc định, có thể sử dụng rest/spread

function MyInput1({className, ...inputAtributes}){
    return <div>
        <input {...inputAtributes}></input>
    </div>
}

// children trong component, sẽ được truyền vào qua props children
function MyButton({className, children}){
    return <button>
        {children}
    </button>
}
const reactElement2 = <MyButton>Click me!</MyButton> // có thể truyền vào 1 {biểu thức}


// Tìm hiểu nodejs
// Là 1 runtime của javascript, tương tự như trình duyệt, giúp chạy mã javascript
// Nodejs có thể tạo server trên chính máy tính
// nodejs cung cấp thư viện npm quản lý các thư viện của js, trong đó có react, babel, webpack
// Ngoài ra có sẵn thư viện create-react-app giúp nhanh chóng tạo 1 project react, đã cài sẵn những thư viện quan trọng


// react-webpack # thư mục gốc
//     | src # thư mục chứa source code chính
//         | components # thư mục chứa components
//         | index.js # File khởi tạo, render App vào #root
//     | public
//         | index.html # HTML page, nơi chứa #root element

// npm init

// npm install webpack webpack-cli --save-dev   // chú ý -dev

// npm i react react-dom

// npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

// tạo public/index.html

// tạo src/index.js

// import React from 'react' // nạp thư viện react
// import ReactDOM from 'react-dom' // nạp thư viện react-dom

// // Tạo component App
// function App() {
//     return (
//         <div>
//             <h1>hello</h1>
//         </div>
//     )
// }

// // Render component App vào #root element
// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(<App></App>)

//tạo webpack.config.js ngang hàng với package.json
/* NỘI DUNG


const path = require("path");

module.exports = {
  entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js" // Tên file được build ra
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"]
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
  ]
};


*/

// Tại package thêm nội dung sau
/*
"scripts": {
    ...
    "start": "webpack --mode development --watch",
    "build": "webpack --mode production"
}
// npm install webpack-dev-server --save-dev

// "webpack-dev-server --mode development --open --hot"
*/