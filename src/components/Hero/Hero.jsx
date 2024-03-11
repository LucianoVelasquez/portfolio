import { hh2 } from "./h2.module.css";
import { motion } from "framer-motion";
import { Contact,FolderTree } from 'lucide-react';
import "./hero.scss";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const SilVariants = {
  initial: {
    x: "35%",
  },
  animate: {
    x: "-65%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 60,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero min-h-screen  bg-base-200 z-20 herores">
      <div className="hero-content flex-col lg:flex-row-reverse z-10 ">
        <img
          variants={textVariants}
          src="https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/components/Hero/avatar3.png"
          className="object-contain w-12 rounded-full xl:w-1/2  xl:mb-28 lg:w-80 lg:mb-28 imgres"
        />
        <motion.div
          className="containerres"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={textVariants}
            className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-500 to-yellow-300  font-bold tracking-wider"
          >
           LUCIANO VELASQUEZ
          </motion.h1>
          <motion.h1
            variants={textVariants}
            className="text-5xl font-bold mt-6 text-start"
          >
            Full Stack Developer
          </motion.h1>
          <motion.h1
            variants={textVariants}
            className="text-xl sm:text-xl sm:font-extralight mt-4 "
          >
            Soy un <strong>Dev web</strong> con formación en analista de sistemas y experiencia en proyectos full stack, me especializo en el desarrollo <strong>frontend</strong> utilizando <strong>React.</strong>
            <br></br>
            
          </motion.h1>
          <motion.div variants={textVariants} className="but mt-6">
            <a href="#portafolio">
              <motion.button
                variants={textVariants}
                className="btn btn-outline btn-primary mt-10 mr-8"
              >
                Ver Proyectos
                <FolderTree />
              </motion.button>
            </a>
            <a href="#contact">
              <motion.button
                variants={textVariants}
                className="btn btn-outline btn-error mt-10"
              >
                Contactame
                <Contact />
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className={hh2}
        variants={SilVariants}
        initial="initial"
        animate="animate"
      >
        Developer Backend Frontend
      </motion.div>
    </div>
  );
};

export default Hero;
