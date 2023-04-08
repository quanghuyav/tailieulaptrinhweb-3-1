import Game from "./Game";
import { useState } from "react";
import Lesson5 from "./Lesson5";
import Lesson6 from "./Lesson6";
import Lesson7 from "./Lesson7";
function App() {
  const [toggle,setToggle] = useState(true)
  return (<>
      {/* LESSON5
      <button onClick={()=> setToggle(!toggle)}>Mount</button>
      {
      toggle && <Lesson5></Lesson5>
      } */}
      {/* <Game></Game> */}
    
     {/* LESSON6 */}
     
     {/* <button onClick={()=> setToggle(!toggle)}>Mount</button> */}
     {/* {toggle &&<Lesson6></Lesson6>} */}

     {/* LESSon 7 */}
     <Lesson7></Lesson7>
    </>


  );
}

export default App;
