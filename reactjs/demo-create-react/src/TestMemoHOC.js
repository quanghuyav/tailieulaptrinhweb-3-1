import { memo, useState } from "react";

function TestMemoHOC() {
    const [count,setCount] = useState(0)
    console.log("test memo hoc")
    
    return (<>
     <h1>test memo hoc</h1> 
     <h1>Lesson7 - HOC : </h1>
     <h1 onClick={()=>setCount(count+1)}> HOC: {count}</h1>
    </>);
}

export default memo(TestMemoHOC);