import Game from "./Game";
import Header from "./Header";
import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(true)
  return (<>
  <button onClick={()=> setToggle(!toggle)}>Mount</button>
  {
    toggle && <Header></Header>
  }
    </>
    // <Game></Game>
  );
}

export default App;
