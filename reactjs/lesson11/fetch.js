// Sử dụng fetch
/*
Hàm fetch trong JavaScript được sử dụng để gửi yêu cầu HTTP và nhận lại dữ liệu từ các nguồn khác nhau. Hàm fetch có thể nhận những tham số sau:

URL: Đây là địa chỉ URL của nguồn dữ liệu mà bạn muốn gửi yêu cầu. Đây là tham số bắt buộc và phải được cung cấp.

Options (tùy chọn): Đây là một đối tượng JavaScript chứa các cài đặt tùy chọn cho yêu cầu fetch, bao gồm các cài đặt như phương thức HTTP, tiêu đề (header), kiểu dữ liệu (content type), gửi dữ liệu (body), và nhiều tùy chọn khác. Đây là tham số không bắt buộc và có thể được bỏ qua nếu không cần thiết.

CORS (Cross-Origin Resource Sharing): Đây là một cơ chế an ninh trong trình duyệt ngăn chặn việc truy cập đến các nguồn dữ liệu từ các nguồn khác miền (origin). Nếu bạn muốn truy cập đến một nguồn dữ liệu từ miền khác, bạn cần cung cấp các tùy chọn để xác định quyền truy cập và chấp nhận CORS.

Sau đây là một ví dụ về cách sử dụng hàm fetch với URL và options:
*/

fetch('https://api.example.com/data', {
  method: 'GET', // Phương thức HTTP, ví dụ: GET, POST, PUT, DELETE
  headers: { // Tiêu đề (header) của yêu cầu
    'Content-Type': 'application/json', // Kiểu dữ liệu của dữ liệu gửi đi
    'Authorization': 'Bearer <access_token>', // Thêm tiêu đề Authorization nếu cần thiết
  },
  body: JSON.stringify(data), // Dữ liệu gửi đi, nếu cần thiết
  // mode: 'cors', // Cài đặt CORS, nếu cần thiết
})
.then(response =>  response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});



// Sử dụng async await

import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Hiển thị dữ liệu */}
    </div>
  );
};

export default MyComponent;

// Truyền parameters trong fetch
const queryParam1 = "value1"
const queryParam2 = "value2"


fetch(`https://api.example.com/data?param1=${queryParam1}&param2=${queryParam2}`)
.then(response => {
  // Xử lý kết quả
})
.catch(error => {
  console.error(error);
});