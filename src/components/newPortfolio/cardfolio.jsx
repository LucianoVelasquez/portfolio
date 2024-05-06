import Carru from "./carrufolio";
import Modal from "./modalfolio";
import { useMyContext } from "../context/mycontext"
import { SquareArrowOutUpRight,Github } from 'lucide-react';
export default function CardFolio({
  title,
  img,
  imgArray,
  des,
  typo,
  url,
  repo
}) {
  const { globalState } = useMyContext();
  const { tema } =globalState;
  const handleColor = (name) => {

    const opacity = tema == "dracula" ? "bg-opacity-40 shadow-sm " : "bg-opacity-90 shadow-sm border-black";

    if (name.toLocaleLowerCase().includes(`react`))
      return `bg-blue-900 ${opacity}`;

    if (name.toLocaleLowerCase().includes(`javascript`))
      return `bg-yellow-900 ${opacity}`;

    if (name.toLocaleLowerCase().includes(`node`))
      return `bg-green-900 ${opacity}`;

    if (name.toLocaleLowerCase().includes(`typescript`))
      return `bg-blue-900 ${opacity}`;

    if (name.toLocaleLowerCase().includes(`postgres`))
      return `bg-cyan-900 ${opacity}`;

    if (name.toLocaleLowerCase().includes(`redux`))
      return `bg-indigo-900 ${opacity}`;

    if (name.toLocaleLowerCase().includes(`vite`))
      return `bg-violet-900 ${opacity}`;

    if (name.toLocaleLowerCase().includes(`tailwind`))
      return `bg-emerald-900 ${opacity}`;

    if (name.toLocaleLowerCase().includes(`grap`))
      return `bg-fuchsia-900 ${opacity}`;

    if (name.toLocaleLowerCase().includes(`prisma`))
      return `bg-slate-600 ${opacity}`;

    if (name.toLocaleLowerCase().includes(`nextjs`))
      return `bg-slate-900 ${opacity}`;
  };

  
  

  return (
    <div className={`card w-[350px] lg:w-[380px] h-350 lg:h-[600px] ${tema == "dracula"? "bg-base-300" : "bg-zinc-200"} shadow-xl `}>
      
      <figure>
        <Carru img={img}></Carru>
      </figure>
    
      <div className="relative card-body justify-center items-center lg:justify-start lg:items-start pt-0"> 
      
        <h2 className="card-title">{title}</h2>
        <p className="">Proyecto {typo}</p>
        <Modal name={title} des={des} tec={imgArray}></Modal>

        {/* Contenedor de tecnologias */}
        <div className="card-actions justify-center lg:justify-start mb-5 lg:mb-16">
          {imgArray.map((item) => {
            return (
              <div
                className={`badge badge-outline border-0 text-xs h-6 lg:h-8 ${handleColor(
                  item[0]
                )}`}
              >
                <img
                  className="rounded-full m-1"
                  width={16}
                  height={16}
                  src={item[1]}
                ></img>
                <p className="text-white">{item[0]}</p>
              </div>
            );
          })}
        </div>

        <div className=" lg:absolute lg:bottom-3 lg:right-3 justify-center flex gap-x-3 items-center mb-2">
          {
                repo == ""? " " : <a href={repo} target="_blank">
                <button className="btn btn-outline btn-secondary  ">
                  Repositorio
                  <Github size={18} />
                </button>
              </a>
          }
          <a href={url} target="_blank">
                {" "}
                <button className="btn btn-outline btn-primary  ">
                  Demo
                  <SquareArrowOutUpRight size={16} />
                </button>
              </a>
        </div>

      </div>
    </div>
  );
}
