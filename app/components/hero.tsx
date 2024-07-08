'use client'

import { Button } from "@nextui-org/react"
import img from "@/public/es.png"
import Image from "next/image"

export function Hero() {
  return (
    <div className="flex h-full px-36 z-0 justify-center w-full items-center">

        <div className="h-5/6 mt-8 w-full flex flex-col justify-center items-start text-6xl">
            <p className="font-semibold">Luciano Velasquez</p>
            <p className="font-semibold mt-2">Full Stack Developer</p>
            <p className="font-light text-xl mt-6">Soy un Dev web con formación en analista de sistemas y experiencia en proyectos full stack, me especializo en el desarrollo frontend utilizando React. </p>
            <div className="flex gap-x-5 mt-7">
                <Button className="h-[44px] w-40">Proyectos</Button>
                <Button className="h-[44px] w-40">Descargar CV</Button>
            </div>
        </div>

        <div className="h-5/6 mt-8 w-10/12 flex justify-center">
            <Image src={img} alt="" className="object-contain"></Image>
        </div>

    </div>
  )
}