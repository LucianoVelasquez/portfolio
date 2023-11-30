import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import Footer from "../footer/footer";
/* import emailjs from "@emailjs/browser"; */

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
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
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
          <motion.h1 variants={variants} className="text-center">Trabajemos juntos</motion.h1>
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>luciano.vel166@gmail.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Linkedin</h2>
            <a className="link link-hover link-primary">
              https://www.linkedin.com/in/lv-dev/
            </a>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>GitHub</h2>
            <a className="link link-hover link-primary">
              https://github.com/LucianoVelasquez
            </a>
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
              placeholder="Name"
              className="input input-bordered input-primary w-full max-w-xl"
              name="name"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xl"
              name="email"
            />
            <textarea
              className="textarea textarea-primary textarea-bordered textarea-lg w-full max-w-xl"
              placeholder="Mensaje"
            ></textarea>
            <button className="btn btn-md w-full max-w-xl btn-primary ">
              Enviar
            </button>
            {error && "Error"}
            {success && "Success"}
          </motion.form>
        </div>
      </motion.div>
  );
};

export default Contact;
