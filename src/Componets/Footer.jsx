import React from "react";
import Dactol from "../image/svg/dextools_logo.png.svg";
import { Teligram, Tweter } from "../common/Icon";

const Footer = () => {
  return (
    <>
      <div className=" bg-black">
        <div className="container pt-153 pb-120">
          <div className="row">
            <div className="col-lg-4 col-sm-5 col-7 d-flex flex-column justify-content-lg-center ">
              <h2 className=" ff-inter fw_900 text-108 lh-130 text-white">
                G<span className=" color_yellow">G</span>
              </h2>
              <p className=" ff-inter text-16 lh-25 text-white">
                @copyright{new Date().getFullYear()}
              </p>
            </div>
            <div className="col-lg-2 col-sm-4 col-5  pt-13 d-flex  justify-content-between">
              <div className="footer_line"></div>
              <ul className=" gap-18 d-flex flex-column">
                <li className=" mb_12 text-white ff-inter fw-bold text-16 lh-25">
                  QUICK LINKS
                </li>
                <li>
                  <a
                    href=""
                    className=" ff-inter fw-normal text-16 lh-25 text-white"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" ff-inter fw-normal text-16 lh-25 text-white"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" ff-inter fw-normal text-16 lh-25 text-white"
                  >
                    DexTools
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-4 col-6 pt-13 d-flex justify-content-lg-end">
              <div className="d-flex align-items-center gap-21">
                <a href="http://dextools.io/" target="blank">
                  <img src={Dactol} alt="Dactol" />
                </a>

                <a href="https://twitter.com/?lang=en" target="blank">
                  <Tweter />
                </a>

                <a href="https://telegram.org/">
                  <Teligram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
