import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import DefaultPage from '../Pages/DefaultPage/DefaultPage';

export const publicRoutes = [
    { path: '/', Component: Home },
    { path: '*', Component: DefaultPage },
];

export const authRoutes = [
    { path: '/login', Component: Login },
    { path: '/register', Component: Register },
];
