import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


import Logo from "../../../assets/logo.png"
import Navstyle from "./Nav.module.css"
import { useState } from "react";
import Home from "../HomePage";
import Category from "../../Category/category";

const Nav = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <>

            <BrowserRouter>
                <div className={Navstyle.navcard}>
                    <div className={Navstyle.logo}>
                        <img src={Logo} alt="Logo"></img>
                    </div>
                    <button className={Navstyle.hamburger} onClick={toggleMenu}>
                        {show ? "=" : "☰"}
                    </button>
                    <div className={`${Navstyle.navcontainer} ${show ? Navstyle.show : ''}`}>
                        <Link to="/items/home">Home</Link><hr />
                        <Link to="/items/i">Catagorey</Link><hr />
                        <Link to="/items/k">Orders</Link><hr />
                        <Link to="/items/l">Items</Link><hr />
                        <Link to="/items/kk">Card</Link>
                    </div>
                </div>
                <Routes>
                    <Route index path="" element={<Home />} />
                    <Route path="items" >
                    <Route path="home" element={<Home />} />
                        <Route path="i" element={<Category/>} />
                        <Route path="k" element="" />
                        <Route path="l" element="" />
                        <Route path="kk" element="" />
                    
                    </Route>
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Nav;
