import Bloges from "./Bloges";

const Blog = () => {
  const one = "/blog1.png";
  const two = "/blog2.png";
  const three = "/blog3png.png";
  return (
    <div className="container">
      <h1 className="text-center font-bold line-3 texl-3xl pt-11">Our Blog</h1>
      <div className="pt-20 grid grid-cols-1 sm:grid-cols-3 place-items-center gap-2">
        <Bloges src={one} />
        <Bloges src={two} />
        <Bloges src={three} />
      </div>
    </div>
  );
};

export default Blog;
