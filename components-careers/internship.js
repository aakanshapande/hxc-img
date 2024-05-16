import React from "react";

const InternshipProgram = () => {
    return (
        <div className="container-fluid internship-program-section p-5 mb-5">
      <div className="row justify-content-center intern-container">
        <div className="col-auto bg-primary internship-program-title py-1 px-5">
          <h3>Internship Programs hakxcore.com</h3>
        </div>

        <div className="row intern-section-content">
          <div className="col-lg-7 p-5">
            <div className="row intern-section-heading">
              <div className="col-12">
                <h1>
                  get your <br/>
                <span>experience <br/> </span> 
                you need
                </h1>
              </div>
            </div>
            <div className="row intern-section-para mb-3">
              choose your category in your passionable cybersecurity subfeild
            </div>
            <div className="row find-btn">
              <div className="col-auto">
                <button className="p-3">
                  find for me
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 internship-tech-icon img-fluid">
            <div className="row ">
              <div className="col-5 align-self-center">
                <img src="images-careers/intern-section-icon1.png" alt="" className="img-fluid" />
              </div>
              <div className="col-2 align-self-center">
  
              </div>
              <div className="col-5 align-self-center">
                <img src="images-careers/intern-section-icon2.png" alt=""  className="img-fluid" />
              </div>
            </div>
            <div className="row">
              <div className="col-2">
  
              </div>
              <div className="col-5 align-self-center">
                <img src="images-careers/intern-section-icon3.png" alt="" className="img-fluid" />
              </div>
              <div className="col-5  align-self-center">
                <img src="images-careers/intern-section-icon4.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="row">
              <div className="col-4 align-self-center">
                <img src="images-careers/intern-section-icon5.png" alt="" className="img-fluid" />
              </div>
              <div className="col-4 align-self-center">
                <img src="images-careers/intern-section-icon6.png" alt="" className="img-fluid" />
              </div>
              <div className="col-4 align-self-center">
                <img src="images-careers/intern-section-icon7.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    );
};

export default InternshipProgram;