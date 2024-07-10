import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div>
        <div className="container py-10 pb-[100px] grid place-items-center bg-[#E9F4EE] -z-10 relative">
          <Image
            src="/image.png"
            height={464}
            width={496}
            alt="pic"
            className="sm:z-30"
          />

          <h1 className="z-50 sm:absolute right-[650px] bottom-[320px] text-3xl sm:text-[12rem] font-bold font-mochiy text-[#FFC39A]">
            New
          </h1>

          <h1 className="z-20 sm:absolute top-[360px] left-[540px] text-3xl sm:text-[8rem] lowercase font-mochiy text-[#FF6F00]">
            Arrivals
          </h1>
          <div className="absolute left-[0px] top-[100px]">
            <p className="  sm:block text-xl font-mochiy line rotate-90">
              2024 EDITION
            </p>
          </div>
          <div className="absolute right-[0px] bottom-[65px]">
            <p className=" sm:block text-xl font-mochiy line rotate-90">
              2024 EDITION
            </p>
          </div>

          <div className="absolute right-[350px] top-[100px] hidden sm:block font-bold font-mochiy text-5xl rotate-90 text-white">
            2024{" "}
          </div>
          <Image
            src="/tree.png"
            height={752}
            width={336}
            alt="tree"
            className="absolute left-[0px] sm:left-[197px] top-[8px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
