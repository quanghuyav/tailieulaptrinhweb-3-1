// context - useContext : dùng để truyền dữ liệu giữa các component 1 cách trơn tru
// Ở component cha muốn truyền dữ liệu, tạo 1 biến context và export ra
export const myContext = createContext()
// ở phần return sẽ return ra myContext.Provider
return <myContext.Provider value = {/** Những thứ muốn truyền đi */}><App></App></myContext.Provider>


import { useContext } from "react"
// Ở component muốn nhận dữ liệu
// Phải import context của componen truyền dữ liệu
import {myContext} from "./..."
const x = useContext(myContext) // lúc này useContext sẽ trả về giá trị đã nhận khi truyền qua value