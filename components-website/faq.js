import React from "react";

const FaqSection = () => {
    return (
        <section id="faq" className="faq">
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold text-uppercase">Faq</h1>
            <div className="heading-line"></div>
            <p className="lead">Frequently asked questions, get knowledge before hand</p>
          </div>
    
          {/* <!-- ACCORDION CONTENT --> */}
    
          <div className="row mt-5 faq__accordion mx-auto">
            <div className="col-md-12">
              <div className="accordion" id="accordionExample">
    
                {/* <!-- ACCORDION ITEM 1 --> */}
    
                <div className="accordion-item shadow mb-3">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                      aria-expanded="true" aria-controls="collapseOne">
                      What are the main features?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We specializes in Open-Source Solutions covering Cybersecurity, Single Sign-On (SSO), DevSecOps, and CRM. We offer tailored solutions for data protection, seamless access control, and customer engagement.
                    </div>
                  </div>
                </div>
    
                {/* <!-- ACCORDION ITEM 2 --> */}
    
                <div className="accordion-item shadow mb-3">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How does SSO enhance user experience?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Single Sign-On (SSO) allows users to log in once and access multiple applications without re-entering credentials. It simplifies authentication, saves time, and improves usability.
                    </div>
                  </div>
                </div>
    
                {/* <!-- ACCORDION ITEM 3 --> */}
    
                <div className="accordion-item shadow mb-3">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      How can I get started with hakxcore's services?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      To get started, make your scope of work document and simply reach out to us through our contact page, email, or phone. Our team will promptly assist you, understanding your requirements and providing the best solutions tailored to your needs.
                    </div>
                  </div>
                </div>
    
                {/* <!-- ACCORDION ITEM 4 --> */}
    
                <div className="accordion-item shadow mb-3">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Can I be refunded if I am not satisfied?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Absolutely! At hakxcore, we value your satisfaction. If you're not completely satisfied with our services, we have a transparent refund policy in place. You are eligible for a full refund within a specified period, as outlined in our refund policy. Your satisfaction is our priority, and we strive to ensure you are content with the solutions we provide. Feel free to reach out to our support team for further assistance regarding our refund process.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    );
};

export default FaqSection;