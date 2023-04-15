import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DefaultPage() {
    const navigate = useNavigate();
    console.log("defaultlPage")
    useEffect (()=> {
        const timerID= setTimeout(()=>{
            console.log("timeout")
            navigate("/news")
        },3000)
        return ()=> clearTimeout(timerID)
    },[])

    return ( <h1>
        Đường dẫn không tồn tại
    </h1> );
}

export default DefaultPage;