import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';

function Home() {
    const [posts, setPosts] = useState([]);
    const [commentsPost, setCommentsPost] = useState([]);

    useEffect(() => {
        const myFetch = async () => {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/posts`,
                {
                    pass: 1234,
                },
                {
                    headers: {},
                    params: {
                        postId: 1,
                    },
                },
            );
            console.log(res.data);
        };
        myFetch();
    }, []);

    const handleGetComment = (id) => {
        const myFetch = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, {
                method: 'GET',
            });
            const data = await res.json();
            console.log(data);
        };

        myFetch();
    };
    const handleDelete = (id) => {
        const myFetch = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            console.log(data);
        };

        myFetch();
    };
    return (
        <>
            <h1>Trang chủ </h1>
            {posts.map((post) => {
                return (
                    <div className="post" key={post.id}>
                        <div>{post.title}</div>
                        <button onClick={() => handleGetComment(post.id)}>Bình luận</button>
                        <button onClick={() => handleDelete(post.id)}>Xoá</button>
                    </div>
                );
            })}
        </>
    );
}

export default Home;
