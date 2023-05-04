import { useContext } from 'react';
import AppContext from '../../context/context';

function Home() {
    const { state, dispatch } = useContext(AppContext);
    console.log(state, dispatch);
    return <>Trang chủ</>;
}

export default Home;
