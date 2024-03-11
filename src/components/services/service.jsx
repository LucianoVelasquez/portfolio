import { useRef, useState, useEffect } from "react";
import "./service.scss";
import { User,Rocket,Goal,Blocks } from 'lucide-react';
import { useMyContext } from "../context/mycontext"
import avatar from '../../utils/avatar1.png'
import { motion,useInView } from "framer-motion";

const variants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 2,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
};
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const [mostrarImagen, setMostrarImagen] = useState(false);
  const [cargando, setCargando] = useState(true);
  const isInView = useInView(ref, { margin: "-100px" });
  const { globalState, updateGlobalState } = useMyContext();
  console.log(globalState.tema);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMostrarImagen(true);
      setCargando(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="">
      <div className="flex justify-center flex-col items-center h-fit gap-y-8 flex-1">

        <motion.div ref={ref} variants={variants}
          initial="initial"
          whileInView="animate" className="md:flex w-11/12 md:min-h-96 md:mt-10">

          <div className="flex flex-col w-full p-5 gap-y-3">

            <div  className="avatar justify-center mb-2">
              <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={avatar} />
              </div>
            </div>
            
            <motion.div  variants={textVariants} tabIndex={0} className="collapse collapse-arrow btn-outline btn-primary text-primary-content text-lg">
              <div className="flex justify-center gap-x-4 collapse-title text-center items-center">
              <User size={24} />¿Quién soy?
              </div>
              <div className="collapse-content"> 
                <p>Soy un fiel representante de la generación Z, una generación que se caracteriza por el uso de la tecnología desde una edad temprana. Desde muy chico, crecí en un entorno rodeado de tecnología, lo que me llevó a estudiar la carrera de Analista en Sistemas durante dos años.</p>
              </div>
            </motion.div>
            <motion.div variants={textVariants}  tabIndex={0} className="collapse collapse-arrow btn-outline btn-primary text-primary-content text-lg">
              <div className="flex justify-center gap-x-4 collapse-title text-center">
              <Rocket size={24} />¿Cuáles son mis habilidades?
              </div>
              <div className="collapse-content"> 
                <p>Además de la programación y el diseño, tengo experiencia en otros trabajos y en deportes de contacto, lo que me ha enseñado el valor del compañerismo y el trabajo en equipo. Me considero una persona curiosa con ganas de seguir aprendiendo y creciendo profesionalmente.</p>
              </div>
            </motion.div>
            <motion.div variants={textVariants}  tabIndex={0} className="collapse collapse-arrow btn-outline btn-primary text-primary-content text-lg">
              <div className="flex justify-center gap-x-4 collapse-title text-center">
              <Goal />Qué busco?
              </div>
              <div className="collapse-content"> 
                <p>Mi objetivo actual es formar parte de una empresa en el sector tecnológico que me ofrezca la oportunidad de desarrollar mis capacidades y crecer profesionalmente, además de contribuir a sus objetivos con mi pensamiento lógico y mis habilidades técnicas. Creo que, gracias a esta combinación de habilidades, tengo mucho que aportar y puedo ser un gran valor para su equipo.</p>
              </div>
            </motion.div>

          </div>
          
          <div className="flex flex-col md:flex md:flex-col md:w-3/4 p-2 mt-10 md:mt-0">
            
            <div className="flex justify-center items-center gap-3 text-center mt-5">
              <Blocks size={30} /><h2 className="text-3xl text-center mb-2"> Mi Stack en tecnologia</h2>
            </div>

            <div className=" w-full flex h-1 bg-pink-500 rounded mt-2 mb-4 "></div>
            <div>
              <ul className="flex justify-center items-center flex-wrap md:mt-11  select-none">
                <li className="">
                  <img
                    className="h-24 w-20 mr-2"
                    src="https://www.svgrepo.com/show/452228/html-5.svg"
                  ></img>
                </li>
                <li>
                  <img
                    className="h-24 w-20 mr-2"
                    src="https://www.svgrepo.com/show/452185/css-3.svg"
                  ></img>
                </li>
                <li>
                  <img
                    className="h-20 w-16 mr-5"
                    src="https://www.svgrepo.com/show/354478/typescript-icon.svg"
                  ></img>
                </li>
                <li>
                  <img
                    className="h-20 w-16 mr-5"
                    src="https://www.svgrepo.com/show/353925/javascript.svg"
                  ></img>
                </li>
                <li>
                  <img
                    className="h-24 w-20 mr-2"
                    src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
                  ></img>
                </li>
                <li>
                  <img
                    className="h-24 w-20 mr-2"
                    src="https://www.svgrepo.com/show/373929/node.svg"
                  ></img>
                </li>
                <li>
                  <img
                    className="h-24 w-16 mr-2"
                    src="https://www.svgrepo.com/show/374118/tailwind.svg"
                  ></img>
                </li>
                <li>
                  <img
                    className="h-24 w-24 mr-2"
                    src="https://www.svgrepo.com/show/354112/nextjs.svg "
                  ></img>
                </li>
                <li>
                  <img
                    className="h-24 w-20 mr-2"
                    src="https://www.svgrepo.com/show/452093/redux.svg"
                  ></img>
                </li>
                <li>
                  <img
                    className="h-24 w-16 mr-2"
                    src="https://www.svgrepo.com/show/354200/postgresql.svg"
                  ></img>
                </li>
              </ul>
          </div>
          </div>
          
        </motion.div>
        
        <div className="hidden md:flex justify-center gap-x-12 w-3/4 h-44">
          <div>
            <img alt="content" className="object-center h-full w-full" src="https://camo.githubusercontent.com/3d602bca6bd96f05fa9cf2e3edaec5da9ad4b90862f1609ac32b028283235f83/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d4c756369616e6f56656c61737175657a2673686f775f69636f6e733d7472756526636f756e745f707269766174653d7472756526686964655f626f726465723d74727565"></img>
          </div>
          <div>
            <img alt="content" className="object-center h-full w-full" src="https://camo.githubusercontent.com/66159bc23e71eb414ebda45e9e0c4ca4e2c8d0c3623b5a5faf9eee3e3af19e40/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d4c756369616e6f56656c61737175657a26686964655f626f726465723d74727565266c61796f75743d636f6d70616374"></img>
          </div> 
        </div>

      </div>
    </section>
  );
};

export default Services;
