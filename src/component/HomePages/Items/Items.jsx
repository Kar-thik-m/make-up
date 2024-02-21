import Istyle from "../Items/Items.module.css";
import Hero from "../Hero/Hero.jsx"

import { useState,useEffect } from "react";


const Item = () => {
    const [data, setData] = useState([]);

    const filter = (type) => {
        setData(ProductsData.filter((p)=>(p.type==type)))
    };
   useEffect(()=>{
    const make=async()=>{
        try {
            
        const fetchdata = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`);
       
            const response = await fetchdata.json();
            setData(response);
        } catch (error) {
            console.log(error);
        }
    }
    make();
   },[])
    return (
        <div className={Istyle.box}>
            <div className={Istyle.head}>
                Our Products
                <div></div>
            </div>
            <div className={Istyle.fullbox}>
                <div className={Istyle.cardleft}>
                    <ul>
                        <li onClick={() => setData(ProductsData)}>All</li>
                        <li onClick={() => filter('skin care')}>Skin care</li>
                        <li onClick={() => filter("conditioner")}>Conditioner</li>
                        <li onClick={() => filter("foundation")}>Foundation</li>
                    </ul>
                </div>
                <div className={Istyle.cardright}>
                    {data.map((product, i) => (
                        <div className={Istyle.card} >
                            <div>
                                <div className={Istyle.left}>
                                    <div>{product.name}</div>
                                    <div>{product.price}{product.price_sign}</div>
                                    <button onClick={()=>{<Hero/>}}>show</button>
                                </div>
                                <div className={Istyle.right}>
                                     <img src={product.api_featured_image}></img>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Item;
