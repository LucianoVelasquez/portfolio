'use client'
import { Button, Card, CardBody } from "@nextui-org/react";
import { Download, MoveRight } from "lucide-react";


export default function PorfolioSec2(){
    return(
        <div className='mi_section3 rounded-none sm:absolute sm:right-0 w-screen overflow-clip h-60'>
            <Card isBlurred  className='px-3 sm:px-36 h-60 border-t border-b rounded-none dark:border-zinc-900 '>
              <CardBody className=' flex justify-center items-start'>
                <h1 className='text-4xl sm:text-6xl '>Para ver mas</h1>
                <h1 className='text-2xl sm:text-5xl mt-1'>Aplicaciones y proyectos</h1>
                <div className="flex gap-x-3 sm:gap-x-5">
                  <Button variant='ghost' size={window.innerWidth < 425? "md" : "lg"} color='secondary' className='rounded-full  mt-8' >Ver todos
                  <MoveRight size={20}/></Button>
                  <Button variant='solid' color='warning' className='rounded-full  mt-8' size={window.innerWidth < 425? "md" : "lg"}>Descargar CV
                  <Download size={20} /></Button>
                </div>
              </CardBody>
            </Card>
          </div>
    )
}