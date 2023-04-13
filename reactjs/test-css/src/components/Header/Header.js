import { useState } from "react";
import styles from "./Header.module.css"
import clsx from "clsx";

function Header() {
    const [isDark, setIsDark] = useState(false)

    const classes = clsx (styles.header)
    console.log(styles)

    return ( <>
        <h1 className={classes}>Header</h1>
        <button onClick={()=> setIsDark(!isDark)}>Click me</button>
    </> ); 
}

export default Header;