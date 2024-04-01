
import Hero from "./Hero/Hero";
import Sslide from "./Swiperslide/Sslide";
import Visual from "./Visual/Visual"
import Item from "./Items/Items";
import Testmonials from "./Testimonials/Testimonials"
import Footer from "./footer/footer"
import Logo from "../../assets/logo.png"
import Navstyle from "../HomePages/Nav/Nav.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    };
    return (
        <>
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
            <Hero />
            <Sslide />
            <Visual />
            <Item />
            <Testmonials />
            <Footer />
        </>
    );
}
export default Home;