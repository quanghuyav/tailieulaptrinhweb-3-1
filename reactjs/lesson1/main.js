// import - export

// Phân biệt SPA >< MPA
// Phân biệt CSR >< SSR
// document.createElement()
const h1 = document.createElement('h1')
h1.className = "heading"
h1.title = 'h1-title'
h1.innerText ='Hello world'
document.body.appendChild(h1) // render ra giao diện thẻ h1

// React.createElement(tag,{props},children1,children2,...children n)

const h1React = React.createElement('h1',{
    className: "heading",
    title:"h1 title"
},"hello world")


// Nếu muốn render ra dom phải sử dụng reactDOM

const container = document.getElementById('root') // lấy element root từ dom
const root = ReactDOM.createRoot(container) // tạo một element root để chứa toàn bộ react element
root.render(h1React) // render


// Ngày trước React và ReactDOM nằm chung trong 1 thư viện, sau này khi ra đời react-native để code ứng dụng mobile thì tách ra