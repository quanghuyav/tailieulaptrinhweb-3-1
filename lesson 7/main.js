/** GET ELEMENT METHOD
 */
// 1. Thông qua method getElement
document.getElementById('heading')  //trả về 1 element có ID là 'heading', ID là duy nhất, nếu cố tình đặt nhiều element có cùng ID thì phương thức này sẽ trả về element đầu tiên
document.getElementsByClassName('heading') // Trả về một mảng gồm các element có class là 'heading', bởi vì class có thể đặt trùng nhau
document.getElementsByTagName('h1') // trả về một mảng gồm các element có tag là h1

// Chú ý: getElementByID chữ "element" là số ít, còn trong 2 cái get còn lại chữ "elements" là số nhiều

// 2. Thông qua selector: querySelector. 
// Chú ý: Học kĩ về selector trong css
document.querySelector('.main .header') // trả về element ĐẦU TIÊN có selector là '.main .header'. Kể cả có nhiều element có cùng selector cũng sẽ trả về element đầu tiên
document.querySelectorAll('.main .header') // trả về 1 mảng (thực ra là 1 nodelist nhưng tạm thời mình cứ coi nó là 1 mảng) gồm tất cả các element có selector '.main .header' 

// 3. Sử dụng HTML collection(ít được sử dụng, có thể tự tìm hiểu)

// Chú ý, mỗi element là một đối tượng, trong đối tượng đó cũng có những phương thức tương tự đối tượng document. Vì vậy khi lấy ra 1 element từ đối tượng document, chúng ta có thể sử dụng các phương thức như getElement, querry để lấy những element nằm trong element đó
// Chỉ có getElementById và querySelector trả về trực tiếp element, còn lại là trả về 1 mảng gồm một hoặc nhiều element

/** TƯƠNG TÁC VỚI ATTRIBUTE
 * b1: Lấy ra element chứa attribute đó, nên lưu element vào 1 biến để dễ sử dụng
 * b2: Mỗi attribute tương tự như 1 thuộc tính của đối tượng element được lấy ra, ta có thể tương tác với nó bằng cách làm việc với object đã học từ những bài trước
 */

// Thêm, sửa attribute
var headingElement = document.querySelector('.heading')
headingElement.title = "heading"
headingElement.className = "heading"

// Có thể tương tác với attribute thông qua việc gán trực tiếp với thuộc tính như cách trên, hoặc có thể sử dụng phương thức của element đó với setAtribute
headingElement.setAttribute('title','heading-title') // tham số thứ nhất: tên attribute, tham số thứ 2 là giá trị


// Lấy ra giá trị attribute
// Tương tự với thêm, sửa, ta có thể lấy ra giá trị attribute theo 2 cách: gọi thuộc tính hoặc sử dụng phương thức getAttribute
headingElement.getAttribute('class')
// chú ý: khi sử dụng thuộc tính, attribute 'class' sẽ phải thay bằng className, còn khi dùng phương thức thì không cần
// chú ý 2: Đối với những attribute tự định nghĩa, hoặc những attribute không phù hợp với element (ví dụ href không thể có trong thẻ h1) thì chúng ta vẫn có thể trỏ tới nó, nhưng phải sử dụng phương thức, không được sử dụng thuộc tính
// Khi làm việc với class, để thêm 1 hoặc nhiều class (ví dụ class đang là heading, muốn thêm 1 class nữa tên là heading2) thì phải đi qua đối tượng classList
headingElement.classList.add('heading2','heading3','heading4')
headingElement.classList.remove('heading','heading3')

/** TƯƠNG TÁC VỚI TEXT
 * b1: Lấy ra được element chứa text
 * b2: Tương tác thông qua các phương thức và thuộc tính
 */
// Sử dụng innerText
console.log(headingElement.innerText) // in ra giá trị của text
headingElement.innerText = 'new heading' // thay đổi text
// Tương tực với textContent
console.log(headingElement.textContent) // in ra giá trị của text
headingElement.textContent = 'new heading' // thay đổi text
// Sự khác nhau của innerText và textContent
// innerText trả về giá trị text mình nhìn thấy trên trình duyệt
// textContent trả về giá trị text trong html sau khi bỏ qua các tag
headingElement.textContent = '<i>new heading<i>' // sẽ đổi text thành <i>new heading<i> chứ không phải là text new heading có kiểu chữ nghiêng

/** THÊM ELEMENT với innerHTML và outerHTML
 */
headingElement.innerHTML('<h1 title = "heading">Hello</h1>') // tham số là string chứa mã html
// inner sẽ trỏ đến element con của element được gọi tới, outer sẽ trỏ đến chính nó