import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/context';
import axios from 'axios';
import { getAllPost } from '../../reducer/actions';
import Post from '../../Components/Post/Post';
import { Box, Button, CircularProgress, TextField } from '@mui/material';

function Home() {
    const { state, dispatch } = useContext(AppContext);
    const [postContent, setPostContent] = useState('');
    const [rerender, setRerender] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://whats-the-fox.onrender.com/api/v1/posts').then((res) => {
            dispatch(getAllPost(res.data.data.posts));
            setLoading(false);
        });
    }, [rerender]);
    const handleSendPost = async () => {
        setLoading(true);
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
                    setLoading(false);
                })
                .catch(() => {
                    alert('Đăng bài không thành công');
                    setLoading(false);
                });
        }
    };
    return (
        <>
            {state.user && (
                <Box sx={{ marginBottom: '1rem', marginTop: '2rem' }}>
                    <TextField
                        label="Viết bài..."
                        multiline
                        rows={4}
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSendPost}
                        sx={{ marginTop: '1rem' }}
                    >
                        Gửi
                    </Button>
                </Box>
            )}
            {loading && (
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ margin: '20px 0' }}></CircularProgress>
                </div>
            )}
            {state.posts.map((post) => (
                <Post key={post._id} post={post}></Post>
            ))}
        </>
    );
}

export default Home;
