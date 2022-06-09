import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import SingleBlog from "./components/pages/singleBlogPage/singleBlog";
import Timer from "./components/common/timer";

function Router() {
    return (
            <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/timer" element={<Timer />} />
                <Route path="/:slug" element={<SingleBlog />} /> {/*dynamically sets url*/}
                <Route path="/test" element={ <h1>This is test page</h1> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;