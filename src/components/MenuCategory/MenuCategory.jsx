import MenuSliderCard from "./MenuSliderCard";
import menuslider1 from "../../assets/menuCategory/menuslider1.png";
import menuslider2 from "../../assets/menuCategory/menuslider2.png";
import menuslider3 from "../../assets/menuCategory/menuslider3.png";
import menuslider4 from "../../assets/menuCategory/menuslider4.png";
import menuslider5 from "../../assets/menuCategory/menuslider5.png";
import menuslider6 from "../../assets/menuCategory/menuslider6.png";
import Slider from "react-slick";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const MenuCategory = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40"
        onClick={onClick}
      >
        <div className="p-2 mt-4 rounded-full cursor-pointer bg-orange group-hover:bg-white group-hover:text-black text-white duration-300 inline-block">
          <RiArrowRightSLine size={30} className="mx-auto" />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 z-40"
        onClick={onClick}
      >
        <div className="p-2 mt-4 rounded-full bg-orange group-hover:bg-white group-hover:text-black text-white duration-300 inline-block">
          <RiArrowLeftSLine size={30} className="mx-auto" />
        </div>
      </div>
    );
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="py-24 containerr">
      <h2 className="font-semibold dark:text-white text-3xl pb-10 text-center ">
        Menu Category
      </h2>
      <Slider {...settings}>
        <MenuSliderCard title="Snacks" img={menuslider3} />
        <MenuSliderCard title="Fruits" img={menuslider2} />
        <MenuSliderCard title="Hotdog" img={menuslider4} />
        <MenuSliderCard title="Burger" img={menuslider5} />
        <MenuSliderCard title="pizza" img={menuslider1} />
        <MenuSliderCard title="Drink" img={menuslider6} />
      </Slider>
    </div>
  );
};

export default MenuCategory;
