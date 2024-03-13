import React from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import SocialIcons from "./SocialIcons";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
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
                <p>Front-End Developper</p>
                <p className="flex items-center gap-1 py-2">
                  <IoPhonePortraitOutline /> +33 6 50 25 02 60
                </p>
                <p className="flex items-center gap-1">
                  <MdOutlineAlternateEmail /> mohamedj81@hotmail.com
                </p>
                <p className="py-4">
                  I am available for freelance, short-time, or full-time positions. Contact me and{" "}
                  {"let's"} talk.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <SocialIcons padding="p-6" />
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="">
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input className="flex p-3 border-2 border-gray-300 rounded-lg" type="text" />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Phone Number</label>
                    <input className="flex p-3 border-2 border-gray-300 rounded-lg" type="text" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input className="flex p-3 border-2 border-gray-300 rounded-lg" type="email" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input className="flex p-3 border-2 border-gray-300 rounded-lg" type="text" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    rows="10"></textarea>
                </div>
                <button className="w-full p-4 mt-4 text-gray-100 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                  Send Message
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
