import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toastifySuccess = () => {
    toast.success("Message sent successfully! 🎉", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
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
      toast.error("Oops! Something went wrong. Please try again. 😕");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="wrapper">
      <div className="nav">
        <div className="nav-container">
          <a href="/" className="return-link">
            ← Return to Home
          </a>
        </div>
      </div>

      <div className="contact-form-container">
        <div className="contact-form">
          <h2>📬 Get in Touch</h2>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name 😊"
                  {...register("name", {
                    required: "Name is required",
                    maxLength: {
                      value: 30,
                      message: "Name should be 30 characters or less",
                    },
                  })}
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email 📧"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject 📝"
                {...register("subject", {
                  required: "Subject is required",
                  maxLength: {
                    value: 75,
                    message: "Subject should be 75 characters or less",
                  },
                })}
              />
              {errors.subject && <span className="error-message">{errors.subject.message}</span>}
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message 💬"
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.message && <span className="error-message">{errors.message.message}</span>}
            </div>
            <button className="submit-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
            </button>
          </form>
          <p className="alternative-contact">
            Alternatively, you can email me directly at{" "}
            <a href="mailto:thanush38@outlook.com" className="email-link">
              Thanush38@outlook.com
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;