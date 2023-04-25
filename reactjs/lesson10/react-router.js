// React Router là một thư viện phổ biến được sử dụng để quản lý các đường dẫn trong ứng dụng React. Nó cho phép bạn tạo các đường dẫn động và điều hướng giữa các trang của ứng dụng một cách trơn tru và mượt mà.
// npm install react-router-dom

/** 1. Router
 * React Router cung cấp một thành phần Router để bao bọc toàn bộ ứng dụng. Thông thường, bạn sẽ sử dụng BrowserRouter, nó sử dụng HTML5 History API để đồng bộ hóa URL với trạng thái ứng dụng. Để sử dụng BrowserRouter, hãy import nó từ react-router-dom và bọc các thành phần của ứng dụng của bạn trong đó:
*/
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      // các thành phần của ứng dụng
    </BrowserRouter>
  );
}
/** 2. Route - Routes
 * Route là thành phần chính trong React Router, nó dùng để khai báo các đường dẫn và trang tương ứng. Các đường dẫn được khai báo trong thuộc tính path và trang tương ứng được khai báo trong thuộc tính element. Khi người dùng truy cập vào một đường dẫn khớp với path, React Router sẽ hiển thị trang được khai báo trong component.
 * Các Route được đặt bên trong component cha  Routes
 */
<BrowserRouter>
<Routes>
    <Route path="/"  element={<Home></Home>} />  {/** Trỏ đến component Home */}
    <Route path="/news"  element={<News></News>} />  {/** Trỏ đến component News */}
    <Route path="*" element={<DefaultPage></DefaultPage>} /> {/** Default Route */}
</Routes>
</BrowserRouter>
// Router sẽ đọc các đường dẫn từ trên xuống, khi path truyền vào Route trùng với path gõ trên trình duyệt thì sẽ trả về element tương ứng. Vì vậy nếu để 2 Route có chung Path thì path được đặt bên trên sẽ được trỏ tới. Nếu không có path nào được trỏ tới sẽ nhảy về route default
// Chúng ta có thể tạo nhiều path cùng trỏ tới 1 component. Ví dụ path "/" và "/home" đều trỏ đến Home ...


/** 3. Link
 *  Thay vì sử dụng thẻ a để truyền link <a href = "url...">: vẫn truyền được nhưng sẽ gây load lại trang
 *  Ta sử dụng component Link để truyền các đường dẫn trong trang web (nghĩa là nếu truyền vào 1 đường dẫn bên ngoài thì vẫn dùng thẻ a): Cách này sẽ không gây load lại trang
 *  <Link to = "/path">
 */