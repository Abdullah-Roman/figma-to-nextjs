import { Button } from "./button";

const Deals = () => {
  const frame = "/frame.png";
  const almari = "/preview.png";
  const chair = "/chair.png";
  return (
    <>
      <div className="bg-[#647485]">
        <div className="container flex-col  sm:flex sm:flex-row sm:justify-center gap-x-4 ">
          <div className="pt-[12rem]">
            <h1 className="font-mochiy text-white text-2xl">Best Deals</h1>
            <div>
              <p className="text-white text-sm">$77.00</p>
              <p className="text-white font-mochiy pt-11 pb-4">
                Grab your best <br /> offers!!
              </p>
              <Button
                className="bg-white font-bold  font-mochiy rounded-xl px-8"
                variant-outline
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div>
            <img src={frame} alt="" className="sm:pt-60 pt-4 " />
          </div>
          <div>
            <img src={almari} alt="" />
          </div>
          <div>
            <img src={chair} alt="" className="pt-8" />
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] bg-[#CDC9C4]"></div>
    </>
  );
};

export default Deals;
