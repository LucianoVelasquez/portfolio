import { useRef, useState, useEffect } from "react";
import "./service.scss";
import { animate, motion, useInView } from "framer-motion";
import imagen from "../../../public/me.png"
import Skeleton from "./skeleton";
import { useMyContext } from "../context/mycontext"
import imga from "../../utils/code-black.png";
import gitdark from "../../utils/git-dark.svg";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
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
  <div className="container mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg> */}
            <img src={imagen} className="rounded-full">
            </img>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-lg">Sobre mi</h2>
            <div className="w-12 h-1 bg-pink-500 rounded mt-2 mb-4"></div>
            <p className="p-5 sm:p-0 text-lg font-extralight">Con mas de 2 años de
            experiencia en atención al cliente, ha fortalecido mi capacidad para comprender las necesidades de los
            usuarios y resolver proactivamente sus problemas</p>
          </div>
        </div>

        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <h2 className="text-2xl text-center mb-2">Stack actual</h2>
          <div className="hidden sm:w-full sm:flex h-1 bg-pink-500 rounded mt-2 mb-4 "></div>
          <div>
          <ul className="flex justify-center items-center flex-wrap mt-11">
                <li>
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
      </div>
      <div className="rounded-lg h-64 overflow-hidden flex gap-1">
        <div>
        <img alt="content" className="object-center h-full w-full" src="https://camo.githubusercontent.com/3d602bca6bd96f05fa9cf2e3edaec5da9ad4b90862f1609ac32b028283235f83/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d4c756369616e6f56656c61737175657a2673686f775f69636f6e733d7472756526636f756e745f707269766174653d7472756526686964655f626f726465723d74727565"></img>
        </div>
        <div>
        <img alt="content" className="object-center h-full w-full" src="https://camo.githubusercontent.com/66159bc23e71eb414ebda45e9e0c4ca4e2c8d0c3623b5a5faf9eee3e3af19e40/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d4c756369616e6f56656c61737175657a26686964655f626f726465723d74727565266c61796f75743d636f6d70616374"></img>
        </div> 
      </div>
    </div>
  </div>
</section>
  );
};

export default Services;
