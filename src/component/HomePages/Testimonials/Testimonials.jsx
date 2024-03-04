import Slider from "react-slick";
import { TestimonialsData } from "./testimonialsData";
import Tstyle from "../Testimonials/Testimonials.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testmon from "../../../assets/testimonial.png"
const Testmonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1, 
                },
            },
        ],
    };
    return (
        <div className={Tstyle.box} >
            <div className={Tstyle.top}>
                <div className={Tstyle.left}>
                    <span>TOP RATED</span>
                    <span>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</span>
                </div>
                <div className={Tstyle.midle}>
                    <img src={Testmon}></img>
                </div>
                <div className={Tstyle.right}>
                    <span>100k</span>
                    <span>HAPPY CUSTOMERS WITH US</span>
                </div>
            </div>
            <div className={Tstyle.bottom}>
                <div className={Tstyle.review}>
                    <span>reviewS</span>
                    <div></div>
                </div>
                <div className={Tstyle.reviewcard} id="reviews">
                    <Slider {...settings} className={Tstyle.l}>
                        {TestimonialsData.map((p) => (
                            <div className={Tstyle.slidecard}>

                                <div className={Tstyle.cardin}>
                                    <img src={p.image}></img>
                                    <div className={Tstyle.comment}><ul></ul>{p.comment}</div>
                                    <div className={Tstyle.name}>{p.name}</div>
                                </div>

                            </div>
                        ))}

                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default Testmonials;