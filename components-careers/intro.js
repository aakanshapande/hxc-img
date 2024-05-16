import React from "react";

const IntroSection = () => {
    return (
        <div className="container-auto overflow-hidden" style={{paddingTop : "5rem", marginBottom : "8rem", marginTop : "4rem"}} id="home">
      
      <div className=" container intro-section my-5  position-relative " >
        <div className="container intro-background">
          <div className="row d-flex">
            <div className="col-12">

              <div className="row">
                <div className="col-auto">
                  <img src="images-careers/circle-bottom-right.png" alt=".." id="circle-top-left" className="img-fluid" />
                </div>
                <div className="col-auto">
                  <img src="images-careers/frame-top-right.png" alt=".." id="frame-top-right" className="img-fluid" />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <img src="images-careers/circle-center.png" alt=".." id="circle-center" className="img-fluid" />
                </div>
              </div>

              <div className="row">
                <div className="col-auto">
                  <img src="images-careers/frame-left-bottom.png" alt=".." id="frame-left-bottom" className="img-fluid" />
                </div>
                <div className="col-auto">
                  <img src="images-careers/circle-bottom-right.png" alt=".." id="circle-bottom-right" className="img-fluid" />
                </div>
              </div>

            </div>
          </div>
        
        </div>        

        <div className="row">
          <div className="col-lg-6 intro-section-text">
            <h1>
              Best way To <br/> Showcase your <br/>
              <span className="blue-text highlighted-text">
                Skills
              </span>  <br/>
              Find your career <br/> 
              <span className="blue-text highlighted-text">
                fit
              </span>!
            </h1>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src="images-careers/intro-section-img.png" alt="intro-section img" className="img-fluid intor-section-img " />
          </div>
        </div>

        <div className="row">
          <div className="col-4 apply-now-btn">
            <button className="p-2">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default IntroSection;