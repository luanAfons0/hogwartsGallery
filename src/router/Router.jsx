import React from "react";
import Error from "../pages/Error404";
import Home from "../pages/Home";
import Profile from '../pages/Profile'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}