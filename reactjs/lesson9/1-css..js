// Sử dụng css:
// C1: css inline thông qua style = {{}}
// C2: Tạo 1 file css trong thư mục src, sau đó import vào component
import "style.css"
// Dù import vào trong component nào thì css cũng sẽ áp dụng cho tất cả các component
// Có thể import nhiều file css
// Trong quá trình development, mỗi file css được import sẽ được viết thành các đoạn css internal ở trong thẻ head
// Khi built ra sản phẩm thì css sẽ được tổng hợp vào 1 file css chung 
// Vì vậy bất kể được import ở đâu thì cũng sẽ vào 1 file css, tuy nhiên chúng ta vẫn nên tạo file css riêng theo từng component và import vào component đó, mục đích để khi xoá component đó đi cũng sẽ xoá luôn phần css của component đó, tránh dư thừa