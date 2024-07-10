import Image from "next/image";

const Box = ({ src, text }) => {
  return (
    <div className="w-[300px] h-[300px] sm:w-[23rem] sm:h-[16rem] shadow-2xl flex flex-col justify-center items-center border border-gray-300 rounded-xl">
      <Image
        src={src}
        height={192}
        width={192}
        alt="pic"
        className="inline-block -mt-[100px] z-[999]"
      />
      <h1 className="font-mochiy text-2xl text-center py-3">{text}</h1>
      <p className="text-orange-500 text-center">$30.50</p>
    </div>
  );
};

export default Box;
