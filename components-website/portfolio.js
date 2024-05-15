import React from "react";

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="portfolio">
    <div className="container">
      <div className="row text-center mt-5">
        <h1 className="display-3 fw-bold text-capitalize">Latest work</h1>
        <div className="heading-line"></div>
        <p className="lead">
          Everyday pushing the boundaries of what's possible, Here is our recent projects.
        </p>
      </div>

      {/* <!-- FILTER BUTTONS --> */}

      <div className="row mt-5 mb-4 g-3 text-center">
        <div className="col-md-12">
          <button className="btn btn-outline-primary filter-btn active" type="button" id="all">All</button>
          <button className="btn btn-outline-primary filter-btn" type="button" id="website">SSO</button>
          <button className="btn btn-outline-primary filter-btn" type="button" id="design">Courses</button>
          <button className="btn btn-outline-primary filter-btn" type="button" id="mockup">DevSecOps</button>
          <button className="btn btn-outline-primary filter-btn" type="button" id="mockup">CRM and more</button>
        </div>
      </div>

      {/* <!-- START THE PORTFOLIO ITEMS --> */}

      <div className="row">
        <div className="col-lg-4 col-md-6 portfolio-card" data-tags="all, website">
          <div className="portfolio-box shadow">
            <img src="images/portfolio/portfolio-1.jpg" alt="portfolio 1 image" title="portfolio 1 picture"
              className="img-fluid" />
            <div className="div portfolio-info">
              <div className="caption">
                <a href="images/portfolio/portfolio-1.jpg" className="glightbox2">
                  <i className="fas fa-magnifying-glass mb-3"></i>
                </a>
                <h4>sso project one</h4>
                <p>website</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-card" data-tags="all, design">
          <div className="portfolio-box shadow">
            <img src="images/portfolio/portfolio-2.jpg" alt="portfolio 2 image" title="portfolio 2 picture"
              className="img-fluid" />
            <div className="div portfolio-info">
              <div className="caption">
                <a href="images/portfolio/portfolio-2.jpg" className="glightbox2">
                  <i className="fas fa-magnifying-glass mb-3"></i>
                </a>
                <h4>Design project one</h4>
                <p>design</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-card" data-tags="all, mockup">
          <div className="portfolio-box shadow">
            <img src="images/portfolio/portfolio-3.jpg" alt="portfolio 3 image" title="portfolio 3 picture"
              className="img-fluid" />
            <div className="div portfolio-info">
              <div className="caption">
                <a href="images/portfolio/portfolio-3.jpg" className="glightbox2">
                  <i className="fas fa-magnifying-glass mb-3"></i>
                </a>
                <h4>Course project one</h4>
                <p>OKTA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-card" data-tags="all, design">
          <div className="portfolio-box shadow">
            <img src="images/portfolio/portfolio-4.jpg" alt="portfolio 4 image" title="portfolio 4 picture"
              className="img-fluid" />
            <div className="div portfolio-info">
              <div className="caption">
                <a href="images/portfolio/portfolio-4.jpg" className="glightbox2">
                  <i className="fas fa-magnifying-glass mb-3"></i>
                </a>
                <h4>Course project two</h4>
                <p>commvault</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-card" data-tags="all, website">
          <div className="portfolio-box shadow">
            <img src="images/portfolio/portfolio-5.jpg" alt="portfolio 5 image" title="portfolio 5 picture"
              className="img-fluid" />
            <div className="div portfolio-info">
              <div className="caption">
                <a href="images/portfolio/portfolio-5.jpg" className="glightbox2">
                  <i className="fas fa-magnifying-glass mb-3"></i>
                </a>
                <h4>sso project two</h4>
                <p>website</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-card" data-tags="all, mockup">
          <div className="portfolio-box shadow">
            <img src="images/portfolio/portfolio-6.jpg" alt="portfolio 6 image" title="portfolio 6 picture"
              className="img-fluid" />
            <div className="div portfolio-info">
              <div className="caption">
                <a href="images/portfolio/portfolio-6.jpg" className="glightbox2">
                  <i className="fas fa-magnifying-glass mb-3"></i>
                </a>
                <h4>development project two</h4>
                <p>website</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-card" data-tags="all, design">
          <div className="portfolio-box shadow">
            <img src="images/portfolio/portfolio-7.jpg" alt="portfolio 7 image" title="portfolio 7 picture"
              className="img-fluid" />
            <div className="div portfolio-info">
              <div className="caption">
                <a href="images/portfolio/portfolio-7.jpg" className="glightbox2">
                  <i className="fas fa-magnifying-glass mb-3"></i>
                </a>
                <h4>crm project three</h4>
                <p>opensource crm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-card" data-tags="all, mockup">
          <div className="portfolio-box shadow">
            <img src="images/portfolio/portfolio-8.jpg" alt="portfolio 8 image" title="portfolio 8 picture"
              className="img-fluid" />
            <div className="div portfolio-info">
              <div className="caption">
                <a href="images/portfolio/portfolio-8.jpg" className="glightbox2">
                  <i className="fas fa-magnifying-glass mb-3"></i>
                </a>
                <h4>CRM setup project three</h4>
                <p>salesforce</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-card" data-tags="all, website">
          <div className="portfolio-box shadow">
            <img src="images/portfolio/portfolio-9.jpg" alt="portfolio 9 image" title="portfolio 9 picture"
              className="img-fluid" />
            <div className="div portfolio-info">
              <div className="caption">
                <a href="images/portfolio/portfolio-9.jpg" className="glightbox2">
                  <i className="fas fa-magnifying-glass mb-3"></i>
                </a>
                <h4>crm project three</h4>
                <p>zoho crm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    );
};

export default PortfolioSection;