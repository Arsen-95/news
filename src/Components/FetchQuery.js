import axios from 'axios';

let postUrl = 'https://hacker-news.firebaseio.com/v0/item/';

async function IdsQuery(url) {
    const fetchQuery = await axios(url);
    const ids = fetchQuery.data.slice(0, 10);
    return ids;
}

async function PostsQuery(id) {
    const postQuery = await axios(`${postUrl + id}.json?print=pretty`);
    const post = postQuery.data;
    return post;
}


export { IdsQuery, PostsQuery };
