import React, { useState, useEffect } from "react";
import Istyle from "../Items/Items.module.css";
import { Data } from "../../../config";
import Category from "../../Category/category";
const Item = () => {
    
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
console.log(filterData)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${ Data }/product/allitems`);
                const responseData = await response.json();
                setData(responseData);
                setFilterData(responseData);
               
                   
              
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

 


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
                
                </div>
                <div className={Istyle.cardright}>
                    {filterData.map((product) => (
                        <div className={Istyle.card} key={product.id}>
                            <div>
                                <div className={Istyle.left}>
                                    <div>{product.name}</div>
                                    <div>{product.price}$</div>
                                    <button >show</button>
                                </div>
                                <div className={Istyle.right}>
                                    <img src={product.img} alt={product.name} />
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
