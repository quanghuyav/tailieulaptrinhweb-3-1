import { useContext, useEffect } from 'react';
import AppContext from '../../context/context';
import axios from 'axios';
import { getAllPost } from '../../reducer/actions';

function Home() {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        axios.get('https://whats-the-fox.onrender.com/api/v1/posts').then((res) => {
            dispatch(getAllPost(res.data.data.posts));
        });
    }, []);

    return (
        <>
            {state.posts.map((post) => (
                <div>{post.content}</div>
            ))}
        </>
    );
}

export default Home;
