import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { AtSign, ExternalLink, Github, Linkedin } from "lucide-react";

export default function FooterSec(){
    return(
        <div className="flex flex-col justify-center items-center mt-60">
            <h1 className="text-5xl sm:text-6xl font-extrabold">Contactame</h1>
            <h2 className="text-lg sm:text-xl mt-2 text-zinc-400">Por algunos de estos medios</h2>
            
            <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-x-5">

            <a href="https://github.com/LucianoVelasquez" target="_blank">
            <Card className="bg-opacity-50 w-[300px] h-full mt-5 sm:mt-14" isHoverable >
                <CardHeader className="pb-0 flex items-end gap-x-3">
                    <Github size={36}/>
                    <div className="flex justify-center items-center gap-x-2">
                        <h1 className="font-bold text-lg">Git Hub</h1>
                        <ExternalLink size={18} />
                    </div>
                </CardHeader>
                <CardBody className="mt-2">
                    <h1 className="font-medium text-base text-zinc-500" >Ver proyectos en los que estoy trabajando actualmente</h1>
                </CardBody>
            </Card>
            </a>

            <a href="https://www.linkedin.com/in/lv-dev/" target="_blank">
            <Card className="bg-opacity-50 w-[300px] h-full mt-5 sm:mt-14" isHoverable >
                <CardHeader className="pb-0 flex items-end gap-x-3">
                    <Linkedin size={36} />
                    <div className="flex justify-center items-center gap-x-2">
                    <h1 className="font-bold text-large">LinkedIn</h1>
                        <ExternalLink size={18} />
                    </div>
                </CardHeader>
                <CardBody className="mt-2">
                    <h1 className="font-medium text-base text-zinc-500" >Sígueme en LinkedIn, la plataforma donde soy más activo</h1>
                </CardBody>
            </Card>
            </a>

            <Card className=" bg-opacity-50 w-[300px] h-full mb-14 sm:mb-0 mt-5 sm:mt-14" isHoverable >
                <a href="https://api.whatsapp.com/send?phone=3435174155&text=Hola Luciano!" target="_blank">
                <CardHeader className="pb-0  flex items-end gap-x-3">
                    <AtSign size={36} />
                    <div className="flex justify-center items-center gap-x-2">
                        <h1 className="font-bold text-large">Contacto</h1>
                        <ExternalLink size={18} />
                    </div>
                </CardHeader>
                </a>
                <CardBody className="flex flex-col ml-2">
                    <h1 className="font-medium text-base text-zinc-500" >luciano.vel166@gmail.com</h1>
                    <h1 className="font-medium text-base text-zinc-500 mt-1" >+54 3435174155</h1>
                </CardBody>
            </Card>
            </div>
        </div>
    )
}