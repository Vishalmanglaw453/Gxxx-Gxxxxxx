import React from "react";
import { Teligram, Tweter } from "./Icon";
import Dactol from "../image/svg/dextools_logo.png.svg";
import Commonbtn from "./Commonbtn";
import { useState } from "react";
const Navbaar = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
  }
  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }

  return (
    <>
      <div className="  bg-black">
        <div className="container pt-35">
          <nav className=" d-flex align-items-center justify-content-between">
            <h3 className=" mb-0 lh-48 text-40 ff-inter fw-bolder text-white">
              Gxxx Gxxxxxx
            </h3>

            <div className={`${
                  nav ? "start-0" : "start_100"
                } mb-0 ps-0   d-flex  mobile_view `}>
              <div
                className="d-flex align-items-center gap-21"
              >
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
              <li className="  pl-42">
                <Commonbtn text="Buy On Uniswap" />
              </li>
            </div>
            <div
              onClick={show}
              className="menu d-block d-lg-none position-relative  z-3"
            >
              <span></span>
              <span className="my-2"></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbaar;
