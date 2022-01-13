import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom"
import { useState } from 'react';
import { PostsQuery } from "./FetchQuery";
import Loader from "./Loader";

const PostAbout = (props) => {
    const [load, setLoad] = useState(false);
    const {id} = useParams();
    const [post, setPost] = useState('');
    async function query() {
        const news = await PostsQuery(id);
        setPost(news);
    };

    // useMemo(() => query(), []);
    useEffect( async () => {
        setLoad(true)
        await query();
        setLoad(false);
    }, [])
    console.log(post);
    
    // console.log(id);
    return (
        <div>
            {load ? 
                <Loader/>                 
                : <div>
                    <div>Post id: {post.id}</div>
                    <div>Type: {post.type}</div>
                    <div>Post title: {post.title}</div>
                </div>
            }
        </div>
    )
}

export default PostAbout
