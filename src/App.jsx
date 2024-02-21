import Nav from "./component/HomePages/Nav/Navbar"
import Hero from "./component/HomePages/Hero/Hero"
import Sslide from "./component/HomePages/Swiperslide/Sslide"
import Visual from "./component/HomePages/Visual/Visual"
import Item from "./component/HomePages/Items/Items"
import Testmonials from "./component/HomePages/Testimonials/Testimonials"
import Footer from "./component/HomePages/footer/footer"
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Sslide />
      <Visual />
      <Item />
      <Testmonials />
      <Footer />
    </div>
  )
}

export default App
