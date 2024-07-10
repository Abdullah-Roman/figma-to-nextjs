import Box from "./Box";
// import one from "/one.png";

const Cards = () => {
  const imageOne = "/one.png";
  const imageTwo = "/two.png";
  const imageThree = "/three.png";
  return (
    <div className="z-[999] container grid place-items-center sm:grid-cols-3 gap-2 sm:-mt-16">
      <Box src={imageOne} text="Comfy  Chair" />
      <Box src={imageTwo} text="Comfy  Chair" />
      <Box src={imageThree} text="Vive Living Chair" />
    </div>
  );
};

export default Cards;
