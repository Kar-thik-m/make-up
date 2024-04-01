import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


import Home from "../HomePage";
import Login from "../../user/login/login";
import Register from "../../user/register/Register";
import Category from "../../Category/category";


const Nav = () => {
  

    return (
        <>
        <Router>
               
                <Routes>
                <Route index path='/' element={<Login />}/>
                    <Route path="items" >
                        <Route path="home" element={<Home />} />
                        <Route path="i" element={<Category />} />
                        <Route path="k" element="" />
                        <Route path="l" element="" />
                        <Route path="kk" element="" />
                        <Route path="login" element= {<Login />}/>
                        <Route path="register" element={<Register/>}/>
                       
                    </Route>
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes> 
            </Router>
        </>
    );
}

export default Nav;
