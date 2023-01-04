import React from "react";

function Section1() {
  return (
    <section>
      <div className="mx-16 mt-36 mb-0 grid  gap-0 sm:grid-cols-1  md:grid-cols-7  lg:grid-cols-7 xl:grid-cols-7">
        <div className=" col-span-4 m-5 leading-[5rem] md:col-span-7">
          <p className=" font-JetBrainsMono font-bold text-cyan-400 sm:text-sm xs:text-xs xxs:text-[0.63rem]">
            Hi, my name is
          </p>
          <h1 className=" font-BebasNeue text-8xl  font-bold text-gray-500  sm:text-7xl sm:leading-[7rem] xs:text-6xl xs:leading-[7rem] xxs:text-5xl xxs:leading-[1.2rem]">
            MUDIA OSAGIE
          </h1>
          <h1 className=" font-BebasNeue text-8xl   font-bold text-gray-300 sm:text-7xl sm:leading-[2rem] xs:text-6xl xs:leading-[1rem] xxs:text-5xl xxs:leading-[5rem]">
            I CREATE WEBSITES.
          </h1>
          <p className=" text-white sm:text-sm sm:leading-[7rem] xs:text-xs xs:leading-[6rem] xxs:text-[0.63rem] xxs:leading-[1.5rem]">
            I'm a front-end software developer making websites that you
            <span className=" text-cyan-400 opacity-100"> desire</span>
          </p>
        </div>

        {/* image */}
        <img
          className=" float col-span-3 w-5/6 sm:invisible md:invisible xs:invisible xxs:invisible"
          src="src/images/Snap (2).png"
          alt=""
        />
      </div>
    </section>
  );
}
export default Section1;
