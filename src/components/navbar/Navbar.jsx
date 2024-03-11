import ThemeController from "./ThemeController";
import { FileDown,Home,FolderTree,Contact,LogOut } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 absolute z-30">
      <div className="navbar-start">
        <div className="drawer fixed top-0 mt-2">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-ghost btn-circle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              
            </label>
          </div>
          <div className="drawer-side" >
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay hover:scale-105"
            ></label>
            <ul  className="menu p-4 w-72 min-h-full bg-base-200 text-base-content justify-center items-center drop-shadow-xl gap-y-4">
              {/* Sidebar content here */}
              
              <li className="flex">
                <a href="#home" className="flex  items-center text-center text-3xl hover:scale-105 focus:scale-95 gap-x-2 "><Home size={26}/> Inicio</a>
              </li>
              <li>
              <a className="flex text-center items-center text-3xl hover:scale-105 focus:scale-95 gap-x-2  " target="_blank" href="https://drive.google.com/file/d/1C5gpbDUaE5AGTETZShM_eX6HN-kHtBNx/view?usp=sharing">
               <FileDown size={24}  />Descargar CV</a>
              </li>
              <li>
                <a href="#portafolio" className="flex text-center items-center text-3xl hover:scale-105 focus:scale-95 gap-x-2 "> <FolderTree size={26} />Proyectos</a>
              </li>
              <li>
                <a href="#contact" className="flex text-center gap-x-2 items-center text-3xl hover:scale-105 focus:scale-95 "> <Contact size={26} />Contactame</a>
              </li>
              <li>
              <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay hover:scale-105"
            >Cerrar <LogOut size={20} /></label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-center">
      </div>
      <div className="navbar-end z-30">
        <button className="btn btn-outline d2"><a target="_blank" href="https://drive.google.com/file/d/1C5gpbDUaE5AGTETZShM_eX6HN-kHtBNx/view?usp=sharing">
        Descargar CV</a><FileDown size={16}  /></button>
        <ThemeController></ThemeController>
      </div>
    </div>
  );
};

export default Navbar;
