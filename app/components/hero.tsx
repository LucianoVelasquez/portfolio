'use client'

import { Button } from "@nextui-org/react"
import img from "@/public/es.png"
import Image from "next/image"

export function Hero() {
  return (
    <div className="flex sm:flex-row flex-col-reverse h-full sm:px-36 px-3 z-0 justify-center w-full items-center mt-10 sm:mt-0">

        <div className="h-5/6 sm:mt-8 w-full flex flex-col justify-center items-center sm:items-start text-4xl sm:text-6xl">
            <h1 className="font-semibold">Luciano Velasquez</h1>
            <h1 className="font-semibold mt-2 text-nowrap">Full Stack Developer</h1>
            <h1 className="font-light text-base sm:text-xl mt-6 text-center sm:text-start">Soy un Dev web con formación en analista de sistemas y experiencia en proyectos full stack, me especializo en el desarrollo frontend utilizando React. </h1>
            <div className="flex gap-x-5 mt-7">
                <a href="#proyectos"><Button variant="faded" className="h-[44px] w-40 ">Proyectos</Button></a>
                <a href="#" target="_blank"><Button variant="faded" className="h-[44px] w-40 bg-opacity-80">Descargar CV</Button></a>
            </div>
        </div>

        <div className="sm:h-5/6 h-64 mt-20 sm:w-full flex justify-center">
            <Image src={img} alt="" className="object-cover w-60 sm:w-full"></Image>
        </div>

    </div>
  )
}