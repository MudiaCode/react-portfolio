import React from "react";

function Section1() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4 m-5 place-items-center mt-36">
        <div className=" leading-[5rem]">
          <p className=" text-cyan-400 font-bold font-JetBrainsMono">
            Hi, my name is
          </p>
          <h1 className=" font-BebasNeue text-8xl font-bold text-gray-500">
            MUDIA OSAGIE
          </h1>
          <h1 className=" font-BebasNeue text-8xl font-bold text-gray-300">
            I CREATE WEBSITES..
          </h1>
          <p className=" text-white">
            I'm a front-end software developer making websites that you
            <span className=" text-cyan-400 opacity-100"> desire</span>
          </p>
        </div>
        <img className=" float w-4/6" src="src/images/Snap (2).png" alt="" />
      </div>
    </section>
  );
}

export default Section1;
