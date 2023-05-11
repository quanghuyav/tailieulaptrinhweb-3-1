import { memo, useContext, useMemo, useState } from 'react';
import AppContext from '../../context/context';
import axios from 'axios';
import { deleteOnePost, updateOnePost } from '../../reducer/actions';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
} from '@mui/material';

function Post({ post }) {
    const { state, dispatch } = useContext(AppContext);
    const [openEditBox, setOpenEditBox] = useState(false);
    const [editContent, setEditContent] = useState('');
    console.log('Bài post');

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
        <Card variant="outlined" sx={{ backgroundColor: '#f5f5f5' }}>
            <CardContent>
                <Avatar
                    src={post.author.avatar}
                    alt={post.author.name}
                    sx={{
                        width: 64,
                        height: 64,
                        marginBottom: '0.5rem',
                        border: '2px solid #2196f3',
                    }}
                />
                <Typography variant="h6" sx={{ marginBottom: '0.5rem' }}>
                    {post.author.name}
                </Typography>
                <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    sx={{ marginBottom: '0.5rem' }}
                >
                    {post.createdAt}
                </Typography>
                <Typography variant="body1" paragraph>
                    {post.content}
                </Typography>
            </CardContent>
            {state.user && state.user.userName == post.author.email && (
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button size="small" color="primary" onClick={() => setOpenEditBox(true)}>
                        Sửa
                    </Button>
                    <Button size="small" color="secondary" onClick={handleDelete}>
                        Xoá
                    </Button>
                </CardActions>
            )}
            <Dialog open={openEditBox} onClose={() => setOpenEditBox(false)}>
                <DialogTitle>Sửa nội dung</DialogTitle>
                <DialogContent>
                    <TextField
                        multiline
                        rows={4}
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenEditBox(false)}>Hủy</Button>
                    <Button onClick={handleEdit} color="primary">
                        Lưu
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}

export default memo(Post);
