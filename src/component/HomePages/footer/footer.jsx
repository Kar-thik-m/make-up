import foostyle from "../footer/Footer.module.css"
import logo from "../../../assets/logo.png"

const Footer = () => {
    return (
        <div className={foostyle.box}>
            <div>
                <div className={foostyle.logo}>
                    <img src={logo}></img>
                </div>
                <div className={foostyle.contact}>
                    <h3>contact</h3>
                    <span>  <i class="fa fa-map-marker" aria-hidden="true"><span style={{ marginLeft: "10px" }}>227-15ft road-covai</span></i></span>
                    <span>  <i className="fa fa-phone" aria-hidden="true"><span style={{ marginLeft: "10px" }}>+91 9361238910</span></i></span>
                    <span>  <i class="fa fa-envelope" aria-hidden="true"><span style={{ marginLeft: "10px" }}>sparrowkarthik007@gmail.com</span></i></span>
                </div>
                <div className={foostyle.account}>
                    <h3>account</h3>
                    <span>  <i class="fa fa-sign-in" aria-hidden="true"><span style={{ marginLeft: "10px" }}>Sing In</span></i></span>
                    <span>  <i class="fa fa-sign-out" aria-hidden="true"><span style={{ marginLeft: "10px" }}>Sing out</span></i></span>
                </div>
                <div className={foostyle.companny}>
                    <h3>companny</h3>
                    <span>  <i class="fa fa-building" aria-hidden="true"><span style={{ marginLeft: "10px" }}>companny</span></i></span>
                </div>
                <div className={foostyle.resourese}>
                    <h3>resourese</h3>
                    <span>  <i class="fa fa-arrow-up"  aria-hidden="true"><span style={{ marginLeft: "10px" }}>About us details</span></i></span>
                </div>
            </div>
            <div className={foostyle.copy}>
                <span>copyrights c annonys</span>
                <span>copyrights c annonys</span>
            </div>
        </div>
    );
}

export default Footer;