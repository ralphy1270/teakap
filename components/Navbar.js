import { motion, useAnimate } from "framer-motion";

import teakapLogo from "./assets/logo/teakapLogo.png";
import Image from "next/image";
import { useRef } from "react";

const Navbar = () => {
  const [Home, animateHome] = useAnimate();
  const [About, animateAbout] = useAnimate();
  const [Menus, animateMenus] = useAnimate();
  const [Contacts, animateContacts] = useAnimate();

  return (
    <div className="grid grid-cols-2 px-7 md:px-20 py-5">
      <div className="flex items-center -space-x-3 text-3xl font-semibold">
        <Image className="w-16" src={teakapLogo} alt="Teakap logo" priority />
        <div className="flex flex-col items-center justify-center -space-y-1 uppercase logo-spacing">
          <h2>Teakap</h2>
          <h5 className="text-sm tracking-widest">Milktea Bar & Co.</h5>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-end justify-center h-full font-medium">
        <ul className="flex items-center justify-around space-x-7">
          <li className="group">
            <a
              onMouseEnter={() => {
                animateHome(
                  ".hover-border",
                  {width: "100%" },
                  { type: "tween", duration: 0.1 }
                );
              }}
              onMouseLeave={() => {
                animateHome(
                  ".hover-border",
                  { width: 0 },
                  { type: "tween", duration: 0.1 }
                );
              }}
              className="focus:none font-semibold"
              href="#home"
            >
              Home
            </a>
            <div className="flex flex-col items-center w-full" ref={Home}>
              <div className="hover-border w-0 h-[3px] bg-gray-900"></div>
            </div>
          </li>
          <li>
          <a
              onMouseEnter={() => {
                animateAbout(
                  ".hover-about",
                  {width: "100%" },
                  { type: "tween", duration: 0.1 }
                );
              }}
              onMouseLeave={() => {
                animateAbout(
                  ".hover-about",
                  { width: 0 },
                  { type: "tween", duration: 0.1 }
                );
              }}
              className="focus:none font-semibold"
              href="#about"
            >
              About
            </a>
            <div className="flex flex-col items-center w-full" ref={About}>
              <div className="hover-about w-0 h-[3px] bg-gray-900"></div>
            </div>
          </li>
          <li>
          <a
              onMouseEnter={() => {
                animateMenus(
                  ".hover-menus",
                  {width: "100%" },
                  { type: "tween", duration: 0.1 }
                );
              }}
              onMouseLeave={() => {
                animateMenus(
                  ".hover-menus",
                  { width: 0 },
                  { type: "tween", duration: 0.1 }
                );
              }}
              className="focus:none font-semibold"
              href="#menus"
            >
              Menus
            </a>
            <div className="flex flex-col items-center w-full" ref={Menus}>
              <div className="hover-menus w-0 h-[3px] bg-gray-900"></div>
            </div>
          </li>
          <li>
          <a
              onMouseEnter={() => {
                animateContacts(
                  ".hover-contacts",
                  {width: "100%" },
                  { type: "tween", duration: 0.1 }
                );
              }}
              onMouseLeave={() => {
                animateContacts(
                  ".hover-contacts",
                  { width: 0 },
                  { type: "tween", duration: 0.1 }
                );
              }}
              className="focus:none font-semibold"
              href="#contacts"
            >
              Contacts
            </a>
            <div className="flex flex-col items-center w-full" ref={Contacts}>
              <div className="hover-contacts w-0 h-[3px] bg-gray-900"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
