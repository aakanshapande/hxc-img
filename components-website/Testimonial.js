import React from "react";
import Link from "next/link";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="testimonials">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          className="svg-path-color"
          d="M0,192L48,176C96,160,192,128,288,144C384,160,480,224,576,224C672,224,768,160,864,160C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="container pt-5">
        <div className="row text-center text-white mb-5">
          <h1 className="display-3 fw-bold">Testimonials</h1>
          <hr className="mx-auto" />
          <p className="lead pt-1">What our clients are saying</p>
        </div>

        {/* START THE CAROUSEL CONTENT */}
        <div className="row align-items-center">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="1500"
            data-bs-pause="hover"
          >
            <div className="carousel-inner">
              {/* CAROUSEL ITEM 1 */}
              <div className="carousel-item active">
                {/* testimonial card */}
                <div className="testimonials__card mx-auto d-flex justify-content-between align-items-center">
                  <div className="left-content">
                    <div className="ratings p-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    {/* client picture */}
                    <div>
                      <img
                        src="/images/testimonials/liel.jpeg"
                        alt="client-1 picture"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Liel Ran</h3>
                      <p className="fw-light">
                        Cofounder -{" "}
                        <Link target="_blank" href="https://docontrol.io">
                          DoControl.io
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
                    Hakxcore revolutionized our digital operations. Their
                    expertise in cybersecurity and SSO integration aligned
                    perfectly with our needs. Highly recommended!" - Liel Ran
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>

              {/* CAROUSEL ITEM 2 */}
              <div className="carousel-item">
                {/* testimonial card */}
                <div className="testimonials__card mx-auto d-flex justify-content-between align-items-center">
                  <div className="left-content">
                    <div className="ratings p-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    {/* client picture */}
                    <div>
                      <img
                        src="/images/testimonials/i-gonzalez.png"
                        alt="client-2 picture"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Ileana Gonzalez</h3>
                      <p className="fw-light">
                        CEO -{" "}
                        <Link target="_blank" href="https://satechbloc.com">
                          satechbloc.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
                    Great experience working with hakxcore, keep the same work
                    going...!
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>

              {/* CAROUSEL ITEM 3 */}
              <div className="carousel-item">
                {/* testimonial card */}
                <div className="testimonials__card mx-auto d-flex justify-content-between align-items-center">
                  <div className="left-content">
                    <div className="ratings p-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    {/* client picture */}
                    <div>
                      <img
                        src="/images/testimonials/client-5.jpg"
                        alt="client-3 picture"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Falencio Arribas</h3>
                      <p className="fw-light">LLC</p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
                    At hakxcore people are very hard working, and super
                    committed to the job and he also wants to deliver a good
                    quality job. They made extra efforts, always listening to my
                    requirements and feedback, and trying to improve. They are
                    cybersecurity expert, I will work with them for a long time.
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>

              {/* CAROUSEL ITEM 4 */}
              <div className="carousel-item">
                {/* testimonial card */}
                <div className="testimonials__card mx-auto d-flex justify-content-between align-items-center">
                  <div className="left-content">
                    <div className="ratings p-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    {/* client picture */}
                    <div>
                      <img
                        src="/images/testimonials/kevin.jpg"
                        alt="client-4 picture"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Kevin Blackwood</h3>
                      <p className="fw-light">
                        Founder -{" "}
                        <Link
                          target="_blank"
                          href="https://www.lenfestinstitute.org/"
                        >
                          Lenfestinstitute Organisation
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
                    Really good experienced Peoples at hakxcore, Liked working
                    with him..
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          className="svg-path-color"
          d="M0,192L48,176C96,160,192,128,288,144C384,160,480,224,576,224C672,224,768,160,864,160C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <style jsx>
        {`
          .testimonials__card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f8f9fa; /* Add a background color for better visibility */
            border-radius: 10px; /* Add some rounding to the corners */
            padding: 20px; /* Add some padding */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
          }

          .left-content {
            display: flex;
            flex-direction: column;
            align-items: center; /* Center align the items */
            text-align: center; /* Center align the text */
          }

          .right-content {
            padding-left: 20px; /* Adjust as needed for spacing */
          }

          .testimonials__card img {
            width: 100px; /* Adjust size as needed */
            height: 100px;
            border: 0.325rem solid rgba(72, 100, 186, 0.7);
          }

          .testimonials__card .ratings {
            display: flex;
            justify-content: center; /* Center align the ratings */
            margin-bottom: 10px; /* Add some space below the ratings */
            margin-top: 20px; /* Add some space below the ratings */
          }

          .testimonials__name {
            padding-top: 0px;
          }

          .testimonials__name h3 {
            font-size: 1.2rem; /* Adjust size as needed */
            color: #333; /* Change color to a darker shade */
            margin: 0; /* Remove default margin */
          }

          .testimonials__name p {
            font-size: 1rem; /* Adjust size as needed */
            color: #666; /* Change color to a slightly darker shade */
            margin: 0; /* Remove default margin */
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialSection;
