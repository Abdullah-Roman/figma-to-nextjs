import Tables from "./Tables";

const Arrivals = () => {
  const one = "/tableone.png";
  const two = "/tabletwo.png";
  const three = "/tablethree.png";
  const four = "/tablefour.png";
  const five = "/tablefive.png";
  const six = "/tablesix.png";
  const seven = "/tableseven.png";
  const eight = "/tableeight.png";
  return (
    <div className="container pb-32">
      <h1 className="line-2  text-center font-mochiy font-bold text-5xl sm:text-3xl">
        New Arrival
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Tables src={one} />
        <Tables src={two} />
        <Tables src={three} />
        <Tables src={four} />
        <Tables src={five} />
        <Tables src={six} />
        <Tables src={seven} />
        <Tables src={eight} />
      </div>
    </div>
  );
};

export default Arrivals;
