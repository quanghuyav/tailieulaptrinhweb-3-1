import { useContext } from "react";
import { nameContext } from "../Lesson8";


function Title() {
    const count = useContext(nameContext)
    return ( <h1>{count}</h1> );
}

export default Title;