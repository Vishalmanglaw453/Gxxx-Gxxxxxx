import React from "react";
import Navbaar from "../common/Navbaar";
import Commonbtn from "../common/Commonbtn";
import { useState } from "react";
import { File_icon } from "../common/Icon";
import gg_img from "../image/png/gg-hero-img.png";
const Hero = () => {
  const [inputValue, setInputValue] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setInputValue(file.name);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div className=" bg-black position-relative">
        <Navbaar />
        <div className="container  pt-136 pb-91">
          <h2 className=" ff-inter fw_900 text-108 lh-130 text-white">
            G<span className=" color_yellow">G</span>
          </h2>
          <p className=" position-relative z-1 mb-0 ff-inter fw-semibold text-20 lh-24 text-capitalize  text-white">
            Join The <span className=" color_yellow">Worldwide Blockchain</span>{" "}
            Protest Against Corrupt{" "}
            <span className=" d-lg-block">Government Bodies</span>
          </p>

          <div className=" d-flex gap-20 pt-62 ">
            <Commonbtn text="Buy $GrayGensler" />
            <Commonbtn text="How To Buy?" />
          </div>
          <div className="input-container mt-36  d-flex  align-items-center position-relative z-1">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="dwqjddj324dnewdne3dewrrets"
              className=" ff-inter fw-normal text-20  lh-30 text-white bg-transparent border-0"
            />
            <label htmlFor="file-upload" className="file-upload-label">
              <File_icon />
            </label>
            <input
              type="file"
              id="file-upload"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <img src={gg_img} alt="hero-img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
