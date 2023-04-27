import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import { useEffect, useReducer } from 'react';
const itinialState = {
  user: null,
  posts: [],
}
function reducer(state,action) {
  switch(action.type){
    case "GET_CURRENT_USER":
      return {...state, user: action.payload}
    case "GET_ALL_POSTS": 
      return {...state, posts: action.payload}
    case "CREATE_ONE_POST":
      return {...state, posts: [action.payload,...state.posts]}
    case "UPDATE_ONE_POST":
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post._id === action.payload._id){
            return action.payload
          }
          return post
        })
      }
    case "DELETE_ONE_POST":
      return {
        ...state,
        posts: state.posts.filter(post => post._id!==action.payload._id)
      }
  }
}
function App() {
  const [state,dispatch] = useReducer(reducer,itinialState)
  console.log(state)
  useEffect(()=>{
    dispatch({type:"GET_ALL_POSTS", payload: [1,2,3,4]})
  },[])
  return (
    <BrowserRouter>
      <Routes>
        {
          publicRoutes.map((route,index) => (
            <Route
                key={index}
                path={route.path}
                element={<route.Component></route.Component>}
            ></Route>
        ))
       }  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
