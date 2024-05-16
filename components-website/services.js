import React from "react";
import Link from "next/link";


const ServiceSection = () => {
    return (
        <section id="services" className="services">
    <div className="container mb-5">
      <div className="row text-center">
        <h1 className="display-3 fw-bold">Our Services</h1>
        <div className="heading-line mb-1"></div>
      </div>

      {/* START THE DESCRIPTION CONTENT  */}

      <div className="row pb-2 my-3">
        <div className="col-md-6 border-right">
          <div className="service-section-card-light p-4">
            <h2 className="fw-bold text-capitalize text-left">
              Our Services Range From Single Sign-On(SSO), Security Accessments(VAPT) To DevOps/DevSecOps and CRM Anywhere Anytime
            </h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-section-card-light p-4 text-start">
            <p className="fw-light lead">
              Discover HAKXCORE: Your Go-To for Open-Source Cybersecurity, SSO, DevSecOps, and CRM Solutions. Harness the power of open-source tech for robust data protection, seamless access control, and enhanced customer engagement. Your path to a secure and efficient digital future starts here.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* START THE CONTENT FOR THE SERVICES  */}

    <div className="container px-5">

      {/* START THE MARKETING CONTENT  */}
      <div className="row px-0 px-lg-5">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto order-1 order-md-0">
          <div className="services__content order-sm-0">
            <div className="icon d-block fas fa-shield"></div>
            <h3 className="display-3--title mt-1">Single Sign-On(SSO)</h3>
            <p className="lh-lg ">
              Effortless and Secure Access with Custom SSO Solutions!
              Discover seamless authentication and enhanced security through our tailored Single Sign-On (SSO) integration. Elevate user experience with personalized solutions. Contact us to revolutionize your digital access.
            </p>
            <Link href="#contact">
              <button type="button" className="rounded-pill btn-rounded border-primary">Learn more<span><i
                    className="fas fa-arrow-right"></i></span></button>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto text-end">
          <div className="services__pic mx-5">
            <img src="/images/services/sso.svg" alt="marketing illustration" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* START THE WEB DEVELOPMENT CONTENT  */}

      <div className="row px-0 px-lg-5">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto text-start">
          <div className="services__pic mx-5">
            <img src="/images/services/devsecops.svg" alt="web development illustration" className="img-fluid"  />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto">
          <div className="services__content">
            <div className="icon d-block fas fa-code"></div>
            <h3 className="display-3--title mt-1">DevOps/DevSecOps</h3>
            <p className="lh-lg ">
              Empower Your Development with DevOps/DevSecOps Expertise!
              Harness the potential of DevOps and DevSecOps through our expert services. Streamline your development lifecycle, ensuring efficiency, security, and top-notch quality. Partner with us to elevate your development experience.
            </p>
            <Link href="#contact">
              <button type="button" className="rounded-pill btn-rounded border-primary">Learn more<span><i
                    className="fas fa-arrow-right"></i></span></button>
            </Link>
          </div>
        </div>
      </div>

      {/* START THE CLOUD HOSTING CONTENT  */}

      <div className="row px-0 px-lg-5">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto order-1 order-md-0">
          <div className="services__content">
            <div className="icon d-block fas fa-users"></div>
            <h3 className="display-3--title mt-1">Customer Relations</h3>
            <p className="lh-lg ">
              Optimize Relationships with Tailored CRM Solutions!
              At hakxcore, we specialize in enhancing your customer interactions through customized CRM solutions, We have partnered with MACRM a repeated CRM and Business Marketing agency. Streamline operations, gain valuable insights, and elevate satisfaction. Discover the future of efficient customer relationship management with us.
            </p>
            <Link href="#contact">
              <button type="button" className="rounded-pill btn-rounded border-primary">Learn more<span><i
                    className="fas fa-arrow-right"></i></span></button>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services text-end my-auto">
          <div className="services__pic mx-5">
            <img src="/images/services/crm.svg" alt="cloud hosting illustration" className="img-fluid"  />
          </div>
        </div>
      </div>
    </div>
  </section> 

    );
};

export default ServiceSection;