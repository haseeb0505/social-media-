import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import axios from "axios"
import './feed.css';

// let baseUrl= ""
export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {

            const responce = username ?
                await axios.get('/posts/profile/' + username)
                : await axios.get('/posts/timeline/61fba8ea2ed927825b1e92e5')

            setPosts(responce.data)
        }

        fetchPost();
    }, [username])
    return <div className="feed">

        <div className="feedWrapper">
            <Share />

            {posts.map((p) => (

                <Post key={p._id} post={p} />
            ))}


        </div>
    </div>;
}
