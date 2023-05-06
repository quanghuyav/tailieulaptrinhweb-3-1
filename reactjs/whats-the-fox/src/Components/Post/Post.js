import { useContext, useMemo, useState } from 'react';
import AppContext from '../../context/context';
import axios from 'axios';
import { deleteOnePost, updateOnePost } from '../../reducer/actions';

function Post({ post }) {
    const { state, dispatch } = useContext(AppContext);
    const [openEditBox, setOpenEditBox] = useState(false);
    const [editContent, setEditContent] = useState('');

    const date = useMemo(() => {
        return new Date(post.createdAt);
    });

    const handleDelete = async () => {
        const token = localStorage.getItem('token');
        await axios
            .delete(`https://whats-the-fox.onrender.com/api/v1/posts/${post._id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => {
                dispatch(deleteOnePost(post));
            })
            .catch(() => alert('Xoá không thành công'));
    };

    const handleEdit = async () => {
        if (editContent) {
            const token = localStorage.getItem('token');
            await axios
                .put(
                    `https://whats-the-fox.onrender.com/api/v1/posts/${post._id}`,
                    {
                        content: editContent,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                )
                .then((res) => {
                    setOpenEditBox(!openEditBox);
                    dispatch(updateOnePost(res.data.data.post));
                    setEditContent('');
                })
                .catch(() => alert('Chỉnh sửa không thành công'));
        }
    };

    return (
        <div style={{ border: '1px solid red', margin: 20 }}>
            <div>
                <img style={{ width: '30px' }} src={post.author.avatar}></img>
                {state.user && state.user.userName == post.author.email && (
                    <>
                        <button onClick={() => setOpenEditBox(!openEditBox)}>Sửa</button>
                        <button onClick={handleDelete}>Xoá</button>
                        {openEditBox && (
                            <div>
                                <input onChange={(e) => setEditContent(e.target.value)}></input>
                                <button onClick={handleEdit}>OK</button>
                            </div>
                        )}
                    </>
                )}

                <h3 style={{ margin: 0, padding: 0 }}>{post.author.name}</h3>
                <div>
                    {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()} {date.getHours()}:
                    {date.getMinutes()}
                </div>
            </div>
            <div>{post.content}</div>
        </div>
    );
}

export default Post;
