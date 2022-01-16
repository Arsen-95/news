import React, { useEffect, useMemo, useState} from 'react';
import { IdsQuery, PostsQuery } from './FetchQuery';
import cl from './List.module.css';
import Loader from './Loader';
import btnClass from './Button.module.css';
import { Link } from 'react-router-dom';

const TopStories = () => {
    let [startNum, setStartNum] = useState(0);
    let [num, setNum] = useState(10);
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState(false);
    let url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

    const getIds = async () => {
        let responseIds = await IdsQuery(url, startNum, num);
        setNum(num += 10);
        setStartNum(startNum += 10);
        return responseIds;
    };

    const getPosts = async (ids) => {
        const items = await Promise.all(ids.map( async (id) => await PostsQuery(id)));
        console.log(items);
        setPosts([...posts, ...items]);
        
        // for (const id of ids) {
        //     let post = await PostsQuery(id);
        //     console.log(post);
        // }
    };
        
    useMemo( async () => {
        setLoad(true);
        let ids = await getIds();      
        await getPosts(ids);
        setLoad(false);
    }, []);

    const morePosts = async () => {
        let ids = await getIds();
        await getPosts(ids);
    };

    const open = (e) => {
        // if (e.target.closest("a") && e.target.key == 1) {
            const key = e.target.id;
    }


    return (
        <div>
            <ul onClick={(e) => open(e)}>
                {load ? 
                <Loader/> :
                posts.map(post => 
                    <li className={cl.top__stories + ' ' + cl.li__el} key={post.id}>
                        <div>{post.title}</div>
                        <Link 
                            post={post}
                            to={`/TopStories/${post.id}`}
                            id={post.id}
                            style={{display: 'block', width: 40, textAlign: 'center'}} 
                            className={btnClass.btn}
                            >
                                Open
                        </Link>
                    </li>
                )
                }
            </ul>
            {!load ? 
                <div className={btnClass.box}>
                    <button className={btnClass.btn} onClick={async () => await morePosts()}>Load more</button>
                </div>
                 :
                null
            }
        </div>
    )
};

export default TopStories;
