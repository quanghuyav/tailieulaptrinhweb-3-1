// TÌM HIỂU JSX
const h1React = <h1>Hello</h1>  // <h1>Hello</h1> chính là jsx
// tương tự như là
const h1Reactt = React.createElement('h1',null,"hello")

// Jsx không phải html, nó chỉ có cú pháp gần giống như html, giúp việc viết code react có phần giống với làm giao diện bằng html
// Để truyền mã javascript vào trong jsx chúng ta sử dụng cặp {}, chú ý không dùng dấu $ như khi truyền mã js vào string
// vd:

var name = "huy"
const nameReact = <h1>Hello{name}</h1>

// Nếu muốn truyền obj, thì phải để là 2 cặp như sau {{}}
const elementReact = <div style = {{color: "red", backgroundColor: "blue" }}>abc</div>

// Babel: giúp mã js mới có thể chạy trên những trình duyệt cũ, giúp convert mã jsx sang js
// Cài đặt babel bằng link cdn
// Cần thêm đoạn type = "text/babel" trong thẻ script

// JSX render arr
// Nói lại về việc React.createElement() từ tham số thứ 3 có thể truyền vào 1 mảng
const arrReact = React.createElement("h1",null,["Javsscript","python"])
// khi tạo trc 1 mảng và muốn truyền vào children khi createElement, ta sử dụng phương thức map() trong mảng. map() trả về 1 mảng
// chú ý props key
const myArr = ["js","python","C"]
const arrsReact = React.createElement("div",null,
    myArr.map(element => React.createElement(
        "div",
        null,
        element
    ))
);
// Chuyển qua sử dụng jsx

// Không render được 2 element cùng 1 lúc với jsx, cần cho các element đó vào trong 1 thẻ <React.Fragment> 


// Tư duy chia component trong react: chia một project thành các thành phần nhỏ, các thành phần nhỏ có thể lại được chia thành các thành phần nhỏ hơn, sau đó gộp lại với nhau để thành 1 project hoàn chỉnh, giúp cấu trúc code rõ ràng, tái sử dụng
// Có 2 kiểu: class component (cũ) và function component (yêu cầu khi tạo component phải viết hoa chữ cái đầu, nếu ko sẽ báo lỗi)

function Header(){
    return (<div>Header</div>)
}
const app = (<Header></Header>)  // có thể viết ngắn gọn là <Header/>


// Props là gì: là một object chứa những thuộc tính để mô tả cho element mình tạo ra
/*
    - Trong react element
        + Giống với atribute của thẻ html
        + class, for > className, htmlFor
        + Phải tuân theo quy ước có sẵn như html
    - Trong react component
        + props là đối số của component (function)
        + Tự đặt tên cho props theo kiểu camelCase
        + Có thể truyền cả callback (nếu khi khởi tạo có callback thì bắt buộc phải truyền callback vào)
        + Có thể dùng destructuring để bỏ phần props. đi (có thể đặt giá trị default theo cú pháp của destructuring)
 */ 
// ví dụ
function PostItem(props){  // tất cả những props được truyền vào sẽ thông qua obj props, có thể đặt tên khác
    props.callback(100)
    return (
        <div>
            Khoá học {props.name}
            Course : {props.course}

        </div>
    )
}
const app1 = (<PostItem name = "javascript" course = {1000} callback = {(value)=>{console.log(value)}}></PostItem>)



// Chia component trnag mapstudy
// Header - Main - Footer
// Button - Input
