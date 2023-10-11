import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./Contact.css";
// import NavBar from '../components/NavBar';
import img from "../images/Contact.jpg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const onSubmit = async (data) => {
    try {
      const { name, email, subject, message } = data;

      
      await emailjs.send(
        "service_974f8ir",
        "template_mjww7zc",
        data,
        "7vm_QRIZFU4wQ-4At"
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="Wrapper">
      <div className="Nav">
        <div className="navContainer">
          <div className="return">
            <a href="/">
              <p>Return to Home</p>
            </a>
          </div>
        </div>
      </div>

      <div className="ContactForm">
        <div className="container"></div>
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <h2 className="text-center">Contact Me</h2>
                
                <div className="row2  gap">
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      className="formInput1"
                      placeholder="Name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      name="email"
                      className="formInput1"
                      placeholder="Email address"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                    />
                    {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                <div className="row formRow">
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      className="form-control formInput subject"
                      placeholder="Subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                    />
                    {errors.subject && (
                      <span className="errorMessage">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row formRow">
                  <div className="col">
                    <textarea
                      rows={3}
                      name="message"
                      className="form-control formInput"
                      placeholder="Message"
                      defaultValue={""}
                      {...register("message", {
                        required: true,
                      })}
                    />
                  </div>
                  {errors.message && (
                    <span className="errorMessage">Please enter a message</span>
                  )}
                </div>
                <button className="submit-btn" type="submit">
                  submit here
                </button>
              </form>
              <p className='pTag'>Alternatively, you can reach me at my Email <a href="#" target='_blank' arial-label='email' onClick={() => window.location = 'mailto:thanush38@outlook.com'} className='email'><u>Thanush38@outlook.com</u></a></p>
            </div>
            <ToastContainer toastStyle={{ backgroundColor: "#07bc0c", color:'#fff' }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
