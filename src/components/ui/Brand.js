import Image from "next/image";

const Brand = () => {
  const one = "/logo1.png";
  const two = "/logo2.png";
  const three = "/logo3.png";
  const four = "/logo4.png";
  const five = "/logo5.png";
  return (
    <div>
      <h1 className="text-center  font-bold line-5 pt-16 texl-3xl ">
        Top Brands
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 place-items-center pt-12">
        <Image src={one} width={128} height={86} alt="" />
        <Image src={two} width={128} height={86} alt="" />
        <Image src={three} width={128} height={86} alt="" />
        <Image src={four} width={128} height={86} alt="" />
        <Image src={five} width={128} height={86} alt="" />
      </div>
    </div>
  );
};

export default Brand;
