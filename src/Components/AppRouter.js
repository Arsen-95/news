import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BestStories from './BestStories';
import NewStories from './NewStories';
import PostAbout from './PostAbout';
import TopStories from './TopStories';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/TopStories' element={<TopStories/>} />
            <Route path='/TopStories/:id' element={<PostAbout/>} />
            <Route path='/NewStories' element={<NewStories/>} />
            <Route path='/NewStories/:id' element={<PostAbout/>} />
            <Route path='/BestStories' element={<BestStories/>} />
            <Route path='/BestStories/:id' element={<PostAbout/>} />
        </Routes>
    )
};

export default AppRouter;
