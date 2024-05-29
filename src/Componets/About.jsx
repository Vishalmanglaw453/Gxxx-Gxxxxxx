import React from "react";
import aboutimg from "../image/png/about-img.webp";
import decbox from "../image/svg/dexbox.svg";
import horse from "../image/svg/horse.svg";
import tweter from "../image/svg/tweter_about.svg";
import teligram from "../image/svg/teligram_about.svg";
import trade from "../image/svg/trade.svg";
import goggle from "../image/svg/about-goggle.svg"

const About = () => {
  return (
    <>
      <div className=" about_bg_img position-relative  ">
        <div className="container pt-288 pb-100">
          <div className="row">
            <div className="col-lg-6 col-12 position-relative" >
              <img data-aos="zoom-in" className=" w-100" src={aboutimg} alt="aboutimg" />
              <p className=" ff-grands fw_900 text-32 lh-32 mb-0 text-black opacity-50 text-center mt-87">
                I love FUDing
              </p>
              <p className=" d-xl-block d-none love_text_postion  ff-grands fw_900 text-32 lh-32 mb-0 text-black opacity-50 text-center ">
                I love FUDing
              </p>
              <p className=" d-xl-block d-none ff-grands love_text_postion2 fw_900 text-32 lh-32 mb-0 text-black opacity-50 text-center ">
                I love FUDing
              </p>
            </div>
            <div className="col-lg-6 col-12 d-flex  justify-content-center">
              <div className=" about_pheragraph">
                <div data-aos="zoom-in" className=" allicons_box d-flex flex-md-nowrap flex-wrap align-items-center gap-sm-4 gap-2">
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
                <h2 data-aos="zoom-in" className="  ff-inter fw_900 mt-20  mt-26 text-64 lh-77 mb-0 text-black">
                  ABOUT US
                </h2>
                <p data-aos="zoom-in" className=" mb-0 ff-inter mt-lg-3 mt-1 fw-normal text-16 lh-25">
                  In the ever-evolving landscape of cryptocurrency, where
                  markets can swing on a tweet and sentiments wield as much
                  power as technical analysis, one figure has recently stepped
                  into the spotlight: Gary Gensler, or as we affectionately call
                  him, GG. With his recent comments on Bitcoin, Gensler stirred
                  the pot of fear, uncertainty, and doubt (FUD), sending
                  shockwaves through the crypto community.
                </p>
                <p data-aos="zoom-in" className=" mb-0 ff-inter mt-lg-3 mt-1 fw-normal text-16 lh-25">
                  But fear not, for in the midst of this whirlwind of emotions,
                  there emerges a beacon of levity and laughter: Let's Hug GG
                  ($LHGG).Hug GG We're not your average token; we're a humorous
                  response to the serious business of crypto. Inspired by
                  Gensler's remarks and the ensuing FUD frenzy, $LHGG aims to
                  inject a healthy dose of humor into the conversation while
                  playfully encouraging individuals to consider selling their
                  Bitcoins.
                </p>
                <p data-aos="zoom-in" className=" mb-0 ff-inter mt-lg-3 mt-1 fw-normal text-16 lh-25">
                  ou see, we believe that in times of uncertainty, a good laugh
                  can be the best antidote. And what better way to address fear
                  than with a hug—from behind, of course! Our slogan, "If you
                  sell your BTC, we'll let you hug GG from behind so tightly,"
                  embodies our playful approach to tackling the anxiety
                  surrounding Bitcoin and the broader crypto market.
                </p>
                <p data-aos="zoom-in" className=" mb-0 ff-inter mt-lg-3 mt-1 fw-normal text-16 lh-25">
                  So, buckle up and get ready for a rollercoaster ride of
                  giggles, hugs, and maybe even a few profitable trades along
                  the way. Because in the world of $LHGG, laughter isn't just
                  the best medicine—it's the best investment strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="  d-lg-block d-none" src={goggle} alt="aboutgoggle" />
      </div>
    </>
  );
};

export default About;
