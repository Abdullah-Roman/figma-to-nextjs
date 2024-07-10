import Image from "next/image";

const Boxes = ({src}) => {
  return (
    <div>
      <Image
        src={src}
        height={368}
        width={400}
        alt=""
        className="sm:w-[300] sm:h-[250] rounded-xl"
      />
    </div>
  );
};

export default Boxes;
