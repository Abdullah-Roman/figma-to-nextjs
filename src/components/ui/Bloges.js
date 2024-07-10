const Bloges = ({ src }) => {
  return (
    <div>
      <img
        src={src}
        alt=""
        className="w-[26rem] h-[16rem] sm:w-[300px] sm:h-[300px] rounded-xl"
      />
      <p className="text-xs text-orange-500 pt-3">sofa</p>
      <p className="text-2xl font bold py-4">DOUBLE SOFA- ATHENS</p>
      <p className="text-xs text-[#979797]">
        Elegant, ergonomic dining chair with premium <br /> materials and modern
        design.
      </p>
    </div>
  );
};

export default Bloges;
