import Boxes from "./Boxes";

const Chairs = () => {
  const one = "/chairone.png";
  const two = "/chairtwo.png";
  const three = "/chairthree.png";
  return (
    <div className="containers  grid place-items-center grid-cols-1 sm:grid-cols-3 gap-2 pt-28 pb-28">
      <Boxes src={one} />
      <Boxes src={two} />
      <Boxes src={three} />
    </div>
  );
};

export default Chairs;
