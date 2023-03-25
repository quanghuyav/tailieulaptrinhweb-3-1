
// const myArr = ["js","python","C"]
// console.log(    myArr.map(element => React.createElement(
//     "div",
//     null,
//     element
// )))
// const h1React =( 
// <div>
//     {
//         myArr.map(element => <div>{element}</div>)
//     }


// </div>)
// function PostItem(props){  // tất cả những props được truyền vào sẽ thông qua obj props, có thể đặt tên khác
//     props.callback(100)
//     return (
//         <div>
//             Khoá học {props.name}
//             <br></br>
//             Course : {props.course}

//         </div>
//     )
// }
// const h1React = (<PostItem name = "javascript" course = {1000} callback = {(value)=>{console.log(value)}}></PostItem>)




// const container = document.querySelector('#root') // trỏ đến cái root


// const courses = [{id: 1, name: "python", price: 1000},{id:2, name: "javascript", price: 1500},{id:3,name: "java", price: 1200}]


// // const reactElement = React.createElement('div',{title: "hello", className: "content"},courses.map(course => React.createElement("div",null,course)))

// const reactElement = <div title= "hello" className= "content">
//     {courses.map((course,index) => <div key={course.id}>{course.name} có giá {course.price}</div>)
//     // [<div>python có giá 1000</div>, div..., div...]
//     }
// </div>


// const reactElement = 
// (<React.Fragment>
//         <div>Hello</div> 
//         <div>Hi</div>
// </React.Fragment>)

// const reactElement1 = React.createElement(React.Fragment,null, ....)


function sum(a,b,c){
    return a+b+c
}
sum(3,4,5)

function Header({name, course, callback}){
    callback()
    return <div>{name} có giá {course}</div>
}
 // tương đương thẻ <div> đây là header </div>
const reactElement = <div className = "content" title = "hello">
    <Header className="content" callback ={()=>console.log(Math.random())} name= "Javascript" course={1000}></Header>

</div>
console.log(reactElement)


const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(reactElement)


