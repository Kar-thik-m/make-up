import Istyle from "../Items/Items.module.css";
import { ProductsData } from "../Swiperslide/products";
import { useState } from "react";

const Item = () => {
    const [data, setData] = useState(ProductsData);

    const filter = (type) => {
        setData(ProductsData.filter((p)=>(p.type==type)))
    };

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
                                    <div>{product.type}</div>
                                    <div>{product.price} $</div>
                                    <button>show</button>
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
}

export default Item;
