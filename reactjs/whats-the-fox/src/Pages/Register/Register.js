import { useContext, useState } from 'react';
import axios from 'axios';
import AppContext from '../../context/context';
import { getCurrentUser } from '../../reducer/actions';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    const { dispatch } = useContext(AppContext);

    const handleRegister = async () => {
        const avatar = await axios.get('https://randomfox.ca/floof').then((res) => res.data.image);

        await axios
            .post('https://whats-the-fox.onrender.com/api/v1/auth/resigter', {
                name,
                email,
                password,
                avatar,
            })
            .then((res) => {
                dispatch(getCurrentUser(res.data.data));
                localStorage.setItem('token', res.data.data.token);
                navigate('/');
            })
            .catch(() => {
                alert('Đăng ký thất bại');
            });
    };

    return (
        <>
            <h1>Đăng ký</h1>
            <input
                onChange={(e) => setName(e.target.value)}
                placeholder="Họ và tên"
                style={{ display: 'block' }}
            ></input>
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
            <button onClick={handleRegister}>Đăng ký</button>
        </>
    );
}

export default Register;
