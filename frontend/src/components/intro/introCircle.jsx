import React from "react";

import PlayButton from "@/assets/PlayButton.svg";
import Image from "next/image";

const IntroCircle = () => {
  return (
    <>
      <div className="intro__firstCircle u-d-flex-a-j-center">
        <div className="intro__secondCircle u-d-flex-a-j-center">
          <div className="intro__playButton u-d-flex-a-j-center">
            <Image src={PlayButton} alt="Play Button" />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroCircle;
