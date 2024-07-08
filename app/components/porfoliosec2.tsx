import { Button, Card, CardBody } from "@nextui-org/react";
import { Download, MoveRight } from "lucide-react";

export default function PorfolioSec2(){
    return(
        <div className='mi_section3 rounded-none absolute right-0 w-screen overflow-clip h-60'>
            <Card isBlurred  className='px-36 h-60 border-t border-b rounded-none dark:border-zinc-900 '>
              <CardBody className=' flex justify-center items-start'>
                {/* <Card className='h-[100px] w-[300px] bg-opacity-50 ml-20'>
                <CardHeader className="pb-0 pt-2 px-4 flex items-center gap-x-3">
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
                    <h4 className="font-bold text-large">Un poco sobre mi</h4>
                </CardHeader>
                </Card> */}
                <h1 className='text-6xl '>Para ver mas</h1>
                <h1 className='text-5xl mt-1'>Aplicaciones y proyectos</h1>
                <div className="flex gap-x-5">
                  <Button variant='ghost' color='secondary' className='rounded-full  mt-8' size='lg'>Ver todos
                  <MoveRight /></Button>
                  <Button variant='solid' color='warning' className='rounded-full  mt-8' size='lg'>Descargar CV
                  <Download size={20} /></Button>
                </div>
              </CardBody>
            </Card>
          </div>
    )
}