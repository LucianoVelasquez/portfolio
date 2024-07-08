'use client'
import { motion } from "framer-motion";




export default function Content() {
    const textVariants = {
        initial: {
          x: -500,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.1,
          },
        },
      };
      const SilVariants : any = {
        initial: {
          x: "100%",
        },
        animate: {
          x: "-105%",
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 50,
          },
        },
      };


  return (
    <div className="flex-col text-center justify-center items-center mt-28 ">
        <h1 className="text-5xl font-semibold mb-5">Tecnologias que utilizo</h1>
        <motion.div
        variants={SilVariants}
            initial="initial"
            animate="animate"
            className=" absolute  mi_filter"
        >
            <ul className="flex justify-center items-center select-none gap-x-7 ">
                    <li className="">
                    <img
                        className="h-32 w-24 mr-2"
                        src="https://www.svgrepo.com/show/452228/html-5.svg"
                    ></img>
                    </li>
                    <li>
                    <img
                        className="h-32 w-24 mr-2"
                        src="https://www.svgrepo.com/show/452185/css-3.svg"
                    ></img>
                    </li>
                    <li>
                    <img
                        className="h-28 w-20 mr-5"
                        src="https://www.svgrepo.com/show/354478/typescript-icon.svg"
                    ></img>
                    </li>
                    <li>
                    <img
                        className="h-28 w-20 mr-5"
                        src="https://www.svgrepo.com/show/452234/java.svg"
                    ></img>
                    </li>
                    <li>
                    <img
                        className="h-32 w-24 mr-5"
                        src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
                    ></img>
                    </li>
                    <li>
                    <img
                        className="h-32 w-24 mr-5"
                        src="https://www.svgrepo.com/show/373929/node.svg"
                    ></img>
                    </li>
                    <li>
                    <img
                        className="h-28 w-24 mr-5"
                        src="https://www.svgrepo.com/show/374118/tailwind.svg"
                    ></img>
                    </li>
                    <li>
                    <img
                        className="h-28 w-28 mr-5"
                        src="https://www.svgrepo.com/show/354112/nextjs.svg "
                    ></img>
                    </li>
                    <li>
                    <img
                        className="h-32 w-24 mr-5"
                        src="https://www.svgrepo.com/show/452093/redux.svg"
                    ></img>
                    </li>
                    <li>
                    <img
                        className="h-28 w-20 mr-5"
                        src="https://www.svgrepo.com/show/354200/postgresql.svg"
                    ></img>
                    </li>
                    <li>
                    <img
                        className="h-28 w-20 mr-5"
                        src="https://www.svgrepo.com/show/376350/spring.svg"
                    ></img>
                    </li>
                    <li>
                    <img
                        className="h-32 w-24 mr-5"
                        src="https://www.svgrepo.com/show/376356/aws.svg"
                    ></img>
                    </li>
                </ul>
        </motion.div>
        <div className="hidden md:flex justify-center gap-x-12 w-3/4 h-44 mt-64 ml-28">
                <div>
                    <img alt="content" className="object-center h-full w-full" src="https://camo.githubusercontent.com/3d602bca6bd96f05fa9cf2e3edaec5da9ad4b90862f1609ac32b028283235f83/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d4c756369616e6f56656c61737175657a2673686f775f69636f6e733d7472756526636f756e745f707269766174653d7472756526686964655f626f726465723d74727565"></img>
                </div>
                <div>
                    <img alt="content" className="object-center h-full w-full" src="https://camo.githubusercontent.com/66159bc23e71eb414ebda45e9e0c4ca4e2c8d0c3623b5a5faf9eee3e3af19e40/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d4c756369616e6f56656c61737175657a26686964655f626f726465723d74727565266c61796f75743d636f6d70616374"></img>
                </div> 
        </div>
    </div>
  );
}
