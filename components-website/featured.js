import React from 'react';

const FeaturedSection = () => {
  return (
    <section id="featured-in" className="featured-in">
      <div className="container">
        <div className="row text-center mb-5">
          {/* START THE NEW CARDS SECTION */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <i className="card-title fa-solid fa-business-time"></i>
                <h5 className="card-title">Book a Consultation</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <i className="card-title fa-sharp-duotone fa-solid fa-users"></i>
                <h5 className="card-title">Train Your Employees</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <i className="card-title fa-solid fa-building"></i>
                <h5 className="card-title">Hire Us as an Agency</h5>
              </div>
            </div>
          </div>
          {/* END THE NEW CARDS SECTION */}

          <div className="col-12">
            <h4 className="fw-bold lead mb-3" style={{'marginTop': '8rem'}}>Trusted by companies like</h4>
            <div className="heading-line mb-5"></div>
          </div>
        </div>
      </div>

      {/* START THE FEATURED IN COMPANIES LIST  */}

      <div className="container slider " >
        <div className="slide-track">
          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-1.png" alt="MACRM Agency"
              title="MACRM Agency" className="img-fluid company-logo" /></div>
          </div>

          <div className="slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-2.svg" alt="Do Control Org"
              title="Do Control Org" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-3.png" alt="Tech Bloc Org"
              title="Tech Bloc Org" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-4.svg" alt="The Lenfest Institute"
              title="The Lenfest Institute" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-5.png" alt="108Ideaspace Org"
              title="108Ideaspace Org" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-6.png" alt="Mammoth Interactive"
              title="Mammoth Interactive" className="img-fluid company-logo" /></div>
          </div>


          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-7.png" alt="acte"
              title="acte" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-8.png" alt="practiss.ai"
              title="practiss.ai" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-9.png" alt="Tech Courses SL"
              title="Tech Courses SL" className="img-fluid company-logo" /></div>
          </div>

          {/* same logo duplicate  */}

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-1.png" alt="MACRM Agency"
              title="MACRM Agency" className="img-fluid company-logo" /></div>
          </div>

          <div className="slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-2.svg" alt="Do Control Org"
              title="Do Control Org" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-3.png" alt="Tech Bloc Org"
              title="Tech Bloc Org" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-4.svg" alt="The Lenfest Institute"
              title="The Lenfest Institute" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-5.png" alt="108Ideaspace Org"
              title="108Ideaspace Org" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-6.png" alt="Mammoth Interactive"
              title="Mammoth Interactive" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-7.png" alt="acte"
              title="acte" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-8.png" alt="practiss.ai"
              title="practiss.ai" className="img-fluid company-logo" /></div>
          </div>

          <div className=" slide_featured_company">
            <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-9.png" alt="Tech Courses SL"
              title="Tech Courses SL" className="img-fluid company-logo" /></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
            .card {
              border: none;
              border-radius: 10px;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .card:hover {
              transform: translateY(-10px);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }

            .card-body {
              padding: 20px;
              {/* background: linear-gradient(135deg, #4a90e2, #9013fe); */}
              background: linear-gradient(to right, rgba(72, 100, 186, 0.95), rgba(143, 184, 222, 0.95));
              color: white;
              text-align: center;
              border-radius: 10px;
            }

            .card-title {
              font-size: 1.5rem;
              font-weight: bold;
            }

            @media (max-width: 768px) {
              .card {
                margin-bottom: 20px;
              }
            }
        `}
      </style>
    </section>
  );
};

export default FeaturedSection;