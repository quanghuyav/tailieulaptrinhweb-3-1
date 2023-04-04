import { useEffect } from "react";
import { useState } from "react";


function Header() {
  const [toggle, setToggle] = useState(true)
  const x=3

    useEffect (()=>{
        console.log("gọi lại useeff")
        const handleScroll = ()=>{
            console.log(window.scrollY)
        }
        window.addEventListener('scroll',handleScroll)

        return ()=> {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    
    // 1s
    return ( 
        <div style={{height: 3000}}>
          <button onClick={()=> setToggle(!toggle)}>Render</button>

        {toggle && <h1>Hello </h1>}
        </div>
     );
}

export default Header;