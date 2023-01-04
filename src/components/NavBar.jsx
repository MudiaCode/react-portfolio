import React from "react";
import Pdf from "../images/General CV.docx.pdf";

function NavBar() {
  return (
    <div>
      <nav className="my-8 mx-8 flex justify-between space-x-0 font-JetBrainsMono">
        <a href="">
          {/* logo */}
          <img
            src="src/images/mudialogo.png"
            alt=""
            className="  absolute h-14 transform drop-shadow-lg transition duration-500 hover:scale-90 sm:h-12 xs:h-12 xxs:h-12"
          />
        </a>
        <button className="group mt-2 space-y-2 rounded border-cyan-400 p-1.5 text-cyan-400 md:hidden lg:hidden xl:hidden">
          <div className="h-1 w-4 transform rounded bg-cyan-400 transition duration-300 group-hover:translate-x-3.5"></div>
          <div className="h-1 w-8 rounded bg-cyan-400"></div>
          <div className="h-1 w-8 rounded bg-cyan-400"></div>
        </button>
        <ul className=" my-5 flex space-x-16  text-xs  font-thin text-white sm:hidden sm:text-[0.6rem] md:text-[0.7rem] xs:hidden xxs:hidden">
          <li>
            <a
              className="transform transition duration-500 hover:text-cyan-400"
              href=""
            >
              <span className="text-cyan-400">01. </span> About
            </a>
          </li>
          <li>
            <a
              className="transform transition duration-500 hover:text-cyan-400"
              href=""
            >
              <span className="text-cyan-400">02. </span> Projects
            </a>
          </li>
          <li>
            <a
              className="transform transition duration-500 hover:text-cyan-400"
              href=""
            >
              <span className="text-cyan-400">03. </span> Contacts
            </a>
          </li>
          <li>
            <div className=" group font-normal text-cyan-400">
              <a
                className=" transform rounded border-2 border-cyan-400 p-2 transition duration-500 group-hover:bg-cyan-400 group-hover:text-gray-700"
                href={Pdf}
              >
                Resume
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
