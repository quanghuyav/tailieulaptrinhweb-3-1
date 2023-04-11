import { createContext, useLayoutEffect, useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./component/Header";

export const nameContext = createContext()

// State khởi tạo
const initialState = 0

// Những hành động vào state mà mình muốn thực hiện , và đặt tên cho nó
const INCREASE = "increase"
const DECREASE = "decrease"


function reducer(state,action){
    if (action == "increase"){
        return state + 1
    }
    if (action == "decrease"){
        return state - 1
    }
    return state
}

function Lesson8() {

    const [state, dispatch] = useReducer(reducer,initialState)

    const handleIncrease = () => {
      dispatch(INCREASE)
    }
    const handleDecrease = () => {
       dispatch(DECREASE)
    }
    
    return ( 
        <>
            <h1>{state}</h1>
            <button onClick={handleIncrease}>Tăng</button>
            <button onClick={handleDecrease}>Giảm</button>
        </>
   );
}

export default Lesson8;