import { useEffect, useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants} className="text-center">
          Trabajemos juntos
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2 className="text-lg" >WhatsApp</h2>
          <a href="https://api.whatsapp.com/send?phone=3435174155&text=Hola Luciano!" target="_blank" className="text-lg link link-hover link-primary">
            Enviar al WhatsApp
          </a>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <a href="mailto:luciano.vel166@gmail.com" className="link link-hover link-primary">luciano.vel166@gmail.com</a>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Linkedin</h2>
          <a href="https://www.linkedin.com/in/lv-dev/" target="_blank" className="link link-hover link-primary">
            https://www.linkedin.com/in/lv-dev/
          </a>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>GitHub</h2>
          <a href="https://github.com/LucianoVelasquez" target="_blank" className="link link-hover link-primary">
            https://github.com/LucianoVelasquez
          </a>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <button className="btn btn-outline w-5/12 but-mobile">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1C5gpbDUaE5AGTETZShM_eX6HN-kHtBNx/view?usp=sharing"
            >
              Descargar CV
            </a>
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
            className="textarea textarea-primary textarea-bordered textarea-lg w-full max-w-xl"
            placeholder="Mensaje"
            name="message"
            value={value.message}
            onChange={changeValue}
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
    </motion.div>
  );
};

export default Contact;
