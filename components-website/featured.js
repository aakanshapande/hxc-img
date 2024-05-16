import React from 'react';

const FeaturedSection = () => {
    return (
        <section id="featured-in" className="featured-in">
    <div className="container">
      <div className="row text-center">
        <h4 className="fw-bold lead mb-3">Trusted by companies like</h4>
        <div className="heading-line mb-5"></div>
      </div>
    </div>

    {/* START THE FEATURED IN COMPANIES LIST  */}

    <div className="container slider " >
      <div className="slide-track">
        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-1.png" alt="MACRM Agency"
              title="MACRM Agency" className="img-fluid company-logo"  /></div>
        </div>

        <div className="slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-2.svg" alt="Do Control Org"
              title="Do Control Org" className="img-fluid company-logo"  /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-3.png" alt="Tech Bloc Org"
              title="Tech Bloc Org" className="img-fluid company-logo" /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-4.svg" alt="The Lenfest Institute"
              title="The Lenfest Institute"className="img-fluid company-logo"  /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-5.png" alt="108Ideaspace Org"
              title="108Ideaspace Org" className="img-fluid company-logo"  /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-6.png" alt="Mammoth Interactive"
              title="Mammoth Interactive" className="img-fluid company-logo"  /></div>
        </div>


        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-7.png" alt="acte"
              title="acte" className="img-fluid company-logo"  /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-8.png" alt="practiss.ai"
              title="practiss.ai" className="img-fluid company-logo"  /></div>
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
              title="Do Control Org" className="img-fluid company-logo"  /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-3.png" alt="Tech Bloc Org"
              title="Tech Bloc Org" className="img-fluid company-logo" /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-4.svg" alt="The Lenfest Institute"
              title="The Lenfest Institute"className="img-fluid company-logo"  /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-5.png" alt="108Ideaspace Org"
              title="108Ideaspace Org" className="img-fluid company-logo" /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-6.png" alt="Mammoth Interactive"
              title="Mammoth Interactive" className="img-fluid company-logo"  /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-7.png" alt="acte"
              title="acte" className="img-fluid company-logo"  /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-8.png" alt="practiss.ai"
              title="practiss.ai" className="img-fluid company-logo" /></div>
        </div>

        <div className=" slide_featured_company">
          <div className="featured-in__logo-box shadow-sm"><img src="/images/companies/company-9.png" alt="Tech Courses SL"
              title="Tech Courses SL" className="img-fluid company-logo"  /></div>
        </div>
      </div>
    </div>
    </section>

    );
};

export default FeaturedSection;