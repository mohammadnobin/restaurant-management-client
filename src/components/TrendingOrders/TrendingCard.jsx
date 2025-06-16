import { motion } from "framer-motion";
import { FaPlus, FaStar } from "react-icons/fa";
import mushroom from "../../assets/menuCategory/menucard2.png";
import { FaStarHalfStroke } from "react-icons/fa6";

const TrendingCard = (props) => {
  // Animation variants
  const imageVariants = {
    rotate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
    initial: { rotate: 0 },
  };

  return (
    <motion.div
      className="p-8 mt-28 dark:bg-dark-black border-2 border-white dark:border-white hover:bg-orange group shadow-sm rounded-[40px] bg-white group"
      initial="initial"
      whileHover="rotate"
    >
      <motion.img
        variants={imageVariants}
        className="w-[250px] rounded-full relative -top-40 left-1/2 -translate-x-1/2 -mb-32"
        src={props.image}
        alt=""
      />
      <h2 className="text-xl font-semibold dark:text-white group-hover:text-white ">
        {props.title}
      </h2>
      <div className="flex items-center pt-2 text-orange group-hover:text-white">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
        <FaStarHalfStroke />
      </div>
      <div className="flex items-center justify-between">
        <div className="">
          <h4 className="text-orange group-hover:text-white">
            ${props.price}
            <del className="text-steel-gray ml-4 group-hover:text-white">
              $8.49
            </del>{" "}
          </h4>
        </div>
        <div className="p-2 mt-4 rounded-full group-hover:text-orange bg-orange group-hover:bg-white  text-white duration-300 inline-block cursor-pointer">
          <FaPlus />
        </div>
      </div>
    </motion.div>
  );
};

export default TrendingCard;
