import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, Image,Avatar } from "@nextui-org/react";
import ima1 from "@/public/Visual-data.png"
import { Goal, Rocket } from "lucide-react";


export default function Cards() {
  return (
    <div className=" flex items-center justify-center h-[250px] w-[1235px] gap-x-8 mt-14">
      <Card className="py-4 bg-opacity-50 w-[380px] h-full" isHoverable >
        <CardHeader className="pb-0 pt-2 px-4 flex items-center gap-x-3">
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
            <h4 className="font-bold text-large">Un poco sobre mi</h4>
        </CardHeader>
        <CardBody className="mt-2">
            {/* <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
            /> */}
            <p className="font-normal text-base text-zinc-400">Represento a la generación Z, conocida por su temprano uso de la tecnología. Desde pequeño, crecí inmerso en un ambiente tecnológico, motivándome a estudiar Analista en Sistemas durante dos años</p>
        </CardBody>
      </Card>
      <Card className="py-4 bg-opacity-50 w-[380px] h-full" isHoverable >
        <CardHeader className="pb-0 pt-2 px-4 flex items-center gap-x-3 mt-3">
            <Rocket size={40} strokeWidth={1.25} />
            <h4 className="font-bold text-large">¿Cuáles son mis habilidades?</h4>
        </CardHeader>
        <CardBody className="mt-2">
            {/* <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
            /> */}
            <p className="font-normal text-base text-zinc-400">Tengo experiencia en programación, diseño y deportes de contacto, donde he aprendido sobre compañerismo y trabajo en equipo. Soy curioso y estoy comprometido con mi desarrollo profesional continuo.</p>
        </CardBody>
      </Card>
      <Card className="py-4 bg-opacity-50 w-[380px] h-full" isHoverable >
        <CardHeader className="pb-0 pt-2 px-4 flex items-center gap-x-3 mt-3">
            <Goal size={40} strokeWidth={1.25} />
            <h4 className="font-bold text-large">¿Cuáles son mis habilidades?</h4>
        </CardHeader>
        <CardBody className="mt-2">
            {/* <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
            /> */}
            <p className="font-normal text-base text-zinc-400">Busco integrarme en una empresa tecnológica para desarrollarme profesionalmente, aportando mi pensamiento lógico y habilidades técnicas para contribuir significativamente a sus objetivos.</p>
        </CardBody>
      </Card>
      
    </div>
  );
}
