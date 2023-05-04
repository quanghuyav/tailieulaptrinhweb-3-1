import { Link } from 'react-router-dom';
import AppContext from '../../context/context';
import { useContext } from 'react';
import { getCurrentUser } from '../../reducer/actions';

function Header({ children }) {
    const { state, dispatch } = useContext(AppContext);

    const handleLogout = () => {
        dispatch(getCurrentUser(null));
        localStorage.clear('token');
    };

    return (
        <>
            <div style={{ backgroundColor: '#ccc', height: 50 }}>
                <Link
                    style={{
                        backgroundColor: 'red',
                        height: 50,
                        display: 'inline-block',
                        border: '1px solid #ccc',
                    }}
                    to="/"
                >
                    Trang chủ
                </Link>
                <Link
                    style={{
                        backgroundColor: 'red',
                        height: 50,
                        display: 'inline-block',
                        border: '1px solid #ccc',
                    }}
                    to="/login"
                >
                    Đăng nhập
                </Link>
                <Link
                    style={{
                        backgroundColor: 'red',
                        height: 50,
                        display: 'inline-block',
                        border: '1px solid #ccc',
                    }}
                    to="/register"
                >
                    Đăng ký
                </Link>
            </div>
            {state.user && (
                <div>
                    <span>Xin chào {state.user.name}</span>
                    <button onClick={handleLogout}>Đăng xuất</button>
                </div>
            )}

            <div>{children}</div>
        </>
    );
}

export default Header;
