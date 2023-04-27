import {CREATE_ONE_POST,GET_CURRENT_USER,DELETE_ONE_POST,GET_ALL_POSTS,UPDATE_ONE_POST} from "./constants.js"

export const getCurrentUser = payload =>  ({type: GET_CURRENT_USER, payload})
export const createOnePost = payload =>  ({type: CREATE_ONE_POST, payload})
export const getAllPost = payload =>  ({type: GET_ALL_POSTS, payload})
export const updateOnePost = payload =>  ({type: UPDATE_ONE_POST, payload})
export const deleteOnePost = payload =>  ({type: DELETE_ONE_POST, payload})

