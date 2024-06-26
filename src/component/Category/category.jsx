import CatagoryStyle from "../Category/Category.module.css";
import Cream from "../../assets/category/Cream.jpeg";
import liquid from "../../assets/category/liquid.webp";
import Pencil from "../../assets/category/Pencil.jpeg";
import Powder from "../../assets/category/Powder.jpeg";
import Liptick from "../../assets/category/liptick.jpeg";
import { Data } from "../../config";
import { useState, useEffect } from "react";

const Category = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [addData, setAddData] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${Data}/product/allitems`);
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

    const buy = async (product) => { 
        setAddData(product); 
        const options = {
            key: "rzp_test_2sglITYoavfAoD",
            key_secret: "HJQQMjgxahtHetGhOSIeefS0",
            amount: product.price * 100, 
            currency: "INR",
            name: "STARTUP_PROJECTS",
            description: "for testing purpose",
            handler: function(response) {
                alert(response.razorpay_payment_id);
            },
            prefill: {
                name: "Karthik",
                email: "sparrowkarthik007@gmail.com",
                contact: "9361238910"
            },
            notes: {
                address: "Razorpay Corporate office"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const pay = new window.Razorpay(options);
        pay.open();
    };

    return (
        <div className={CatagoryStyle.full}>
            <div className={CatagoryStyle.leftsideFilter}>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("lipstick")} src={Liptick} alt="lipstick" />Lipstick</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("liquid")} src={liquid} alt="liquid" />Liquid</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("powder")} src={Powder} alt="powder" />Powder</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("pencil")} src={Pencil} alt="pencil" />Pencil</div>
                <div><img style={{ width: "3rem", borderRadius: "10rem" }} onClick={() => filterItems("glossier")} src={Cream} alt="cream" />glossier</div>
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
                                    <button onClick={() => buy(product)}>Buy</button> {/* Pass product as parameter */}
                                </div>
                            </div>
                            <div className={CatagoryStyle.right}>
                                <img src={product.image} alt={product.name} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
