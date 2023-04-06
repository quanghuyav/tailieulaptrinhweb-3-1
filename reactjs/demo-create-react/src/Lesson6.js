import { useEffect, useRef, useState } from "react";


function Lesson6() {
    // const [count,setCount] = useState(0)
    
    // useEffect(()=>{
    //     console.log("rerender")
    //     let timerID = setInterval(()=>{
    //         setCount(prev => prev+1)
    //         console.log(count)
    //     },1000)
    //     return ()=> clearInterval(timerID)
        
    // },[])

    // const [count,setCount] = useState(0)
    // const [toggle,setToggle] = useState(true)
 
    // let timerID = useRef()
    // let refElement = useRef()
    // console.log(refElement.current)

    // const handleCount = ()=> {

    //     if (toggle){
    //     timerID.current = setInterval(()=>{
    //         setCount (prev => prev+1)
    //     },1000)
    //     setToggle(false)
        
    // }
    // }

    // const handleStop =() =>{
    //     setToggle(true)
    //     clearInterval(timerID.current)

    // }


    
    // return ( <>
    // <h1 ref = {refElement}>{count} </h1>
    // <button onClick={handleCount}>Đếm</button> 
    //  <button onClick={handleStop}>Dừng</button>

    
    // </> );

    // const [mess,setMess] = useState()

    const mess = useRef()
    console.log("re-render")
    return (<>
        <input ref = {mess} ></input>
        <button onClick={()=>{
            console.log(mess.current.value)
        }}>Gửi</button>
    </>)
}

export default Lesson6;