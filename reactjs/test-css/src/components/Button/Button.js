import { useEffect, useRef } from "react";
import styles from "./Button.module.css"
import clsx from "clsx";

function Button({type, disabled, onClick ,children="click me"}) {
    const classes = clsx (styles.button,styles[type],{[styles.disabled]:disabled} )
    var btnElement = useRef()
  
    console.log([btnElement.current])
    const handleClick = () => {
        onClick()
    }


    return ( <button disabled={disabled}  onClick={handleClick} className={classes}>{children}</button> );
}

export default Button;