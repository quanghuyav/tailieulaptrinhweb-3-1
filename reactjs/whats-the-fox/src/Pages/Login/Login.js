import { useContext, useState } from 'react';
import axios from 'axios';
import AppContext from '../../context/context';
import { getCurrentUser } from '../../reducer/actions';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { state, dispatch } = useContext(AppContext);
    const navigate = useNavigate();
    const handleLogin = async () => {
        await axios
            .post('https://whats-the-fox.onrender.com/api/v1/auth/login', {
                email,
                password,
            })
            .then((res) => {
                dispatch(getCurrentUser(res.data.data));
                localStorage.setItem('token', res.data.data.token);
                navigate('/');
            })
            .catch(() => alert('đăng nhập thất bại'));
    };

    return (
        <>
            <h1>Đăng nhập</h1>
            <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                style={{ display: 'block' }}
            ></input>
            <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                style={{ display: 'block' }}
            ></input>
            <button onClick={handleLogin}>Đăng nhập</button>
        </>
    );
}

export default Login;
