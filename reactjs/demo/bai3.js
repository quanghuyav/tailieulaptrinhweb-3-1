
// function Course ({ name, price, ...h1Atributes}) {
//     return <h1 {...h1Atributes}>Khoá học {name} có giá {price}</h1>
// }

// // function Course ({className, title, name, price}) {
// //     return <h1 className ={className} title = {title}>Khoá học {name} có giá {price}</h1>
// // }

// function App(){
//     return <div>
//         <Course className="heading1" title="hello js" name = "js" price = "1000"></Course>
//         <Course className="heading2" title="hello python" name = "python" price = "3000"></Course>
        
//         </div>
// }



function Button({title, children}){
    console.log(children)
    return <button title={title}>{children}</button>

}


function App(){
    return <div>
        <Button title = "abc" children="Hello"></Button>
        {/* <button>Click me!!</button> */}
    </div>
}



const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App></App>)

