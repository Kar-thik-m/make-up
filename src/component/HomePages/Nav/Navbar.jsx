import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from "../../../assets/logo.png"
import Navstyle from "./Nav.module.css"
import { useState } from "react";

const Nav = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <div className={Navstyle.navcard}>
            <div className={Navstyle.logo}>
                <img src={Logo} alt="Logo"></img>
            </div>
            <button className={Navstyle.hamburger} onClick={toggleMenu}>
                ☰
            </button>
            <BrowserRouter>
                <div className={`${Navstyle.navcontainer} ${show ? Navstyle.show : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/items/i">i</Link>
                    <Link to="/items/k">k</Link>
                    <Link to="/items/l">l</Link>
                    <Link to="/items/kk">kk</Link>
                </div>
                <Routes>
                    <Route index path="/" element="" />
                    <Route path="items" >
                        <Route path="i" element="" />
                        <Route path="k" element="" />
                        <Route path="l" element="" />
                        <Route path="kk" element="" />
                    </Route>
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Nav;
