import React from "react";
import topblacklayer from "../image/png/TOKENOMICS_top_leyar.png"
import bottomblacklayer from "../image/png/TOKENOMICS_bg_leyar.png"

const TOKENOMICS = () => {
  return (
    <>
      <img className=" w-100" src={topblacklayer} alt="topblacklayer" />
      <div className=" top_bottom_speacing bg-black">  
        <div className="container pb-29 pt-82">
          <div className="row">
            <div className="col-lg-5 col-12">
              <h2 className=" ff-inter fw_900  text-64 lh-77 mb-0 text-white">
                TOKENOMICS
              </h2>
              <p className=" TOKENOMICS_pheragraph mt-20 ff-inter fw-normal text-16 lh-30 mb-0 opacty_80 text-white">
                Let's Hug GG ($LHGG) operates on a deflationary tokenomics model
                designed to incentivize selling Bitcoin. With a fixed total
                supply and a burn mechanism in place, each transaction
                contributes to reducing the circulating supply of $LHGG, thereby
                increasing its scarcity and value over time. Additionally, a
                portion of transaction fees is allocated to liquidity pools,
                ensuring stability and liquidity for $LHGG holders.
              </p>
              <div className="TOKENOMICS_box">
                <p className=" mt-12 mb-0 ff-inter text-20 lh-30 d-flex align-items-center Hug_gap  text-white">
                  <span>Token Name: </span>{" "}
                  <span className=" fw-bold">Let’s Hug GG</span>
                </p>
                <p className=" mt-12 mb-0 ff-inter text-20 lh-30 d-flex align-items-center LHGG_gap text-white">
                  <span> Token Symbol:</span>{" "}
                  <span className=" fw-bold"> $LHGG</span>
                </p>
                <p className=" mt-12 mb-0 ff-inter text-20 lh-30 d-flex align-items-center Billion_gap  text-white">
                  <span> Total Supply: </span>
                  <span className=" fw-bold"> 1 Billion $LHGG</span>
                </p>
                <p className=" mt-12 mb-0 ff-inter text-20 lh-30 d-flex align-items-center Solana_gap  text-white">
                  <span> Total Type: </span>
                  <span className=" fw-bold"> Solana SPL Token</span>
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-12 pt-lg-0 pt-4 d-flex justify-content-lg-end  justify-content-center">
              <div className="Marketing_box_perant d-flex flex-column gap-18 ">
                <div className="  d-flex  justify-content-between gap-xl-0 gap-4 flex-wrap align-items-center">
                  <div className="Marketing_box">
                    <p className=" ff-inter fw-semibold text-20 lh-30 mb-0 text-black text-center">
                      {" "}
                      Marketing & Partnerships
                    </p>
                    <p className="  mt-md-0 mt-2 ff-inter fw-semibold text-32 lh-30 mb-0 text-black text-center">
                      5%
                    </p>
                  </div>
                  <div className="Marketing_box reserve_box">
                    <p className=" ff-inter fw-semibold text-20 lh-30 mb-0 text-black text-center">
                      {" "}
                      Reserve
                    </p>
                    <p className="  mt-md-0 mt-2 ff-inter fw-semibold text-32 lh-30 mb-0 text-black text-center">
                      5%
                    </p>
                  </div>
                  <div className="Marketing_box reserve_box">
                    <p className=" ff-inter fw-semibold text-20 lh-30 mb-0 text-black text-center">
                      {" "}
                      Public Sale
                    </p>
                    <p className="  mt-md-0 mt-2 ff-inter fw-semibold text-32 lh-30 mb-0 text-black text-center">
                      45%
                    </p>
                  </div>
                </div>
                <div className=" d-flex  justify-content-xl-between flex-wrap  gap-xl-0 gap-4 align-items-center">
                 
                  <div className="Marketing_box">
                    <p className=" ff-inter fw-semibold text-20 lh-30 mb-0 text-black text-center">
                      Community Development
                    </p>
                    <p className="  mt-md-0 mt-2 ff-inter fw-semibold text-32 lh-30 mb-0 text-black text-center">
                      15%
                    </p>
                  </div>
                  <div className="Marketing_box">
                    <p className=" ff-inter fw-semibold text-20 lh-30 mb-0 text-black text-center">
                      Ecosystem Fund
                    </p>
                    <p className="  mt-md-0 mt-2 ff-inter fw-semibold text-32 lh-30 mb-0 text-black text-center">
                      10%
                    </p>
                  </div>
                </div>
                <div className="d-flex  justify-content-xl-center" >
                <div className="Marketing_box">
                    <p className=" ff-inter fw-semibold text-20 lh-30 mb-0 text-black text-center">
                      Community Development
                    </p>
                    <p className="  mt-md-0 mt-2 ff-inter fw-semibold text-32 lh-30 mb-0 text-black text-center">
                      15%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className=" w-100" src={bottomblacklayer} alt="bottomblacklayer" />
    </>
  );
};

export default TOKENOMICS;
