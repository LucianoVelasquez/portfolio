'use client'
import {Image} from "@nextui-org/image";
import {Chip,Avatar, Button, Card, CardHeader, CardFooter, CardBody} from "@nextui-org/react";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const handleColor = (name : any) => {

    const opacity = "bg-opacity-40 shadow-sm";

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
      return `bg-stone-600 ${opacity}`;
  };

  

export default function CardPortafolio({id,title,typo,desc,desc2,tec,img,repo,url} : any){

    return(
        <div className="flex-col h-[650px] mt-40 mb-52 ">
            <div className={`flex flex-col ${id%2 ==1? "" : "justify-center items-center mb-10"} h-[200px]`}>
                <h1 className={`text-start  text-6xl font-semibold`}>{title}</h1>
                <h2 className={`text-start text-5xl mt-3 font-semibold`}>{typo}</h2>
                <div className={`${id%2 ==1? "" : "ml-5 w-8/12"} flex w-1/2 mt-3 text-xl font-light dark:text-zinc-200 `}>
                    <h1>{desc}</h1>
                </div>
            </div>

            <div className={`flex ${id%2 == 1? "" : "flex-row-reverse"} h-[450px] mt-5 `}>
                <div className="relative w-1/2 flex flex-col">
                    <p className="text-xl font-extralight dark:text-zinc-400">{desc2}</p>
                    <h1 className="mt-8 text-lg">Tecnologias implementadas</h1>
                    <div className="flex flex-wrap gap-x-5 mt-2 gap-y-5 ">
                      {
                        tec.map((array : any) =>{
                            return (
                                <Card className={`p-1.5 bg-opacity-40 shadow-sm ${handleColor(array[0])}`}>
                                    <div className="flex gap-x-2 justify-center items-center">
                                    <Image
                                            alt="Breathing app icon"
                                            className="rounded-sm w-7 h-8 object-contain"
                                            src={array[1]}
                                        />
                                        <h1 className="font-light">{array[0]}</h1>
                                    </div>
                                </Card>
                            )
                        })
                      }
                    </div>
                    <div className="absolute bottom-0 left-0 flex gap-x-5 mb-5">
                      {
                        repo != "" ? <a href={repo} target="_blank"><Button variant="faded" color="default" className="bg-opacity-80" size="lg">Repositorio<Github size={20} /></Button></a> : ""
                      }
                        <a href={url} target="_blank">
                        <Button variant="faded" color="default" size="lg">Demo <SquareArrowOutUpRight size={16} /></Button></a>
                    </div>

                </div>
                <div className={`w-1/2 ${id%2 == 1? "ml-5" : "mr-10"} `}>
                    <Image src={img[0]}
                    className={`${id%2 == 1? "ml-3" : "mr-5"}`}
                    width={580}
                    isBlurred
                    />
                </div>


            </div>
        </div>
    )
}