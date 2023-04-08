// nói lại về useEffect khi dùng clean up
// useLayoutEffect : gần tương tự useeffect
// khác thứ tự thực hiện
// useEffect: sau khi state thay đổi > render component > đây giao diện ra dom > cleanup trong useEffect > thực hiện callback
// useLayout: sau khi state thay đổi > render component > cleanup > callback >  đẩy giao diện

// React.memo: là 1 higher order component (HOC), dùng bao ngoài 1 component 
// vd: export default memo(Header);
// memo tránh việc render component 1 cách không cần thiết
// Ta có component cha (vd: App) , ở trong component cha có sử dụng các component con (vd: Header)
// Theo logic thông thường : Khi 1 state ở App thay đổi dẫn đến App bị render >> Header cũng bị render theo
// Tuy nhiên state ấy chỉ của riêng App, không liên quan đến Header (có nghĩa là Header không thay đổi gì sau khi render) thì việc render cả Header là thừa
// Khi bọc Header vào trong memo(Header) >> khi app render lại nó sẽ kiểm tra Header, nếu props truyền vào Header có sự thay đổi (sử dụng ===) >> render lại Header, nếu không thì ko render lại

// useCallback(), dùng kết hợp với memo
// Khi thẻ con nhận 1 prop là callback như ở bên dưới

function App(){
    const handleIncrease = ()=> {
        console.log("đang tăng")
    }
    return <Header onIncrease = {handleIncrease}></Header>
}
// Trong trường hợp này, mỗi khi App được re-render, thì Header cũng sẽ re-render kể cả đã sử dụng memo
// Bởi vì mỗi lần re-render, handleIncrease sẽ được nhận vào là 1 hàm mới (mặc dù về mặt kí tự như nhau)
// Nên khi so sánh (===) sẽ thấy props onIncerease có sự thay đổi, nên render lại
// Để xử lí trường hợp này ta sử dụng useCallback

const handleIncrease = useCallback(()=>{
    console.log("đang tăng")
},[])

// useCallback nhận tham số thứ nhất là 1 callback
// useCallback sẽ lưu tham chiếu đến cái callback ban đầu truyền vào, nên khi render lại, nó vẫn trả về cho handleIncrease cái hàm cũ, nói cách khác là nó không gọi lại lệnh tạo hàm khi rerender
// Tham số thứ 2 là 1 mảng, dùng tương tự như useEffect
// Nếu không truyền vào cái gì: mỗi lần render lại se tạo ra hàm mới, như là không dùng useCallback
// Truyền vào mảng rỗng: tạo hàm một lần duy nhất
// Truyền vào phần tử: mỗi lần phần tử thay đổi sẽ tạo hàm mới

// useMemo(): giúp khi re-render không tính toán lại từ đầu
// ví dụ trong component có đoạn tính toán 
const result = sum(a,b) // giả sử sum() là 1 hàm dùng để tính tổng
// Mỗi lần component re-render đều sẽ thực hiện tính lại result, trong khi chỉ lúc a và b thay đổi mới cần tính lại . Vì vậy ta có thể sử dụng useMemo()
const result1 = useMemo(() => sum(a, b), [a, b]);
// useMemo nhận tham số thứ nhất là 1 callback, giá trị trả về của useMemo là giá trị trả về của callback
// tham số thứ 2 là 1 mảng, khi phần tử trong mảng thay đổi sẽ tính toán lại và trả về giá trị mới, còn không thì thôi

// Component 

/**TỔNG HỢP CÁC HOOK ĐÃ HỌC
 * - const [state,setState] = useState()
 *      + mỗi khi gọi setState để state thay đổi, thì render lại component để cập nhật lại giao diện
 *      + setState() > Thực hiện xong cái function chứa cái setState > render lại giao diện với giá trị state mới > cập nhật biến state 
 * 
 * - const x = useRef(initValue)
 *      + trả về 1 đối tượng có thuộc tính current = initValue
 *      + Đối tượng này khôgn bị tạo lại khi render lại component
 *      + Dùng để lưu những biến không muốn bị khởi tạo lại khi render lại
 *      + Chú ý là dùng qua thuộc tính current: x.current
 * 
 * - useEffect(callback,[mảng])
 *      + Thực hiện callback mỗi khi phần tử trong mảng thay đổi
 *      + Trong callback có thể return ra cleanup function
 *      + Thực hiện code trước render >> đẩy ra giao diện DOM >> Thực hiện cleanup function >> thực hiện callback truyền vào useEffect
 *
 *  - useLayoutEffect (callback,[mảng])
 *      + Thực hiện callback mỗi khi phần tử trong mảng thay đổi
 *      + Trong callback có thể return ra cleanup function
 *      + Thực hiện code trước render, Thực hiện cleanup function ,thực hiện callback truyền vào useEffect >> đẩy ra giao diện DOM 
 *
 *  - const x = useMemo(callback, [mảng])
 *      + Thực hiện callback mỗi khi phần tử trong mảng thay đổi
 *      + Callback return ra một giá trị, useMemo sẽ trả về giá trị đó
 *      + Dùng để tránh việc thực hiện tính toán lại không cần thiết
 * 
 *  - HOC memo
 *      + Dùng để bọc component con: export default memo(<Header></Header>)
 *      + Khi component cha bị re-render, nếu những props truyền vào component không bị thay đổi, thì sẽ không re-render lại component con
 *      + Trong trường hợp props truyền vào là 1 callback, thì mỗi lần component cha render lại sẽ khiến callback bị tạo mới >> component con vẫn bị re-render >> cần dùng useCallback()
 *  - const myCallback = useCallback(callback, [mảng])
 *      + KHÔNG THỰC HIỆN CALLBACK 
 *      + Trả về callback truyền vào trong lần đầu
 *      + Mỗi khi phần tử trong mảng thay đổi, sẽ trả về một callback mới
 */


