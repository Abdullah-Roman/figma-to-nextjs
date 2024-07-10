import { FaStar } from "react-icons/fa";
const Tables = ({ src }) => {
  return (
    <div className="pt-40 ">
      <img
        src={src}
        alt="pic"
        className="w-[19rem] h-[20rem] object-cover sm:w-[300px] sm:h-[300px] rounded-xl "
      />
      <p className="font-bold text-[1rem] pt-14">L-SHAPE SOFA-PARIS</p>
      <div className="flex gap-x-6">
        <p>$39.99</p>
        <div className="bg-[#454545] h-[1.25rem] w-[0.25rem]"></div>
        <div className="flex items-center gap-x-3 ">
          <p>5.0</p>
          <span>
            <FaStar className="text-orange-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tables;
