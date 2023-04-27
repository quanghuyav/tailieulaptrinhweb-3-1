import AppContext from "./AppContext.js";
import { useContext } from "react";
function Home() {
    console.log(useContext(AppContext))
    return ( <h1>Hi</h1> );
}

export default Home;