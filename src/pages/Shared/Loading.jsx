import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";

const Loading = () => {
  return (
    <div className="w-full  h-lvh flex items-center dark:bg-dark-black justify-center bg-white z-50">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-full h-[500px]"
      />
    </div>
  );
};

export default Loading;
