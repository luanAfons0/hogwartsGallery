import React from "react";
import Error from "../pages/Error404";
import Home from "../pages/Home";
import Profile from '../pages/Profile'
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default () =>{
    const [characterData,setCharacterData] = useState([])

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home setCharacterData={setCharacterData} />} />
                <Route path="/profile/:id" element={<Profile characterData={characterData}/>}/>
                <Route path="/*" element={<Error />}/>
            </Routes>
        </BrowserRouter>
    )
}