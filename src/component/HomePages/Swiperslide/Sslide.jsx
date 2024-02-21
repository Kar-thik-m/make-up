import React from 'react';
import Sstyle from "../Swiperslide/Sslide.module.css";
import { ProductsData } from './products';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sslide = () => {
        var settings = {
            dots: true,
            infinite: true,
          
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 2, 
                    },
                   
                },
                {
                    breakpoint: 653,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
          };
    return (
        <div className={Sstyle.scard}>
            <div className={Sstyle.aling}>
            <Slider {...settings} className={Sstyle.l}>
                {ProductsData.map((product, index) => (
                    <div className={Sstyle.card}>
                       <div>
                       <div className={Sstyle.left}>
                            <div>{product.name}</div>
                            <div>{product.type} </div>
                            <div>{product.price} $</div>
                            <button>show</button>
                        </div>
                        <div className={Sstyle.right}>
                            <img src={product.img}></img>
                        </div>
                       </div>
                    </div>
                ))}
                </Slider>
            </div>
           
        </div>
    );
}

export default Sslide;
