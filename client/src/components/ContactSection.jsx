import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { HiChevronDoubleUp } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const ContactSection = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const enabled =
    data.email.length > 0 &&
    data.name.length > 0 &&
    data.message.length >= 80 &&
    data.phone.length >= 10 &&
    data.subject.length > 0;

  const sendButtonClass = enabled
    ? "bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:shadow-lg hover:shadow-gray-600 cursor-pointer"
    : "bg-gray-500";

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm("service_dzulzup", "template_lioodfu", form.current, {
        publicKey: "bvHkCEc2AKvRxYvhk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email envoyé avec succès");
          setData({ name: "", phone: "", email: "", subject: "", message: "" });
        },
        error => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
        <h2 className="py-4">Contactez-moi</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <img
                  className="duration-300 ease-in rounded-xl hover:scale-105 "
                  src="/assets/contact.jpg"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="py-2 text-2xl">Mohamed Amoussa</h3>
                <p>Développeur Front-End</p>
                <p className="flex items-center gap-1">
                  <MdOutlineAlternateEmail /> mohamedj81@hotmail.com
                </p>
                <p className="py-4">
                  Disponible pour des offres à court ou long termes. Contactez-moi.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Restons en contact</p>
                <div className="flex items-center justify-between py-4">
                  <SocialIcons padding="p-6" />
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="py-2 text-sm uppercase">
                      Nom
                    </label>
                    <input
                      name="from_name"
                      value={data.name}
                      onChange={e => setData({ ...data, name: e.target.value })}
                      id="name"
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="py-2 text-sm uppercase">
                      Numéro
                    </label>
                    <input
                      name="phone"
                      value={data.phone}
                      onChange={e => setData({ ...data, phone: e.target.value })}
                      id="phone"
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="py-2 text-sm uppercase">
                    Email
                  </label>
                  <input
                    name="from_email"
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })}
                    id="email"
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="py-2 text-sm uppercase">
                    Objet
                  </label>
                  <input
                    name="subject"
                    value={data.subject}
                    onChange={e => setData({ ...data, subject: e.target.value })}
                    id="subject"
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="py-2 text-sm uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={data.message}
                    onChange={e => setData({ ...data, message: e.target.value })}
                    required
                    minLength={80}
                    id="message"
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    rows="10"></textarea>
                </div>
                <button
                  // onClick={formValidation}
                  disabled={!enabled}
                  id="sendButton"
                  className={`w-full p-4 mt-4 text-gray-100 uppercase duration-300 shadow-xl shadow-gray-400 rounded-xl ${sendButtonClass}`}>
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <a href="#home">
          <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
            <HiChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
