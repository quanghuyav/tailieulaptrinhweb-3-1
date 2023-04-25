import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import { publicRoutes, adminRoutes, userRoutes } from './routes/routes';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f44336',
        },
        error: {
            main: '#3f51b5',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

function App() {
    const [user, setUser] = useState();

    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <h1>Trạng thái: {user}</h1>
                    <button onClick={() => setUser()}>Chưa đăng nhâp</button>
                    <button onClick={() => setUser('user')}>Người dùng</button>
                    <button onClick={() => setUser('admin')}>Admin</button>

                    <Link to="/">Trang chủ</Link>
                    <Link to="/news">Tin tức</Link>
                    <Link to="/courses">Khoá học</Link>
                    <Link to="/admin">Admin</Link>

                    <Routes>
                        {adminRoutes.map(function (route, index) {
                            if (user == 'admin')
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={<route.Component></route.Component>}
                                    ></Route>
                                );
                        })}
                        {userRoutes.map(function (route, index) {
                            if (user == 'user')
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={<route.Component></route.Component>}
                                    ></Route>
                                );
                        })}
                        {publicRoutes.map(function (route, index) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<route.Component></route.Component>}
                                ></Route>
                            );
                        })}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
