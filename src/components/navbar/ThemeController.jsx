import "./Theme.scss"
import { useMyContext } from "../context/mycontext"

const ThemeController = () => {

  const { globalState, updateGlobalState } = useMyContext();

 

  const handleTheme = (e) =>{
    updateGlobalState({...globalState,tema: e.target.value})
  }

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost m-1 d1">
        Temas
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-auto"
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Default"
            value="default"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Light"
            value="light"
            onChange={handleTheme}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark"
            value="dracula"
            onChange={handleTheme}
          />
        </li>
      </ul>
    </div>
  );
};

export default ThemeController;
