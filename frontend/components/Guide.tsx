import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flex justify-center items-center flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" width={50} height={50} alt="camp" />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with hlink you can find the best places to visit and stay. We
            are here to guide you to the best path. We are here to guide you to
            the best path. We are here to guide you to the best path. We are
            here to guide you to the best path.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-4 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 h-40 w-60">
          <Image src="/meter.svg" alt="meter" width={16} height={158} />
          <div className="flex justify-between flex-col w-full">
            <div className="flex w-full flex-col">
              <div className="flex justify-between w-full">
                <p className="text-sm text-gray-20">Destination</p>
                <p className=" text-sm bold-12 text-green-50">48min</p>
              </div>
              <p className="bold-16 mt-2">Narangala</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="flex justify-between w-full">
                <p className="text-sm text-gray-20">Start track</p>
              </div>
              <p className="bold-16 mt-2 whitespace-nowrap">Badulla</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
