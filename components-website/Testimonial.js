import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const TestimonialSection = () => {
  const { t } = useTranslation('testimonials');

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
          <h1 className="display-3 fw-bold">{t('heading')}</h1>
          <hr className="mx-auto" />
          <p className="lead pt-1">{t('subheading')}</p>
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
                    <div className="image-container">
                      <Image
                        src="/images/testimonials/Liel-Ran-CEO-DOControl.io.webp"
                        alt="client-1 picture"
                        className="img-fluid rounded-circle"
                        height={400}
                        width={400}
                      />
                      <a href="https://www.linkedin.com/in/lielran" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>

                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Liel Ran</h3>
                      <p className="fw-light">
                        Co-Founder & CTO -{" "}
                        <Link aria-label="DoControl.io" target="_blank" href="https://docontrol.io" rel="noopener noreferrer">
                          DoControl.io
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
{t('quote1')}                  
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
                    <div className="image-container">
                      <Image
                        src="https://blob.hakxcore.io/images/testimonials/Illeana-Gonzalez-CEO-Satechbloc.com.webp"
                        alt="client-2 picture"
                        className="img-fluid rounded-circle"
                        height={400}
                        width={400}
                      />
                      <a href="https://www.linkedin.com/in/ileanagonzxlez/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Ileana Gonzalez</h3>
                      <p className="fw-light">
                      Tech Bloc CEO -{" "}
                        <Link aria-label="SATechBloc" target="_blank" href="https://satechbloc.com" rel="noopener noreferrer">
                          satechbloc.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
{t('quote2')}                  
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
                    <div className="image-container">
                      <Image
                        src="https://blob.hakxcore.io/images/testimonials/Flencio-Falez.webp"
                        alt="client-3 picture"
                        className="img-fluid rounded-circle"
                        height={400}
                        width={400}
                      />
                      <a href="#" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Falencio Arribas</h3>
                      <p className="fw-light">LLC</p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
{t('quote3')}                  
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
                    <div className="image-container">
                      <Image
                        src="https://blob.hakxcore.io/images/testimonials/Kevin-Blackwood-Lenfestinstitute.org.webp"
                        alt="client-4 picture"
                        className="img-fluid rounded-circle"
                        height={400}
                        width={400}
                      />
                      <a href="https://www.linkedin.com/in/kevin-blackwood-4a18291/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Kevin Blackwood</h3>
                      <p className="fw-light">
                        Founder -{" "}
                        <Link
                          aria-label="Lenfest Institute Organisation"
                          target="_blank"
                          href="https://www.lenfestinstitute.org/"
                          rel="noopener noreferrer"
                        >
                          Lenfestinstitute Organisation
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
{t('quote4')}                  
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>

              {/* CAROUSEL ITEM 5 */}
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
                    <div className="image-container">
                      <Image
                        src="https://blob.hakxcore.io/images/testimonials/Pradeep-Naangal-CEO-Kayzworks.com.webp"
                        alt="client-4 picture"
                        className="img-fluid rounded-circle"
                        height={400}
                        width={400}
                      />
                      <a href="https://www.linkedin.com/in/pradeep-naangal" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Pradeep Naangal</h3>
                      <p className="fw-light">
                        Founder -{""}
                        <Link
                          aria-label="Kayzworks IT Services Firm"
                          target="_blank"
                          href="https://kayzworks.com/"
                          rel="noopener noreferrer"
                        >
                          Kayzworks IT Services Firm
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
{t('quote5')}                  
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>

              {/* CAROUSEL ITEM 6 */}
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
                    <div className="image-container">
                      <Image
                        src="https://blob.hakxcore.io/images/testimonials/Martin-Fisher-CEO-Resultsyoucanmeasure.co.uk.webp"
                        alt="client-4 picture"
                        className="img-fluid rounded-circle"
                        height={400}
                        width={400}
                      />
                      <a href="https://www.linkedin.com/in/martingfisher/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Martin G Fisher</h3>
                      <p className="fw-light">
                        Founder -{""}
                        <Link
                          aria-label="Results you can measure"
                          target="_blank"
                          href="https://resultsyoucanmeasure.co.uk/"
                          rel="noopener noreferrer"
                        >
                          Results you can measure
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
{t('quote6')}                  
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>

              {/* CAROUSEL ITEM 7 */}
              <div className="carousel-item">
                {/* testimonial card */}
                <div className="testimonials__card mx-auto d-flex justify-content-between align-items-center">
                  <div className="left-content">
                    <div className="ratings p-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    {/* client picture */}
                    <div className="image-container">
                      <Image
                        src="https://blob.hakxcore.io/images/testimonials/Jiten-Patoliya-108Ideaspace.webp"
                        alt="client-4 picture"
                        className="img-fluid rounded-circle"
                        height={400}
                        width={400}
                      />
                      <a href="https://www.linkedin.com/in/jiten-patoliya/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Jiten-Patoliya</h3>
                      <p className="fw-light">
                      Technical Project Manager @ -{""}
                        <Link
                          aria-label="108 Ideaspace"
                          target="_blank"
                          href="https://108ideaspace.com/"
                          rel="noopener noreferrer"
                        >
                          108 ideaspace inc
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
{t('quote7')}                  
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>

              {/* CAROUSEL ITEM 8 */}
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
                    <div className="image-container">
                      <Image
                        src="https://blob.hakxcore.io/images/testimonials/ralphjones.webp"
                        alt="client-4 picture"
                        className="img-fluid rounded-circle"
                        height={400}
                        width={400}
                      />
                      <a href="mailto:rjones@campinspectors.ca" target="_blank" rel="noopener noreferrer" className="email-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    {/* client name and role */}
                    <div className="testimonials__name">
                      <h3>Ralph Jones</h3>
                      <p className="fw-light">
                        Operations Manager @ -{""}
                        <Link
                          aria-label="108 Ideaspace"
                          target="_blank"
                          href="https://lodgex.ca/"
                          rel="noopener noreferrer"
                        >
                          LodgeX Services
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="lh-lg right-content">
                    <i className="fas fa-quote-left"></i>
{t('quote8')}                  
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
            background-color: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .left-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .right-content {
            padding-left: 20px;
          }

          .image-container {
            position: relative;
            width: 100px;
            height: 100px;
          }

          .testimonials__card img {
            width: 100px;
            height: 100px;
            border: 0.325rem solid rgba(72, 100, 186, 0.7);
          }

          .linkedin-icon {
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: white;
            border-radius: 50%;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            color: #0077b5;
            transition: transform 0.2s ease;
            cursor: pointer;
          }

          .linkedin-icon:hover {
            transform: scale(1.1);
          }

          .testimonials__card .ratings {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
            margin-top: 20px;
          }

          .testimonials__name {
            padding-top: 0px;
          }

          .testimonials__name h3 {
            font-size: 1.2rem;
            color: #333;
            margin: 0;
          }

          .testimonials__name p {
            font-size: 1rem;
            color: #666;
            margin: 0;
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialSection;
