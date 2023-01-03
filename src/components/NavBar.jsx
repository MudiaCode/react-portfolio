import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="flex space-x-0 justify-between my-8 mx-8 font-JetBrainsMono">
        <a href="">
          {/* logo */}
          <img
            src="src/images/mudialogo.png"
            alt=""
            className="  h-14 sm:h-12 xs:h-12 xxs:h-12 drop-shadow-lg absolute hover:scale-90 transform transition duration-500"
          />
        </a>
        <button className="text-cyan-400 border-cyan-400 lg:hidden md:hidden xl:hidden p-1.5 rounded space-y-2 mt-2 group">
          <div className="w-4 h-1 bg-cyan-400 rounded group-hover:translate-x-2.5 transform transition duration-300"></div>
          <div className="w-7 h-1 bg-cyan-400 rounded"></div>
          <div className="w-7 h-1 bg-cyan-400 rounded"></div>
        </button>
        <ul className=" flex space-x-16 text-xs  my-5  font-thin text-white md:text-[0.7rem] sm:text-[0.6rem] sm:hidden xs:hidden xxs:hidden">
          <li>
            <a
              className="hover:text-cyan-400 transform transition duration-500"
              href=""
            >
              <span className="text-cyan-400">01. </span> About
            </a>
          </li>
          <li>
            <a
              className="hover:text-cyan-400 transform transition duration-500"
              href=""
            >
              <span className="text-cyan-400">02. </span> Projects
            </a>
          </li>
          <li>
            <a
              className="hover:text-cyan-400 transform transition duration-500"
              href=""
            >
              <span className="text-cyan-400">03. </span> Contacts
            </a>
          </li>
          <li>
            <div className=" group font-normal text-cyan-400">
              <a
                className=" border-2 border-cyan-400 p-2 rounded group-hover:bg-cyan-400 group-hover:text-gray-700 transform transition duration-500"
                href=""
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
