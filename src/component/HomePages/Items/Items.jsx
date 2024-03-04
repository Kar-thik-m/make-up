import React, { useState, useEffect } from "react";
import Istyle from "../Items/Items.module.css";

import Category from "../../Category/category";
const Item = () => {
    
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
                const responseData = await response.json();
                setData(responseData);
                setFilterData(responseData);
               
                   
              
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const filterItems = (brand) => {
        const filtered = filterData.filter(product => product.brand==brand);
        setData(filtered);
    };


    return (
        <div id="items" className={Istyle.box}>
            <div className={Istyle.head}>
                Our Products
                <div> </div >
                <span>If You to want see  the better View --    </span>
               <div className={Istyle.clickbutton}>
               <button>Click</button>
               </div>
            </div>
            <div className={Istyle.fullbox}>
                <div className={Istyle.cardleft}>
                <div><h3>Famous Brands</h3></div><hr/>
                    <ul>
                        <li onClick={() => setFilterData(data)}>All</li>
                        <li onClick={() => filterItems("colourpop")}>colourpop </li>
                        <li onClick={() => filterItems("rejuva minerals")}>rejuva minerals</li>
                        <li onClick={() => filterItems("lotus cosmetics usa")}>lotus cosmetics usa</li>
                        <li onClick={() => filterItems("nyx")}>nyx</li>
                        <li onClick={() => filterItems("dior")}>dior</li>
                        <li onClick={() => filterItems("benefit")}>benefit</li>
                        <li onClick={() => filterItems("clinique")}>clinique</li>
                        <li onClick={() => filterItems("glossier")}>glossier</li>
                        
                    </ul>
                </div>
                <div className={Istyle.cardright}>
                    {data.map((product) => (
                        <div className={Istyle.card} key={product.id}>
                            <div>
                                <div className={Istyle.left}>
                                    <div>{product.name}</div>
                                    <div>{product.price}{product.price_sign}</div>
                                    <button >show</button>
                                </div>
                                <div className={Istyle.right}>
                                    <img src={product.api_featured_image} alt={product.name} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Item;
