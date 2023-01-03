import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="flex space-x-0 justify-between my-8 mx-8 font-JetBrainsMono">
        <a href="">
          <img
            src="src/images/mudialogo.png"
            alt=""
            className=" h-14 drop-shadow-lg"
          />
        </a>

        <ul className=" flex space-x-16 text-xs  my-5  font-thin text-white ">
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
