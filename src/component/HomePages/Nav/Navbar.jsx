import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from "../../../assets/logo.png"
import Navstyle from "./Nav.module.css"

const Nav = () => {
    return (
        <div className={Navstyle.navcard}>
            <div className={Navstyle.logo}>
                <img src={Logo}></img>
            </div>
            <BrowserRouter>
                <div className={Navstyle.navcontainer}>

                    <Link to="/">Home</Link>
                    <Link to="/items/i">i</Link>
                    <Link to="/items/k">k</Link>
                    <Link to="/items/l">l</Link>
                    <Link to="/items/kk">kk</Link>
                    </div>
                    <Routes>
                        <Route index path="/" element="" />
                        <Route path="items" >
                            <Route path="i" element="iii" />
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
