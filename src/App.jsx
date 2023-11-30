import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/portfolio";
import Service from "./components/services/service";
import "./App.scss"
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";


const App = () => {
  return (
    <div>
      <section className="relative overflow-hidden" id="home">
        <Navbar/>
        <Hero/>
      </section>
      <section><Service/></section>
      <Portfolio></Portfolio>
      <section id="contact"><Contact/>
      </section>
      <section className="section2">
      <Footer></Footer>
      </section>
    </div>
  );
};

export default App;
