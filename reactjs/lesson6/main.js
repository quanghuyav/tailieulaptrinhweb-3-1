// Sử dụng setInterval, setTimeout
// nếu sử dụng trực tiếp trong component, mỗi khi render lại sẽ tạo ra 1 setInterval, setTimeout mới
function Test() {
    [count,setCount] = useState(0)
    setInterval(()=>{
        setCount(count+1)
    },1000)
    return ( <></> );
}
export default Test;
//Trong trường hợp này, mỗi khi setCount được gọi, component Test sẽ bị render lại, và sẽ sinh ra thêm 1 setInterval nữa (giống với khi làm việc với event)

// Vì vậy cần kết hợp sử dụng với useEffect

useEffect(()=>{
    setInterval(()=>{
        setCount(count+1)
    },1000)
},[]) // truyền tham số thứ 2 là mảng rỗng để chỉ render ra 1 lần duy nhất
// Tuy nhiên trong trường hợp này count sẽ dừng ở giá trị 1, bởi vì callback trong useEffect chỉ đc gọi 1 lần duy nhất, lúc đó biến count đang bằng 0, nên dù setInterval có chạy bao nhiêu lần thì cũng là đang chạy trong phạm vi của callback truyền vào useEffect, nên luôn nhận biến count ban đầu có giá trị là 0, và sau khi setCount thì count sẽ tăng lên thành 1.
// Để xử lí, ta có thể truyền callback vào cho setCount(prevState => prevState+1)
// Cách 2: dùng setTimeout và truyền vào mảng của useEffect biến count
useEffect(()=>{
    setTimeout(()=>{
        setCount(count+1)
    },1000)
},[count])
// mỗi lần count thay đổi, useEffect sẽ được gọi lại, và setTimeout cũng sẽ đc gọi lại, vì setTimeout chỉ chạy 1 lần nên hiệu quả tương tự

// sử dụng cleanup function
// Đặt biến 
const timeID = setInterval(...)

// trong useEffect sử dụng cleanup
return ()=> clearInterval(timeID) // cần tạo biến timeID để trỏ tới setInterval, nếu không thì sẽ không thể biết cần clearInterval nào (giống remove event)

// useRef() 
// Dùng khi muốn tạo 1 biến không bị khởi tạo lại mỗi lần re-render
// useRef trả về 1 đối tượng có thuộc tính là current
const myNumber = useRef(0) // myNumber = {current:0}
// đối tượng này sẽ không bị khởi tạo lại khi component render
// ta có thể truy cập thông qua myNumber.curent

// useRef cũng có thể để lấy element trong DOM

const refElement = useRef()
// Sau đó ở 1 element nào đó, thêm atribute ref = {refElement}