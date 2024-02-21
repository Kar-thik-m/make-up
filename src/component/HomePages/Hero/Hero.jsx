import HeroStyle from "../Hero/Hero.module.css"

const Hero = () => {
    return (
        <div className={HeroStyle.herocontainer}>
            <div className={HeroStyle.colom1}>
                <div className={HeroStyle.pcream}>
                    <span>skin protection cream</span>
                </div>
                <div className={HeroStyle.trend}>
                    <span><h3>trendy collection</h3></span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced. </span>
                </div>
            </div>
            <div className={HeroStyle.colom2}>
              <img src="https://amazon-3l2.pages.dev/static/media/hero.7e2be00982208588722d.png"></img>
            </div>
            <div className={HeroStyle.colom3}>
                <div  className={HeroStyle.count1}>
                    <span><h1>1.5m</h1></span>
                    <span>Monthly traffic</span>
                </div>
                <div className={HeroStyle.count2}>
                    <span ><h1>200K</h1></span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    );
}
export default Hero;