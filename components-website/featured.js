import React from 'react';

const FeaturedSection = () => {
  const [companies, setCompanies] = React.useState([]);

  React.useEffect(() => {
    const companiesList = [
      { name: 'MACRM Agency', logo: '/images/companies/macrm.avif' },
      { name: 'Do Control Org', logo: '/images/companies/DOControl.io.svg' },
      { name: 'Tech Bloc Org', logo: '/images/companies/Satechbloc.com.avif' },
      { name: 'The Lenfest Institute', logo: '/images/companies/Lenfestinstitute.org.svg' },
      { name: '108Ideaspace Org', logo: '/images/companies/108Ideaspace.com.avif' },
      { name: 'Mammoth Interactive', logo: '/images/companies/MammothInteractive.avif' },
      { name: 'acte', logo: '/images/companies/Acte.com.avif' },
      { name: 'practiss.ai', logo: '/images/companies/practiss.ai.avif' },
      { name: 'Tech Courses SL', logo: '/images/companies/Flencio-Falez-LLC.avif' },
      { name: 'Results You Can Measure', logo: '/images/companies/Resultsyoucanmeasure.co.uk.webp' },
    ];
    setCompanies(companiesList);
  }, []);

  return (
    <section id="featured-in" className="featured-in">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h4 className="fw-bold lead mb-3" style={{ marginTop: '8rem' }}>
              Trusted by companies like
            </h4>
            <div className="heading-line mb-5"></div>
          </div>
        </div>
      </div>

      <div className="container slider">
        <div className="slide-track">
          {companies.map((company, index) => (
            <div key={index} className="slide_featured_company">
              <div className="featured-in__logo-box shadow-sm">
                <img src={company.logo} alt={company.name} title={company.name} className="img-fluid company-logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;