import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./porta.scss";

const items = [
  {
    id: 1,
    title: "Countri App",
    img: "https://media.licdn.com/dms/image/D4D2DAQGNG76JfELiLA/profile-treasury-image-shrink_800_800/0/1692280768213?e=1701691200&v=beta&t=6Ih0uRlYmm_iHbJ9DPLewct6ALY8Gu4RAVQUpOCjYpY",
    desc: "Proyecto individual el cual consiste en trabajar con una API de Paises, mostrar su información, filtrarla, ordenarla, realizar búsquedas y realizar un CRUD completo",
    tec: [
      "https://www.svgrepo.com/show/349419/javascript.svg",
      "https://www.svgrepo.com/show/374167/vite.svg",
      "https://www.svgrepo.com/show/452075/node-js.svg",
      "https://www.svgrepo.com/show/354200/postgresql.svg",
      "https://www.svgrepo.com/show/452093/redux.svg",
      "https://www.svgrepo.com/show/374118/tailwind.svg",
      "https://www.svgrepo.com/show/374071/sequelize.svg",
    ],
    url: "https://countries-client-vvox.onrender.com/",
    repo: "https://github.com/LucianoVelasquez/countries-client/tree/main",
  },
  {
    id: 2,
    title: "Sportiverse",
    img: "https://media.licdn.com/dms/image/D4D2DAQE1gSXzSnIVcQ/profile-treasury-image-shrink_800_800/0/1692279677725?e=1701691200&v=beta&t=UzAWIfEyZ7PJPLUJj0crkrXCoYzwwj3DGadDcr8u-Yk",
    desc: `Sportiverse era una aplicación web destinada a complejos que ofrecen el alquiler de espacios para realizar
      actividades deportivas.
      El objetivo era facilitar la reserva y el pago de los servicios, así como crear una
      comunidad de usuarios que pudieran compartir sus experiencias y opiniones.`,
    tec: [
      "https://www.svgrepo.com/show/349419/javascript.svg",
      "https://www.svgrepo.com/show/374167/vite.svg",
      "https://www.svgrepo.com/show/452075/node-js.svg",
      "https://www.svgrepo.com/show/354200/postgresql.svg",
      "https://www.svgrepo.com/show/452093/redux.svg",
      "https://www.svgrepo.com/show/374118/tailwind.svg",
      "https://www.svgrepo.com/show/374071/sequelize.svg",
      "https://www.svgrepo.com/show/517750/mercado-pago.svg",
      "https://www.svgrepo.com/show/373700/jest.svg",
      "https://www.svgrepo.com/show/353435/auth0.svg",
    ],
    url: "https://sportiverse-client.onrender.com/",
    repo: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref /* offset:["start start", "end start"] */,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="flex justify-center items-center h-full w-full overflow-hidden">
        <div className="max-w-screen-xl h-full m-auto flex gap-12 items-center justify-center c2">
          <div className="flex-1 h-1/2 im2" ref={ref}>
            <img
              className="object-cover w-full h-full rounded-lg shadow-xl "
              src={item.img}
              alt=""
            ></img>
          </div>
          <motion.div
            className="flex flex-1 flex-col gap-7 text1"
            style={{ y }}
          >
            <h2 className="text-5xl font-semibold">{item.title}</h2>
            <p className="text-2xl font-extralight">{item.desc}</p>

            <div class="collapse bg-base-200 collapse-open ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title ">Tecnologias utilizadas:</div>
              <div className="collapse-content flex justify-start items-center">
                {/* <p>{item.tec}</p> */}
                {item.tec.map((item, index) => (
                  <img key={index} className="h-7 w-8 ml-2" src={item} alt="" />
                ))}
              </div>
            </div>

            <div className="but-div gap-5 flex">
              <a href={item.url}>
                {" "}
                <button className="btn btn-outline btn-primary w-36">
                  Demo
                </button>
              </a>
              {
                item.repo == ""? " " : <a href={item.repo}>
                <button className="btn btn-outline btn-secondary w-36">
                  Repositorio
                </button>
              </a>
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="relative" id="portafolio" ref={ref}>
      <div className="sticky top-0 left-0 pt-12 text-center text-5xl font-bold bar">
        <h2 className="text-3xl mb-4">
          Mis proyectos
          <span className="ml-2 badge badge-lg">NEW</span>
        </h2>
        <motion.div
          style={{ scaleX }}
          className="h-1 bg-gradient-to-r from-purple-500 via-red-500 to-yellow-300"
        ></motion.div>
      </div>
      <div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
