import { useState } from "react";
function Header() {
    var myArr = [100,200,300,400]
  
    const [sum, setSum] = useState(()=>{
        var tong = 0
        for (let i = 0; i <myArr.length;i++){
        console.log("thực hiện việc tính tổng thứ ", i)
        tong = tong + myArr[i]
        }
        return tong
    })
    console.log("hello header")
    
    function handleClick(){
        setSum(sum+1)
    } 

    return ( <>
        <h1>{sum}</h1>
        <button onClick={handleClick}>click me</button>
    </> );
}

export default Header;