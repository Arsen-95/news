import axios from 'axios';

let postUrl = 'https://hacker-news.firebaseio.com/v0/item/';

async function IdsQuery(url, startNum, num) {
    const fetchQuery = await axios(url);
    const ids = fetchQuery.data.slice(startNum, num);
    console.log(startNum, num);
    console.log(ids);
    // setPosts([...posts, fetchQuery.data.splice(0, `${num}`)])
    return ids;
}

async function PostsQuery(id) {
    const postQuery = await axios(`${postUrl + id}.json?print=pretty`);
    const post = postQuery.data;
    return post;
}


export { IdsQuery, PostsQuery };
