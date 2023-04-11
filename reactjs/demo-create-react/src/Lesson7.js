import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import TestMemoHOC from "./TestMemoHOC";

function Lesson7() {
    // const [total,setTotal] = useState(0)
    // const [cost,setCost] = useState(0)
    // const [name,setName] = useState('')
    // const [arrCost, setArrCost] = useState ([])
    
    // const handleClick = () =>{
    //     setArrCost([...arrCost,cost])
    // }
    
    // let sum =  useMemo(()=>{
    //     let x = 0
    //     for (let i = 0; i<arrCost.length;i++ ){
    //         x = x + arrCost[i]
    //     }
    //     console.log("Thực hiện tính tổng")
    //     return x
    // },[a,b,c])

    // const myArr = [2,4,2,5,2,4,6,2,7]
    
    // const initState = useMemo(()=>{
    //     let sum = 0
    //     for(let i = 0 ; i<myArr.length;i++){
    //         sum = sum+myArr[i]
    //         console.log("thực hiện tính toán")
    //     }
    //     return sum
    // },[])

    // const [count1,setCount1] = useState(0)
    // const [count2,setCount2] = useState(0)



    // console.log("lesson7")
    // const lesson7Callback = useCallback( ()=>{
    //     console.log("hello")
    // }, [count1])
    const [count,setCount] = useState(0)
    useEffect(()=>{
       setCount(1)
    },[])
    console.log("render")
    return ( <>   
        <h1 >{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
 
    {/* <h1 onClick={()=>setCount1(count1+1)}> Lesson7 count 1: {count1}</h1>
    <h1 onClick={()=>setCount2(count2+1)}> Lesson7 count 2: {count2}</h1>

    <TestMemoHOC callback = {lesson7Callback}></TestMemoHOC> */}
    </> );
}

export default Lesson7;

