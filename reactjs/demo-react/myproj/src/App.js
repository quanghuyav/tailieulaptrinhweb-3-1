import { useState } from "react";
function App() {
  var d = new Date()
  const [time,setTime] = useState(d.getSeconds())
  setInterval(()=>setTime(d.getSeconds()),100)
  return (<>
    <h1>{time}</h1>
    </>
  );
}

export default App;
