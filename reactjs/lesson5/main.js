// Hướng dẫn sử dụng useState() làm trò chơi kéo-búa-bao
// Làm việc với form
// chú ý:   setState > re render > thay đổi giá trị biến state

// mount và unmount
// useEffect(callback,deps) //
// Tham số thứ nhất là 1 callback
// Tham số thứ 2 là 1 mảng (có thể ko truyền vào)
// Luoon được gọi sau khi component được render lần 1
// Mỗi lần mount sẽ được tính là render lần 1
// TH1: Không truyền, callback sẽ được gọi mỗi lần render
// TH2: Truyền mảng rỗng, callback gọi 1 lần duy nhất
// TH3: Mảng chứa phần tử, callback gọi mỗi khi phần tử trong mảng thay đổi giá trị
// callback nếu được gọi thì sẽ là gọi sau khi render

// Sử dụng useEffect để làm việc với event DOM
useEffect(()=>{
    const handleScroll = ()=>{
        console.log(window.scrollY)
    }
    window.addEventListener('scroll',handleScroll)
},[])

// cleanup function
// callback trong useEffect() có thể return ra 1 function, function này sẽ được gọi trc khi component bị unmount và thường được dùng để loại bỏ những event sau khi component bị unmount, tránh tình trạng rò rỉ bộ nhớ