import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json"; // লোকেশন অনুসারে path adjust করো

const Loading = () => {
  return (
    <div className="w-full dark:bg-black h-lvh flex items-center justify-center bg-green/80 backdrop-blur-[5px] z-50">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-[500px] h-[500px]"
      />
    </div>
  );
};

export default Loading;