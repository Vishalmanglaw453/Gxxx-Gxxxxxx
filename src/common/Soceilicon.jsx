import React from "react";
import { Teligram2, Tweter2 } from "./Icon";
import dexbox from "../image/svg/dexbox_2.svg";
const Soceilicon = () => {
  return (
    <>
      <div className="bg_yellow">
        <div className="container py-39">
          <div className=" d-flex flex-wrap align-items-center justify-content-between">
            <div data-aos="zoom-in" className=" d-flex  cursel_pointer icons_box  align-items-center  gap-22">
              <Tweter2 />
              <h3 className=" ff-inter text-48 lh-58 text-white mb-0">
                twitter
              </h3>
            </div>
            <div data-aos="zoom-in" className=" d-flex  cursel_pointer icons_box  align-items-center  gap-22">
              <Teligram2 />
              <h3 className=" ff-inter text-48 lh-58 text-white  text-capitalize mb-0">
                Telegram
              </h3>
            </div>
            <div data-aos="zoom-in" className=" d-flex  cursel_pointer icons_box  align-items-center  gap-22">
              <img src={dexbox} alt="dexbox2" />
              <h3 className=" ff-inter text-48 lh-58 text-white mb-0 text-uppercase">
                DEXTOOLS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Soceilicon;
