import React from "react";
import newsimg from "../image/svg/news-img.svg";
import { Newscard } from "../common/Helper";
import Soceillicon from "../common/Soceilicon";
import phone_ellipe from "../image/svg/news-left.svg"
import laptop_ellipe from "../image/svg/news-laptop.svg"
const NEWS = () => {
  return (
    <>
      <div className=" news_bg_img position-relative">
        <img className=" d-lg-block d-none" src={phone_ellipe} alt="phone_ellipe" />
        <img className=" d-lg-block d-none" src={laptop_ellipe} alt="laptop_ellipe" />
        <div className="container pt-125 position-relative">
          <h2 data-aos="zoom-in" className=" text-center  ff-inter fw_900 mt-20  mt-26 text-64 lh-77 mb-0 text-black">
            LATEST NEWS
          </h2>
          <div className=" pt-96 d-flex  flex-wrap justify-content-center  gap-20">
            {Newscard.map((data, index) => (
              <>
                <div data-aos="zoom-in" className=" news_card">
                  <div className=" d-flex align-items-center gap-14">
                    <div>
                      <img src={data.Img} alt="newsimg" />
                    </div>
                    <div className=" d-flex flex-column">
                      <p className=" mb-0 ff-inter fw_900 text-16 lh-19 text-black">
                        {data.name} <span>{data.svg}</span>
                      </p>
                      <p className=" ff-inter fw-normal text-14 lh-25 text-black mb-0">
                        {data.smalpheragraph}
                      </p>
                    </div>
                  </div>
                  <p className=" ff-inter fw-normal text-16 lh-25 mb-0 opacty_80 mt-20">
                    {data.pheragraph}
                  </p>
                  <div className=" d-flex align-items-center justify-content-between pr-22 pt-27">
                    <p className=" text-black  fw-normal text-1483 d-flex align-items-center gap-1   ff-poppins mb-0">
                      {data.commentsvg} <span>{data.text28}</span>
                    </p>
                    <p className=" text-black  fw-normal text-1483 d-flex align-items-center gap-1   ff-poppins mb-0">
                      {data.Refreshsvg} <span>{data.text5}</span>
                    </p>
                    <p className=" text-black  fw-normal text-1483 d-flex align-items-center gap-1   ff-poppins mb-0">
                      {data.Likesvg} <span>{data.text21}</span>
                    </p>
                    <p className=" text-black  fw-normal text-1483 d-flex align-items-center gap-1   ff-poppins mb-0">
                      {data.sharesvg}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <Soceillicon />
    </>
  );
};

export default NEWS;
