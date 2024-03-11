import { useEffect, useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PhoneOutgoing,MailCheck,Linkedin,Github,FileDown } from 'lucide-react';
import { CornerRightDown,ArrowUp } from 'lucide-react';
const variants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [value, setValue] = useState({
    email: "",
    name: "",
    message: "",
  });

  const isInView = useInView(ref, { margin: "-100px" });

  const changeValue = (e) => {
    const tipoInput = e.target.name;
    const valor = e.target.value;

    switch (tipoInput) {
      case "name":
        setValue({ ...value, name: valor });
        break;

      case "email":
        setValue({ ...value, email: valor });
        break;

      default:
        setValue({ ...value, message: valor });
        break;
    }
  };

  const clearForm = () => {
    setSuccess(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tlrdjqu",
        "template_p4avvlg",
        formRef.current,
        "KPnMYC08xcOJcQUHy"
      )
      .then(
        (result) => {
          setValue({
            email: "",
            name: "",
            message: "",
          });
          return toast.success("Mensaje enviado");
        },
        (error) => {
          setValue({
            email: "",
            name: "",
            message: "",
          });
          return toast.error("Mensaje no enviado");
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact relative"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer justify-center items-center text-center" variants={variants}>

        <motion.h1 variants={variants} className="text-center">
          Trabajemos juntos
        </motion.h1>

        <motion.div className="item " variants={variants}>
          <div className="flex gap-x-2 justify-center items-center">
            <PhoneOutgoing size={16} />
            <h2 className="text-lg" >WhatsApp</h2>
          </div>
          <a href="https://api.whatsapp.com/send?phone=3435174155&text=Hola Luciano!" target="_blank" className="text-lg link link-hover link-primary">
            Enviar al WhatsApp
          </a>
        </motion.div>
        
        <motion.div className="item" variants={variants}>
          <div className="flex gap-x-2 items-center justify-center">
            <MailCheck size={16} />
            <h2 className="text-lg" >Mail</h2>
          </div>
          <a href="mailto:luciano.vel166@gmail.com" className="text-lg link link-hover link-primary">luciano.vel166@gmail.com</a>
        </motion.div>
        
        <motion.div className="item" variants={variants}>
          <div className="flex gap-x-2 justify-center items-center">
          <Linkedin size={16} />
          <h2 className="text-lg">Linkedin</h2>
          </div>
          
          <a href="https://www.linkedin.com/in/lv-dev/" target="_blank" className="text-lg link link-hover link-primary">
            https://www.linkedin.com/in/lv-dev/
          </a>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <div className="flex gap-x-2 justify-center items-center">
            <Github size={16} />
            <h2 className="text-lg">GitHub</h2>
          </div>
          <a href="https://github.com/LucianoVelasquez" target="_blank" className="text-lg link link-hover link-primary">
            https://github.com/LucianoVelasquez
          </a>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <button className="flex btn btn-outline w-fit but-mobile btn-lg md:btn-md">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1C5gpbDUaE5AGTETZShM_eX6HN-kHtBNx/view?usp=sharing"
              >
                Descargar CV
              </a>
            <FileDown size={16}  />
            </button>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          <div className="flex items-start gap-x-5">
            <p className="text-xl">Enviar Mensaje</p> <CornerRightDown size={46} />
          </div>
          <input
            type="text"
            required
            className="input input-bordered input-primary w-full max-w-xl"
            placeholder="Nombre"
            name="name"
            value={value.name}
            onChange={changeValue}
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xl"
            name="email"
            value={value.email}
            onChange={changeValue}
          />
          <textarea
            maxlength="280"
            className="textarea textarea-primary textarea-bordered textarea-lg overflow-clip h-56 w-full max-w-xl "
            placeholder="Mensaje"
            name="message"
            value={value.message}
            onChange={changeValue}
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-md w-full max-w-xl btn-primary "
          >
            Enviar
          </button>
          <ToastContainer
            autoClose={1500}
            position="top-center"
            theme="colored "
          />
        </motion.form>
      </div>
          <div className="md:absolute bottom-0 right-0 md:right-0 md:bottom-4 hover:scale-110 focus:scale-90 bg-primary text-secondary-content rounded-full p-2"><a href="#home"><ArrowUp size={36} /> </a></div>
    </motion.div>
  );
};

export default Contact;
