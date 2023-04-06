import Game from "./Game";
import { useState } from "react";
import Lesson5 from "./Lesson5";
import Lesson6 from "./Lesson6";
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
     {toggle &&<Lesson6></Lesson6>}
    </>


  );
}

export default App;
