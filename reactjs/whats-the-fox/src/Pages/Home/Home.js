import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/context';
import axios from 'axios';
import { getAllPost } from '../../reducer/actions';
import Post from '../../Components/Post/Post';

function Home() {
    const { state, dispatch } = useContext(AppContext);
    const [postContent, setPostContent] = useState('');
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        axios.get('https://whats-the-fox.onrender.com/api/v1/posts').then((res) => {
            dispatch(getAllPost(res.data.data.posts));
        });
    }, [rerender]);
    const handleSendPost = async () => {
        if (postContent) {
            const token = localStorage.getItem('token');
            await axios
                .post(
                    'https://whats-the-fox.onrender.com/api/v1/posts',
                    {
                        content: postContent,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                )
                .then(() => {
                    setRerender(!rerender);
                    setPostContent('');
                })
                .catch(() => alert('Đăng bài không thành công'));
        }
    };
    return (
        <>
            {state.user && (
                <div>
                    <input
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    ></input>
                    <button onClick={handleSendPost}>Gửi</button>
                </div>
            )}
            {state.posts.map((post) => (
                <Post key={post._id} post={post}></Post>
            ))}
        </>
    );
}

export default Home;
