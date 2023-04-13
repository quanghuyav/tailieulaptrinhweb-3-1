import style from "./Content.module.scss"
import Button from "../Button/Button";
function Content() {
    return ( <>
    <div className={style.container}>
    <h1 className={`${style.content} ${style.title} df mg8 pd16`}>Content</h1>
    <Button onClick = {()=>{console.log("primary")}} type = "primary" >primary</Button>
    <Button onClick = {()=>{console.log("success")}} type = "success" disabled>success</Button>
    <Button onClick = {()=>{console.log("error")}} type = "error">error</Button>

    </div>
    <div className={style.container1}>
    <h1 className={`${style.content} ${style.title} df mg8 pd16`}>Content</h1>
    <Button onClick = {()=>{console.log("primary")}} type = "primary" >primary</Button>
    <Button onClick = {()=>{console.log("success")}} type = "success" disabled>success</Button>
    <Button onClick = {()=>{console.log("error")}} type = "error">error</Button>

    </div>
    </> );
}

export default Content;