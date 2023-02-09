import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {publicRoutes.map(rt =>
                <Route path={rt.path} key = {rt.path} element={rt.Component} />
            )}
            {user.isAuth && authRoutes.map(rt =>
            <Route path={rt.path} key = {rt.path} element={rt.Component} />
            )}
            <Route path = '*' element={<Navigate to="/" replace/>} />
            </Routes>
    );
};

export default AppRouter;