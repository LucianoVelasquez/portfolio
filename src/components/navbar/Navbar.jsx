import ThemeController from "./ThemeController";

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
            <ul  className="menu p-4 w-72 min-h-full bg-base-200 text-base-content justify-center items-center drop-shadow-xl">
              {/* Sidebar content here */}
              
              <li>
                <a href="#home" className="text-4xl hover:scale-105 focus:scale-95  ">Inicio</a>
              </li>
              <li>
              <a className="text-4xl hover:scale-105 focus:scale-95  " target="_blank" href="https://drive.google.com/file/d/1C5gpbDUaE5AGTETZShM_eX6HN-kHtBNx/view?usp=sharing">
              Descargar CV</a>
              </li>
              <li>
                <a href="#portafolio" className="text-4xl hover:scale-105 focus:scale-95 ">Proyectos</a>
              </li>
              <li>
                <a href="#contact" className="text-4xl hover:scale-105 focus:scale-95 ">Contactame</a>
              </li>
              <li>
              <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay hover:scale-105"
            >Cerrar</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-center">
      </div>
      <div className="navbar-end z-30">
        <button className="btn btn-outline d2"><a target="_blank" href="https://drive.google.com/file/d/1KZ7AUYcZHksVMTkY0nk7R4mLX_IgsoeF/view?usp=sharing">
        Descargar CV</a></button>
        <ThemeController></ThemeController>
      </div>
    </div>
  );
};

export default Navbar;
