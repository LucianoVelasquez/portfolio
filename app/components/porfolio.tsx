import CardPortafolio from "./cardPortafolio";

  const cards2 =  [
    {
      id: 1,
      title: "Proyecto Individual",
      typo:"Full Stack - A&G Ventas",
      img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/692shots_so.jpg","https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/41shots_so.jpg","https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/361shots_so.jpg"],
      desc: `Aplicacion web que tiene como objetivo administrar el stock y ventas de productos para pequeños y medianos negocios. `,
      desc2:"Ademas permite la gestion de cuentas corrientes de clientes como la visualicacion de datos semanasles y mensuales tanto de ventas como de deudores.",
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
      id: 2,
      title: "Proyecto Individual",
      typo:"Full Stack - React & API Spring",
      img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/884shots_so.png"],
      desc: `Proyecto individual que consistió en crear una API REST con Spring Boot 3, implementando métodos de seguridad como Spring Security y JWT para proteger los diferentes endpoints.`,
      desc2: `Además, se documentó toda la aplicación con Swagger UI. También se desarrolló un sistema de login utilizando React, permitiendo a los usuarios autenticarse para acceder a los endpoints protegidos, con deploy completo realizado en AWS.`,
      tec: [
        ["Java","https://www.svgrepo.com/show/452234/java.svg"],
        ["Spring Boot","https://www.svgrepo.com/show/376350/spring.svg"],
        ["PostgreSQL","https://www.svgrepo.com/show/354200/postgresql.svg"],
        ["AWS","https://www.svgrepo.com/show/448266/aws.svg"],
        ["Vite","https://www.svgrepo.com/show/374167/vite.svg"],
        ["TypeScript","https://www.svgrepo.com/show/354478/typescript-icon.svg"],
        ["Tailwind","https://www.svgrepo.com/show/374118/tailwind.svg"],
        /* "https://www.svgrepo.com/show/374071/sequelize.svg",
        "https://www.svgrepo.com/show/517750/mercado-pago.svg",
        "https://www.svgrepo.com/show/373700/jest.svg",
        "https://www.svgrepo.com/show/353435/auth0.svg", */
      ],
      url: "https://springboot-api-wfnm.onrender.com/swagger-ui/index.html",
      repo: "https://github.com/LucianoVelasquez/springboot-API",
    },
    {
      id: 3,
      title: "Proyecto en Grupo",
      typo:"Full Stack - Sportiverse",
      img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/1692279677725.jpg"],
      desc: `Sportiverse era una aplicación web destinada a complejos que ofrecen el alquiler de espacios para realizar actividades deportivas.`,
      desc2: `El objetivo era facilitar la reserva y el pago de los servicios, así como crear una
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
    ]

export default function Porfolio(){
    return(
      <>
       {
       
        cards2.map(proyecto => {
          return(
            <CardPortafolio
            key={proyecto.id}
            id={proyecto.id} 
            title={proyecto.title} 
            typo={proyecto.typo} 
            desc={proyecto.desc}
            desc2={proyecto.desc2}
            tec={proyecto.tec}
            img={proyecto.img}
            url={proyecto.url}
            repo={proyecto.repo}
            ></CardPortafolio>
          )
        })

       }
      </>     
    )
}