import CatagoryStyle from "../Category/Category.module.css";
import bb_cc from "../../assets/category/bb_cc.jpeg";
import Concealer from "../../assets/category/Concealer.jpeg";
import Contour from "../../assets/category/Contour.jpeg";
import Cream from "../../assets/category/Cream.jpeg";
import Gel from "../../assets/category/Gel.webp";
import Highlighter from "../../assets/category/Highlighter.jpeg";
import lip_gloss from "../../assets/category/lip_gloss.jpeg";
import liquid from "../../assets/category/liquid.webp";
import lip_stain from "../../assets/category/lip_stain.jpeg";
import mineral from "../../assets/category/Mineral.jpeg";
import Palette from "../../assets/category/Palette.jpeg";
import Pencil from "../../assets/category/Pencil.jpeg";
import Powder from "../../assets/category/Powder.jpeg";
import Liptick from "../../assets/category/liptick.jpeg";

import { useState, useEffect } from "react";

const Category = () => {
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

    const filterItems = (category) => {
        const filtered = filterData.filter(product => product.category === category);
        setData(filtered);
    };
    const add=()=>{
        
    }

    return (
        <div className={CatagoryStyle.full}>
            <div className={CatagoryStyle.leftsideFilter}>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("lipstick")} src={Liptick} alt="lipstick" />Lipstick</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("liquid")} src={liquid} alt="liquid" />Liquid</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("powder")} src={Powder} alt="powder" />Powder</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("lip_gloss")} src={lip_gloss} alt="lip_gloss" />lip_gloss</div>
                <div><img style={{ width: "4rem", borderRadius: "10rem" }} onClick={() => filterItems("gel")} src={Gel} alt="gel" />Gel</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("pencil")} src={Pencil} alt="pencil" />Pencil</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("cream")} src={Cream} alt="cream" />Cream</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("palette")} src={Palette} alt="palette" />Palette</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("concealer")} src={Concealer} alt="concealer" />Concealer</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("highlighter")} src={Highlighter} alt="highlighter" />Highlighter</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("bb_cc")} src={bb_cc} alt="bb_cc" />bb_cc</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("contour")} src={Contour} alt="contour" />Contour</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("lip_stain")} src={lip_stain} alt="lip_stain" />lip_stain</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("mineral")} src={mineral} alt="mineral" />Mineral</div>
            </div>
            <div className={CatagoryStyle.box}>
                {data.map((product) => (
                    <div className={CatagoryStyle.card} key={product.id}>
                        <div>
                            <div className={CatagoryStyle.left}>
                                <div>{product.name}</div>
                                <div>{product.brand}</div>
                                <div>{product.price}{product.price_sign}</div>
                                <div className={CatagoryStyle.button}>
                                    <button onClick={add()} >AddCard</button>
                                    <button >seemore</button>
                                    <button >Buy</button>
                                </div>
                            </div>
                            <div className={CatagoryStyle.right}>
                                <img src={product.api_featured_image} alt={product.name} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
