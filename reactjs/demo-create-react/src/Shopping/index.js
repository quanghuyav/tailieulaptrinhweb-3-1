import { useReducer, useState } from "react";
import "./style.css"

const initialState = {
    name:"",
    price: 0,
    listItems: [],
    total: 0
}
// Cách hành động
// Thay đổi name: set-name
const SET_NAME = "set-name"
const SET_PRICE = "set-price"
const ADD_ITEM = "add-item"
const DELETE_ITEM = "delete-item"
const SET_TOTAL = "set-total"
function setName(payload){
    return {
        type: SET_NAME,
        payload
    }
}
function setPrice(payload){
    return {
        type: SET_PRICE,
        payload
    }
}function addItem(payload){
    return {
        type: ADD_ITEM,
        payload
    }
}function deleteItem(payload){
    return {
        type: DELETE_ITEM,
        payload
    }
}function setTotal(payload){
    return {
        type: SET_TOTAL,
        payload
    }
}

// reducer
function reducer(state,action){
    if (action.type == "set-name"){
        return {
            ...state,
            name: action.payload
        }
    }
    if (action.type == "set-price"){
        return {
            ...state,
            price: action.payload
        }
    }
    if (action.type == "add-item"){
        return {
            ...state,
            listItems: [...state.listItems,action.payload]
        }
    }
    if (action.type == "set-total"){
        return {
            ...state,
            total: state.total + action.payload
        }
    }
    if (action.type == "delete-item"){
        const myArr = [...state.listItems]
        const deleteItem = myArr.splice(action.payload,1)
        return {
            ...state,
            listItems: myArr,
            total: state.total - deleteItem[0].price
        }
    }


}


function Shopping() {
   
    const [state,dispatch] = useReducer(reducer,initialState)
    const handleDelete = (e) =>{
        dispatch(deleteItem(e.target.id))
    }
    
    return ( <>
        <h1>Shopping</h1>
        <input placeholder="Nhập tên sản phẩm..." onChange={(e)=>{
            dispatch(setName(e.target.value))

        }}></input>
        <input type="number" min={1} placeholder="Nhập giá sản phẩm..." onChange={(e)=>{
            dispatch(setPrice(e.target.value-0))

        }}></input>
        <button onClick={()=>{
            dispatch(addItem({name:state.name,price:state.price}))
            dispatch(setTotal(state.price))

        }}>Thêm sản phẩm</button>
        <ul>
            {
                state.listItems.map(function(item,index){
                    return <div key={index}>
                        <li style={{display:"inline-block"}}>{item.name}: {item.price}</li> 
                        <button id={index} onClick ={handleDelete}>&times;</button>
                    </div>
                })
            }
        </ul>
        <h3>Tổng: {state.total}</h3>

    </> );
}

export default Shopping;