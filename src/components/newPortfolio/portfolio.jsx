import {useEffect, useState } from "react";
import CardFolio from "./cardfolio";
import { useMyContext } from "../context/mycontext"

export default function NewPortFolio() {
  const { globalState } = useMyContext();
  const { tema } = globalState;
  const cards2 =  [
    {
      id: 0,
      title: "A&G - Ventas",
      typo:"Full Stack",
      img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/692shots_so.jpg","https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/41shots_so.jpg","https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/361shots_so.jpg"],
      desc: `Aplicacion web que tiene como objetivo administrar el stock y ventas de productos para pequeños y medianos negocios. Ademas permite la gestion de cuentas corrientes de clientes como la visualicacion de datos semanasles y mensuales tanto de ventas como de deudores.`,
      tec: [
        ["TypeScript","https://www.svgrepo.com/show/354478/typescript-icon.svg"],
        ["Nextjs",`https://www.svgrepo.com/show/368858/nextjs.svg`],
        ["PostgreSQL","https://www.svgrepo.com/show/354200/postgresql.svg"],
        ["Redux","https://www.svgrepo.com/show/452093/redux.svg"],
        ["Tailwind","https://www.svgrepo.com/show/374118/tailwind.svg"],
        ["Prisma","https://www.svgrepo.com/show/373776/light-prisma.svg"],
      ],
      url: "https://ag-ventas.vercel.app",
      repo: "https://github.com/LucianoVelasquez/sh.ui",
      viewTec: ["TypeScript","Nextjs","PostgreSQL","Redux","Tailwind","Prisma"]
    },
    {
      id: 1,
      title: "Sportiverse App",
      typo:"Full Stack",
      img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/1692279677725.jpg"],
      desc: `Sportiverse era una aplicación web destinada a complejos que ofrecen el alquiler de espacios para realizar
        actividades deportivas.
        El objetivo era facilitar la reserva y el pago de los servicios, así como crear una
        comunidad de usuarios que pudieran compartir sus experiencias y opiniones.`,
      tec: [
        ["JavaScript","https://www.svgrepo.com/show/349419/javascript.svg"],
        ["Vite","https://www.svgrepo.com/show/374167/vite.svg"],
        ["NodeJs","https://www.svgrepo.com/show/452075/node-js.svg"],
        ["PostgreSQL","https://www.svgrepo.com/show/354200/postgresql.svg"],
        ["Redux","https://www.svgrepo.com/show/452093/redux.svg"],
        ["Tailwind","https://www.svgrepo.com/show/374118/tailwind.svg"],
        /* "https://www.svgrepo.com/show/374071/sequelize.svg",
        "https://www.svgrepo.com/show/517750/mercado-pago.svg",
        "https://www.svgrepo.com/show/373700/jest.svg",
        "https://www.svgrepo.com/show/353435/auth0.svg", */
      ],
      url: "https://sportiverse-client.onrender.com/",
      repo: "",
      viewTec: ["JavaScript","Vite","NodeJs","PostgreSQL","Tailwind"]
    },
    {
      id: 2,
      title: "App R&M - React & Vite",
      typo:"Front End",
      img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/720shots_so.jpg"],
      desc: `Proyecto en el que consiste desarrollar una aplicación web con React y Vite que permita a los usuarios buscar y visualizar información sobre personajes de la serie "Rick and Morty" utilizando la Api de Rick and Morty`,
      tec: [
        ["React","https://www.svgrepo.com/show/354259/react.svg"],
        ["Vite","https://www.svgrepo.com/show/374167/vite.svg"],
        ["Redux","https://www.svgrepo.com/show/452093/redux.svg"],
        ["Tailwind","https://www.svgrepo.com/show/374118/tailwind.svg"],
        ["GraphQL","https://www.svgrepo.com/show/373644/graphql.svg"],
      ],
      url: "https://challange-rm.vercel.app/",
      repo: "https://github.com/LucianoVelasquez/challange-rm",
      viewTec: ["React","Vite","Redux","Tailwind","GraphQL"]
    },{
      id: 3,
      title: "Countri App",
      typo:"Full Stack",
      img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/1692280768213.jpg"],
      desc: "Proyecto individual el cual consiste en trabajar con una API de Paises, mostrar su información, filtrarla, ordenarla, realizar búsquedas y realizar un CRUD completo",
      tec: [
        ["JavaScript","https://www.svgrepo.com/show/349419/javascript.svg"],
        ["Vite","https://www.svgrepo.com/show/374167/vite.svg"],
        ["NodeJs","https://www.svgrepo.com/show/452075/node-js.svg"],
        ["PostgresSQL","https://www.svgrepo.com/show/354200/postgresql.svg"],
        ["Redux","https://www.svgrepo.com/show/452093/redux.svg"],
        ["Tailwind","https://www.svgrepo.com/show/374118/tailwind.svg"],
        /* "https://www.svgrepo.com/show/374071/sequelize.svg", */
      ],
      url: "https://countries-client-vvox.onrender.com/",
      repo: "https://github.com/LucianoVelasquez/countries-client/tree/main",
      viewTec: ["JavaScript","Vite","NodeJs","PostgreSQL","Tailwind"]
    },
  ];

  const [newCards,setCards] = useState();
  const [current,setCurrect] = useState();

  useEffect(()=>{
    setCards(cards2)
  },[])
  
  /* Manejador de filtro de proyectos */
  const hanldeCards = (e) =>{

    const value= e.target.value.toString().toLowerCase();

    console.log(value);
    

    if(value.includes("todos")){
      setCurrect("Todos");
      return setCards(cards2);
    }

    const newState = cards2.filter(item => item.typo.toLowerCase() == value);

    setCards(newState)  
    setCurrect(e.target.value)
  }

  /* Manejador de busqueda de proyectos */
  const handleSearch = (e) =>{
    const value = e.target.value.toString().toLowerCase();
    let array = [];

    if(value == "") return setCards(cards2); 

    for (let i = 0; i < cards2.length; i++) {
      for (let j = 0; j < cards2[i].viewTec.length; j++) {
        if(cards2[i].viewTec[j].toLocaleLowerCase().includes(value)){
         if(!array.find((item) => item.title == cards2[i].title)){
          array.push(cards2[i]);
         }
        }
      }
    }

    setCards(array);
    setCurrect("Tipo de proyecto");
  }

  return (
    <>
    {/* Contenedor principal */}
    <section className="flex flex-col gap-x-6 lg:min-h-screen items-center">
      
      {/* Selector de proyectos */}
      <div className="flex p-5 w-1/2 justify-center items-center text-white flex-col gap-y-3 lg:flex-row lg:gap-y-0 mt-6">

        <div className="z-10">
          <select value={current} className={`${tema == "dracula" ? "text-neutral-content" : "text-neutral" } select select-bordered w-full max-w-xs`} onChange={(e) => hanldeCards(e)}>
            <option value={"Tipo de proyecto"} disabled selected>Tipo de proyecto</option>
            <option value={"Todos"}>Todos</option>
            <option value={"Full Stack"}>
              Full Stack
            </option>
            <option value={"Front end"}>
              Front end
            </option>
          </select>
        </div>

        <div className="z-10">
          <label className="input input-bordered flex items-center gap-2 ml-4">
            <input type="text" className={`grow bg-transparent ${tema == "dracula" ? "text-neutral-content" : "text-neutral" }`} placeholder="Buscar tecnologia" onChange={(e)=> handleSearch(e)} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          </label>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-3 gap-y-5 m-5 p-5 justify-center overflow-y-scroll h-[635px]">
        {
          newCards?.length != 0 ? newCards?.map(item =>{
            return(
              <CardFolio title={item.title} img={item.img} imgArray={item.tec} des={item.desc} typo={item.typo} url={item.url} repo={item.repo}></CardFolio>
            )
          }):
          <div className="w-[350px] lg:w-[380px] h-350 lg:h-[600px] flex items-center justify-center"><h1>No existen proyectos.</h1></div>
        }

      </div>
      
    </section>
    </>
  );
}
