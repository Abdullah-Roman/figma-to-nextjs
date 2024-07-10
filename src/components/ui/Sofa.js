import Image from "next/image";
import Tables from "./Tables";

const Sofa = () => {
  const one = "/sofa1.png";
  const two = "/sofa2.png";
  const three = "/sofa3.png";
  const four = "/sofa4.png";
  const five = "/sofa5.png";
  return (
    <>
      <h1 className="font-bold text-3xl font-mochiy text-center pt-6">
        Hand Pick
      </h1>
      <div className="container grid sm:grid-cols-3">
        <div className="">
          <Tables src={one} />
          <Tables src={two} />
        </div>
        <div>
          <Image
            src={five}
            height={300}
            width={300}
            alt=""
            className="sm:translate-y-[500px]"
          />
        </div>
        <div>
          <Tables src={three} />
          <Tables src={four} />
        </div>
      </div>
    </>
  );
};

export default Sofa;
