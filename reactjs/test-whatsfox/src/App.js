import {useEffect, useReducer } from "react";
import AppReducer from "./reducers/AppReducer";
import { itinialState } from "./reducers/AppReducer";
import {getCurrentUser,getAllPost,updateOnePost,createOnePost,deleteOnePost} from "./reducers/actions.js"
import Home from "./Home";
import AppContext from "./AppContext.js";

function App() {
  const [state,dispatch] = useReducer(AppReducer,itinialState)
  useEffect(()=>{
    dispatch(getCurrentUser({name:"huy"}))
  },[])
  console.log(state)
  
  return (
    <AppContext.Provider value={{state,dispatch}}>
      <Home></Home>  
    </AppContext.Provider>
  );
}

export default App;
