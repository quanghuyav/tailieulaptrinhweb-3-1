import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DefaultPage() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }, []);
    return <h1>Lỗi không thấy trang</h1>;
}

export default DefaultPage;
