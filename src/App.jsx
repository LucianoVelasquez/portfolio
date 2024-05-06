import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/portfolio";
import NewPortFolio from "./components/newPortfolio/portfolio";
import Service from "./components/services/service";
import "./App.scss";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { MyContextProvider } from "./components/context/mycontext";

const App = () => {
  return (
    <MyContextProvider>
      <div>
        <section className="relative overflow-hidden" id="home">
          <Navbar />
          <Hero />
        </section>
        <section className="mb-20">
          <Service />
        </section >
        {/* <Portfolio></Portfolio> */}
        <section id="portafolio">
        <NewPortFolio></NewPortFolio>
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section className="mt-10">
          <Footer></Footer>
        </section> 
      </div>
    </MyContextProvider>
  );
};

export default App;
