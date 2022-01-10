import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BestStories from './BestStories';
import NewStories from './NewStories';
import TopStories from './TopStories';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/TopStories' element={<TopStories/>}/>
            <Route path='/NewStories' element={<NewStories/>} />
            <Route path='/BestStories' element={<BestStories/>} />
        </Routes>
    )
};

export default AppRouter;
