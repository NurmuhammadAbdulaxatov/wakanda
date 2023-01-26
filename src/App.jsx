import "./App.scss";
import Ract from "react";
import Header from "./Components/Header";
import Showcase from "./Components/Showcase";
import Feature from "./Components/Feature";
import Talent from "./Components/Talent";
import Explore from "./Components/Explore";
import Testimonial from "./Components/Testimonial";
import Business from "./Components/Business";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Feature />
      <Talent />
      <Explore />
      <Testimonial />
      <Business />
      <Footer />
    </>
  );
}

export default App;
