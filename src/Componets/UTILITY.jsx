import React from "react";
import unityimg from "../image/png/utelty-img.png"
import Commonbtn from "../common/Commonbtn";
import pageimg from "../image/svg/utielty-ellipe.svg"
const UTILITY = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <div className="utility_bg_img position-relative">
          <div className="container pt-105 pb-40">
            <div className="row">
              <div className="col-lg-6 col-12 order-lg-1 order-2 d-flex flex-column justify-content-center position-relative">
              <p className=" d-xl-block d-none  utitilty_FUDing_text3  ff-grands fw_900 text-32 lh-32 mb-0 text-black opacity-50 text-center ">
                  I love FUDing
                </p>
                <h2 data-aos="zoom-in" className="  ff-inter fw_900 mt-20  mt-26 text-64 lh-77 mb-0 text-black">
                  UTILITY
                </h2>
                <p data-aos="zoom-in" className=" mt-20 about_pheragraph mb-0 ff-inter fw-normal text-16 lh-25 text-black opacty_80">
                  The utility of $LHGG extends beyond its humorous appeal. Holders
                  of $LHGG gain access to exclusive merchandise, events, and
                  community perks. Furthermore, $LHGG serves as a medium of
                  exchange within our ecosystem, facilitating transactions and
                  interactions among community members. Through strategic
                  partnerships and integrations, we aim to expand the utility of
                  $LHGG, creating additional avenues for adoption and growth.
                </p>
               <div data-aos="zoom-in" className=" mt-26"><Commonbtn text="Buy $GrayGensler" bg=" color-yellow "/></div>
              </div>
              <div className="col-lg-6 col-12 order-1 order-lg-2 d-flex justify-content-lg-end justify-content-center position-relative">
                  <img data-aos="zoom-in" src={unityimg} alt="unityimg" />
                  <p className="  d-xl-block d-none utitilty_FUDing_text ff-grands fw_900 text-32 lh-32 mb-0 text-black opacity-50 text-center ">
                  I love FUDing
                </p>
                <p className=" d-xl-block d-none  utitilty_FUDing_text2  ff-grands fw_900 text-32 lh-32 mb-0 text-black opacity-50 text-center ">
                  I love FUDing
                </p>
        
              </div>
            </div>
          </div>
          <img className=" d-lg-block d-none" src={pageimg} alt="pageelipe" />
        </div>
        <div className="  ">
          <div className=" place_box  mb-5   ">
            <h3 data-aos="zoom-in" className=" text-black ff-inter fw_900 text-36 lh-43 mb-0 text-center">
              PLACE YOURSELF ON THE RIGHT SIDE OF HISTORY
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default UTILITY;
