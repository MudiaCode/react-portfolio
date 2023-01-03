import React from "react";

function Section1() {

  return (
    <section>
      <div className="grid xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-7  sm:grid-cols-1 gap-0  mx-16  mt-36">
        <div className=" leading-[5rem] m-5 col-span-4 md:col-span-7">
          <p className=" text-cyan-400 font-bold font-JetBrainsMono sm:text-sm xs:text-xs xxs:text-[0.63rem]">
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
          className=" float md:invisible sm:invisible xs:invisible xxs:invisible col-span-3 w-5/6"
          src="src/images/Snap (2).png"
          alt=""
        />
      </div>
    </section>
  );
}

export default Section1;
