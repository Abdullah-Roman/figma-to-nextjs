"use client";
import Slider from "react-slick";
const TestimonialData = [
  {
    id: 1,
    name: "Emily Wilson",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
  {
    id: 2,
    name: "Sara Thomson",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
  {
    id: 3,
    name: "Olivia Martizeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
  {
    id: 5,
    name: "Jhon Wick",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
];

const Feedback = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1 className="text-center font-bold line-4 pt-16 texl-3xl pt-11">
        Feedbacks Corner
      </h1>
      <div className="pt-10">
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id}>
              <div className="flex hover:bg-[#E9F4EE] flex-col gap-6 mx-4  bg-primary/10 relative dark:bg-gray-600 dark:text-white justify-center px-6 py-6 shadow-lg rounded-xl">
                <div className="text-5xl absolute -inset-10 left-6">,,</div>
                <h2 className="text-left font-bold text-3xl">{data.name}</h2>
                <p className="text-gray-500">{data.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
