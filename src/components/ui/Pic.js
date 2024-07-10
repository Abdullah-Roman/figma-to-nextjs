import { Button } from "./button";

const Pic = () => {
  return (
    <div className="background-image flex flex-col justify-center items-center">
      <Button
        className="bg-orange-500 text-white font-bold  font-mochiy rounded-xl px-8"
        variant-outline
      >
        Shop The Look
      </Button>
      <h1 className="font-bold text-5xl text-white sm:text-8xl py-6">
        Kitchen
      </h1>
      <p className="text-2xl text-white text-center">
        Creating your beautiful home should <br />
        not Cost the World!
      </p>
    </div>
  );
};

export default Pic;
