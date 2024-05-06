import "./footer.scss";
import { useMyContext } from "../context/mycontext";
import gitdark from "../../utils/git-dark.svg";
import { Linkedin,Github } from 'lucide-react';
import avatar from '../../utils/avatar3.png'

const Footer = () => {
  const { globalState, updateGlobalState } = useMyContext();
  return (
    <footer className="footer items-center p-4 bg-base-300 text-base-content footer1">
      <aside className="items-center grid-flow-col">
        <img className="w-12 h-12" src={avatar}></img>
        <p>© 2024 - @Luchi.veel</p>
      </aside>
      <nav className="grid-flow-col gap-3 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/lv-dev/">
          <Linkedin size={36} />
        </a>
        <a href="https://github.com/LucianoVelasquez">
          <Github size={36} />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
