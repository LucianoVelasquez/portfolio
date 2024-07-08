import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { AtSign, ExternalLink, Github, Linkedin } from "lucide-react";

export default function FooterSec(){
    return(
        <div className="flex flex-col justify-center items-center mt-60">
            <h1 className="text-6xl font-extrabold">Contactame</h1>
            <h2 className="text-xl mt-2 text-zinc-400">Por algunos de estos medios</h2>
            
            <div className="flex justify-center items-center gap-x-5">

            <Card className="bg-opacity-50 w-[300px] h-full mt-14" isHoverable >
                <CardHeader className="pb-0 flex items-end gap-x-3">
                    <Github size={36}/>
                    <div className="flex justify-center items-center gap-x-2">
                        <h1 className="font-bold text-lg">Git Hub</h1>
                        <ExternalLink size={18} />
                    </div>
                </CardHeader>
                <CardBody className="mt-2">
                    {/* <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={270}
                    /> */}
                    <h1 className="font-medium text-base text-zinc-500" >Ver proyectos en los que estoy trabajando actualmente</h1>
                </CardBody>
            </Card>

            <Card className="bg-opacity-50 w-[300px] h-full mt-14" isHoverable >
                <CardHeader className="pb-0 flex items-end gap-x-3">
                    <Linkedin size={36} />
                    <div className="flex justify-center items-center gap-x-2">
                    <h1 className="font-bold text-large">LinkedIn</h1>
                        <ExternalLink size={18} />
                    </div>
                </CardHeader>
                <CardBody className="mt-2">
                    <h1 className="font-medium text-base text-zinc-500" >Seguime en LinkedIn plataforma en la que estoy mas activo</h1>
                </CardBody>
            </Card>

            <Card className=" bg-opacity-50 w-[300px] h-full mt-14" isHoverable >
                <CardHeader className="pb-0  flex items-end gap-x-3">
                    <AtSign size={36} />
                    <div className="flex justify-center items-center gap-x-2">
                        <h1 className="font-bold text-large">Contacto</h1>
                        <ExternalLink size={18} />
                    </div>
                </CardHeader>
                <CardBody className="flex flex-col ml-2">
                    <h1 className="font-medium text-base text-zinc-500" >luciano.vel166@gmail.com</h1>
                    <h1 className="font-medium text-base text-zinc-500 mt-1" >+54 3435174155</h1>
                </CardBody>
            </Card>
            </div>
        </div>
    )
}