import Vstyle from "../Visual/Visual.module.css";
import { ReactCompareSliderImage,ReactCompareSlider } from "react-compare-slider";
import befor from "../../../assets/before.png";
import after from "../../../assets/after.png"
const Visual = () => {
    return (
        <div className={Vstyle.box}>
            <div className={Vstyle.left}>
                <span>VIRTUAL TRY-ON</span>
                <span>NEVER BUY THE WRONG SHADE AGAIN! </span>
                <span>Try Now!</span>
                <img src="https://amazon-3l2.pages.dev/static/media/shade.ce305661a97c2720c82b.png"></img>
            </div>
            <div className={Vstyle.right}>
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={befor} />}
                    itemTwo={<ReactCompareSliderImage src={after} />}
                />
            </div>
        </div>
    );

}
export default Visual;