import React, { useEffect, useState } from 'react';
import { IdsQuery, PostsQuery } from './FetchQuery';
import cl from './List.module.css';
import Loader from './Loader';

const BestStories = () => {
    const [load, setLoad] = useState(false);
    const [posts, setPosts] = useState([]);
    let url = 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty';

    const getIds = async () => {
        let responseIds = await IdsQuery(url);
        console.log(responseIds);
        return responseIds;
    };

    const getPosts = async (ids) => {
        const items = await Promise.all(ids.map( async (id) => await PostsQuery(id)));
        console.log(items);
        setPosts(items);
        
        // for (const id of ids) {
        //     let post = await PostsQuery(id);
        //     console.log(post);
        // }
    };
        
    useEffect( async () => {
        setLoad(true);
        let ids = await getIds();      
        await getPosts(ids);
        setLoad(false);
    }, []);





    return (
        <ul >
            {load ? 
                <Loader/> :
                posts.map(post => 
                    <li className={cl.top__stories + ' ' + cl.li__el} key={post.id}>
                        <div>{post.title}</div>
                    </li>
                )
            }
        </ul>
    )
};

export default BestStories;
