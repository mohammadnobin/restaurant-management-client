import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";

const Loading = () => {
  return (
    <div className="w-full  h-lvh flex items-center justify-center bg-white z-50">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-[500px] h-[500px]"
      />
    </div>
  );
};

export default Loading;