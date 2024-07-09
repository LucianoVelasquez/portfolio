import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, Image,Avatar } from "@nextui-org/react";
import ima1 from "@/public/Visual-data.png"
import { Goal, Rocket } from "lucide-react";


export default function Cards() {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-center h-auto sm:h-[250px] w-auto sm:w-[1235px] gap-y-5 sm:gap-x-8 sm:gap-y-0 mt-32 sm:mt-14">

      <Card className="py-4 bg-opacity-50 w-[380px] h-full" isHoverable >
        <CardHeader className="pb-0 pt-2 px-4 flex items-center gap-x-3">
            <Avatar className="mi_filter" src="https://veldev.vercel.app/assets/avatar1-35abddbb.png" size="lg" />
            <h4 className="font-bold text-large">Un poco sobre mi</h4>
        </CardHeader>
        <CardBody className="mt-2">
            <p className="font-normal text-base text-zinc-400">Represento a la generación Z, conocida por su temprano uso de la tecnología. Desde pequeño, crecí inmerso en un ambiente tecnológico, motivándome a estudiar Analista en Sistemas durante dos años</p>
        </CardBody>
      </Card>
      <Card className="py-4 bg-opacity-50 w-[380px] h-full" isHoverable >
        <CardHeader className="pb-0 pt-2 px-4 flex items-center gap-x-3 mt-3">
            <Rocket size={40} strokeWidth={1.25} />
            <h4 className="font-bold text-large">¿Cuáles son mis habilidades?</h4>
        </CardHeader>
        <CardBody className="mt-2">
            <p className="font-normal text-base text-zinc-400">Tengo experiencia en programación, diseño y deportes de contacto, donde he aprendido sobre compañerismo y trabajo en equipo. Soy curioso y estoy comprometido con mi desarrollo profesional continuo.</p>
        </CardBody>
      </Card>
      <Card className="py-4 bg-opacity-50 w-[380px] h-full" isHoverable >
        <CardHeader className="pb-0 pt-2 px-4 flex items-center gap-x-3 mt-3">
            <Goal size={40} strokeWidth={1.25} />
            <h4 className="font-bold text-large">¿Qué busco?</h4>
        </CardHeader>
        <CardBody className="mt-2">

            <p className="font-normal text-base text-zinc-400">Busco integrarme en una empresa tecnológica para desarrollarme profesionalmente, aportando mi pensamiento lógico y habilidades técnicas para contribuir significativamente a sus objetivos.</p>
        </CardBody>
      </Card>
      
    </div>
  );
}
