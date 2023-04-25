// Mui (Material-UI) là một thư viện UI (User Interface) phổ biến trong React, được xây dựng dựa trên nguyên tắc thiết kế Material Design của Google. Đây là một thư viện mạnh mẽ và đa dạng, cung cấp nhiều thành phần giao diện người dùng đẹp mắt và tương tác trong ứng dụng React.

// npm install @mui/material @emotion/react @emotion/styled framer-motion
// npm install @mui/icons-material

//Sau khi cài đặt thành công, bạn có thể nhúng Mui React vào dự án của mình. Bạn có thể import các thành phần Mui React vào tệp mã nguồn của bạn và sử dụng chúng trong các thành phần React của bạn. Ví dụ, import Button từ Mui React:
import React from 'react';
import Button from '@mui/material/Button';

const MyButton = () => {
  return (
    <Button variant="contained" color="primary">
      Click me
    </Button>
  );
}

export default MyButton;

//Ví dụ, dưới đây là một đoạn mã đơn giản sử dụng Button và TextField của Mui React:
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const MyForm = () => {
  return (
    <form>
      <TextField label="Username" />
      <TextField label="Password" type="password" />
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
}

export default MyForm;

//Tùy chỉnh giao diện với theme của Mui React
//Mui React cung cấp chức năng tùy chỉnh giao diện với theme của nó. Bạn có thể tạo ra một theme riêng cho ứng dụng của mình, định nghĩa các màu sắc, kiểu dáng, biến đổi và áp dụng chúng cho các thành phần Mui React. Để làm điều này, bạn cần sử dụng ThemeProvider và tạo một đối tượng theme của riêng bạn.

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// Tạo theme riêng
const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const MyForm = () => {
  return (
    // Áp dụng theme cho ứng dụng
    <ThemeProvider theme={theme}>
      <form>
        <TextField label="Username" />
        <TextField label="Password" type="password" />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </ThemeProvider>
  );
}

export default MyForm;

// Có thể truyền thẳng sự kiện vào trong mui component
import React from 'react';
import Button from '@mui/material/Button';

const MyButton = () => {
  const handleClick = () => {
    // Xử lý khi nút được click
    console.log('Button clicked');
  };

  return (
    <Button onClick={handleClick} variant="contained" color="primary">
      Click me
    </Button>
  );
};

export default MyButton;

//