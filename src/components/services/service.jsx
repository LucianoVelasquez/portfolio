import { useRef, useState, useEffect } from "react";
import "./service.scss";
import { animate, motion, useInView } from "framer-motion";
import Skeleton from "./skeleton";

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
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Mis Skills
          <br />
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            className="ima"
            src="https://www.svgrepo.com/show/521573/code.svg"
            alt=""
          />
          <h1>
            <b>Soluciones </b> Creativas
          </h1>
        </div>
        <div className="title">
          <h1>
            Para <b> Tu Negocio</b>
          </h1>
          <a href="https://www.linkedin.com/in/lv-dev/">
            <img
              className="mask mask-squircle ima2"
              src="https://www.svgrepo.com/show/448234/linkedin.svg"
            />
          </a>
          <a href="https://github.com/LucianoVelasquez">
            <img
              className="mask mask-squircle ima2"
              src="https://www.svgrepo.com/show/445786/github.svg"
            />
          </a>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div className="stats shadow mb-8 w-full ml-60 container2">
          <div className="stat">
            <div className="stat-title title">Lenguajes mas usados</div>
            <div className="stat-value text-primary git">
              {cargando ? (
                // Muestra el spinner mientras se está cargando
                <Skeleton />
              ) : mostrarImagen ? (
                // Muestra la imagen cuando la carga ha terminado
                <img
                  className="git1"
                  src="https://camo.githubusercontent.com/a77a370b86fbbe5a626d64af545f7351a4c73bad1c81b9825c44d741fff34e57/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d4c756369616e6f56656c61737175657a26686964655f626f726465723d74727565266c61796f75743d636f6d70616374"
                  alt="GitHub"
                />
              ) : null}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title title">Stats GitHub</div>
            <div className="stat-value text-secondary git1">
              {cargando ? (
                // Muestra el spinner mientras se está cargando
                <Skeleton />
              ) : mostrarImagen ? (
                // Muestra la imagen cuando la carga ha terminado
                <img
                  className="git1"
                  src="https://camo.githubusercontent.com/caf60d1438133dfdb97dc3c0d2c055f0401b7c756695b3bc63aeacfa45d2df8c/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d4c756369616e6f56656c61737175657a2673686f775f69636f6e733d7472756526636f756e745f707269766174653d7472756526686964655f626f726465723d74727565"
                />
              ) : null}
            </div>
          </div>
          <div className="stat">
            <div className="stat-title title">Tecnologias</div>
            <div className="stat-title">
              <ul className="flex justify-center items-center flex-wrap">
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
                    className="h-24 w-20 mr-2"
                    src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
                  ></img>
                </li>
                <li>
                  <img
                    className="h-24 w-20 mr-5"
                    src="https://www.svgrepo.com/show/303388/java-4-logo.svg"
                  ></img>
                </li>
                <li>
                  <img
                    className="h-18 w-18 mr-6"
                    src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
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
      </motion.div>
    </motion.div>
  );
};

export default Services;
