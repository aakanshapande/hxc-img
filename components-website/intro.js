import React from 'react';
import Link from 'next/link';

const IntroSection = () => {
  return (
    <section id="home" className="intro-section intro-section-light">
      <div className="container">
        <div className="row align-items-center text-white">
          {/* START THE CONTENT FOR THE INTRO */}
          <div className="col-md-6 intros text-start">
            <h1 className="display-2">
              <span className="display-2--intro">Hi!, Welcome to hakxcore</span>
              <span className="display-2--description lh-base">
                We're a cybersecurity digital agency with expertise in a diverse range of digital services and solutions
              </span>
            </h1>
            <Link href="#contact">
              <button type="button" className="rounded-pill btn-rounded">
                Get in Touch<span><i className="fas fa-arrow-right"></i></span>
              </button>
            </Link>
          </div>
          {/* START THE CONTENT FOR THE VIDEO */}
          <div className="col-md-6 intros text-end">
            <div className="video-box">
              <img src="images/art/intro-section-illustration.png" alt="video illustration" className="img-fluid" />
              {/* <Link href="#" className="glightbox position-absolute top-50 start-50 translate-middle">
                <span>
                  <i className="fas fa-play-circle"></i>
                </span>
                <span className="border-animation border-animation--border-1"></span>
                <span className="border-animation border-animation--border-2"></span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          className="svg-path-color"
          d="M0,96L48,80C96,64,192,32,288,48C384,64,480,128,576,133.3C672,139,768,85,864,80C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default IntroSection;