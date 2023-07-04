import React from 'react';
import Footer from "../Pages/Shared/Footer";
import MenuBar from '../Pages/Shared/MenuBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;