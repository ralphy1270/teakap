import teakapLogo from "./assets/logo/teakapLogo.png";
import Image from "next/image";
import { useHover } from "./hooks/useHover";
import { useRef } from "react";

const Navbar = () => {
  const { scope, linkHover, linkNotHover } = useHover();
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
                linkHover("hover-home");
              }}
              onMouseLeave={() => {
                linkNotHover("hover-home");
              }}
              className="focus:none font-bold"
              href="#home"
            >
              Home
            </a>
            <div className="flex flex-col items-center w-full" ref={scope}>
              <div className="hover-home w-0 h-[3px] bg-gray-900"></div>
            </div>
          </li>
          <li>
            <a href="#about">About</a>
            <div className="w-full">
              <div className="h-[3px] w-full bg-gray-900"></div>
            </div>
          </li>
          <li>
            <a href="#services">Services</a>
            <div className="w-full">
              <div className="h-[3px] w-full bg-gray-900"></div>
            </div>
          </li>
          <li>
            <a href="#contact">Contact</a>
            <div className="w-full">
              <div className="h-[3px] w-full bg-gray-900"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
