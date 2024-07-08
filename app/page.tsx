import Header from './components/header';
import { Hero } from './components/hero';
import Cards from './components/cards'
import Content from './components/content';
import Porfolio from './components/porfolio';
import PorfolioSec2 from './components/porfoliosec2';
import FooterSec from './components/footer';

export default function Home() {
  return (
      <div className='overflow-x-hidden'>
    
        <section className="h-screen mi_section">
          <Header></Header>
          <Hero></Hero>
        </section>
        
        <section className="h-auto relative px-36 mi_section2">
          <div className='absolute -top-7 w-10/12 h-10 bg-background blur '></div>
          <Cards></Cards>
          <Content></Content>
          <div className='absolute -bottom-9 w-10/12 h-10 bg-background blur '></div>
        </section>

        <section className="h-auto px-36 flex-col ">
          <Porfolio></Porfolio>
          <PorfolioSec2></PorfolioSec2>
        </section>

        <section className="h-screen px-36 flex justify-center items-center">
          <FooterSec></FooterSec>
        </section>

      
      </div>
  );
}
