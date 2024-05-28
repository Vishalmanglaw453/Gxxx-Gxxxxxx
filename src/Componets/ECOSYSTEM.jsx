import React from "react";
import eccosystam from "../image/png/eccosystam-img.png";
import decbox from "../image/svg/dexbox.svg";
import horse from "../image/svg/horse.svg";
import tweter from "../image/svg/tweter_about.svg";
import teligram from "../image/svg/teligram_about.svg";
import trade from "../image/svg/trade.svg";
import Commonbtn from "../common/Commonbtn";
import eccosystamellipe from "../image/png/eccosystam-ellipes.png"
import  goggleellipes from "../image/svg/about-goggle.svg"
const ECOSYSTEM = () => {
  return (
    <>
      <div className="eccosystam_bg_img position-relative">
        <div className="container pt-203 pb-68">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <img src={eccosystam} alt="eccosystam" />
            </div>
            <div className="col-lg-6 col-12 pt-4">
              <div className=" about_pheragraph">
              <div className=" allicons_box d-flex flex-md-nowrap flex-wrap align-items-center gap-sm-4 gap-2">
                  <a href="http://dextools.io/" target="blank">
                    {" "}
                    <img src={decbox} alt="decbox" />
                  </a>
                  <a href="">
                    {" "}
                    <img src={horse} alt="horse" />
                  </a>
                  <a href="https://twitter.com/?lang=en" target="blank">
                    {" "}
                    <img src={tweter} alt="tweter" />
                  </a>
                  <a href="https://telegram.org/">
                    {" "}
                    <img src={teligram} alt="teligram" />
                  </a>
                  <a href="">
                    {" "}
                    <img src={trade} alt="trade" />
                  </a>
                </div>
                <h2 className="  ff-inter fw_900 mt-20  mt-26 text-64 lh-77 mb-0 text-black">
                ECOSYSTEM
                </h2>
                <p className=" mb-0 ff-inter mt-lg-3 mt-0 fw-normal text-16 lh-25">
                  The $LHGG ecosystem is built upon the principles of
                  inclusivity, humor, and innovation. Our community-driven
                  approach empowers members to actively participate in
                  governance, decision-making, and promotional activities.
                  Through social media campaigns, memes, and creative content,
                  we seek to amplify the message of embracing humor in the
                  crypto space and challenging conventional narratives.
                  Together, we aspire to foster a vibrant and engaging ecosystem
                  where laughter reigns supreme.
                </p>
                <div className=" pt-33">
                <Commonbtn text="Buy $GrayGensler" bg="bg-black " /></div>
              </div>
            </div>
          </div>
        </div>
        <img className="  d-lg-block d-none" src={eccosystamellipe} alt="eccosystamellipe" />
        <img className="  d-lg-block d-none" src={goggleellipes} alt="goggleellipes2" />
      </div>
    </>
  );
};

export default ECOSYSTEM;
