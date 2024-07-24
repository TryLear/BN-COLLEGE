import { useState } from "react";
import Home from "./componets/Home/Home";
import Navbar from "./componets/Navbar/Navbar";
import Program from "./componets/Program/Program";
import About from "./componets/about/About";
import Campus from "./componets/campus/Campus";
import Contact from "./componets/contact/Contact";
import Footer from "./componets/footer/Footer";
import Testimonial from "./componets/testimonial/Testimonial";
import Title from "./componets/title/Title";
import Video from "./componets/video/Video";


function App() {
  const [play, setPlay]=useState(false)
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <div className="container">
        <Title subtitle={'Our Program'} title={'What We Offer'}/>
      <Program/>
      <About setPlay={setPlay} />
      <Title subtitle={'Gallery'} title={'Campus Photos'}/>
      <Campus/>
      <Title subtitle={'TESTIMONIAL'} title={'What students Says'}/>
      <Testimonial/>
      <Title subtitle={'Contac Us'} title={'Gei In Touch'}/>
      <Contact/>
      <Footer/>
      </div>
      <Video play={play} setPlay={setPlay}/>
      
    </div>
  );
}

export default App;
