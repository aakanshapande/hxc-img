import React from 'react';

const FeaturedSection = () => {
  const companies = [
    { name: 'Do Control Org', logo: 'https://blob.hakxcore.io/images/companies/DOControl.io.svg' },
    { name: 'Tech Bloc Org', logo: 'https://blob.hakxcore.io/images/companies/Satechbloc.com.avif' },
    { name: 'The Lenfest Institute', logo: 'https://blob.hakxcore.io/images/companies/Lenfestinstitute.org.svg' },
    { name: '108Ideaspace Org', logo: 'https://blob.hakxcore.io/images/companies/108Ideaspace.com.avif' },
    { name: 'Mammoth Interactive', logo: 'https://blob.hakxcore.io/images/companies/MammothInteractive.avif' },
    { name: 'acte', logo: 'https://blob.hakxcore.io/images/companies/Acte.com.avif' },
    { name: 'practiss.ai', logo: 'https://blob.hakxcore.io/images/companies/practiss.ai.avif' },
    { name: 'Tech Courses SL', logo: 'https://blob.hakxcore.io/images/companies/Flencio-Falez-LLC.avif' },
    { name: 'Results You Can Measure', logo: 'https://blob.hakxcore.io/images/companies/Resultsyoucanmeasure.co.uk.webp' },
  ];

  return (
    <section id="featured-in" className="featured-in">
      <div className="container">
        <div className="row text-center mb-5">
          {/* Book a Consultation Card */}
          <div className="col-md-4 mb-4">
            <a 
              href="https://calendar.app.google/TzJ8GRKhzddT7Kqp9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-decoration-none"
            >
              <div className="card shadow-sm">
                <div className="card-body">
                  <i className="card-title fa-solid fa-business-time"></i>
                  <h4 className="card-title">Book a Consultation</h4>
                </div>
              </div>
            </a>
          </div>

          {/* Train Your Employees Card */}
          <div className="col-md-4 mb-4">
            <a 
              href="#contact" 
              className="text-decoration-none"
            >
              <div className="card shadow-sm">
                <div className="card-body">
                  <i className="card-title fa-solid fa-users"></i>
                  <h4 className="card-title">Train Your Employees</h4>
                </div>
              </div>
            </a>
          </div>

          {/* Hire Us as an Agency Card */}
          <div className="col-md-4 mb-4">
            <a 
              href="#contact" 
              className="text-decoration-none"
            >
              <div className="card shadow-sm">
                <div className="card-body">
                  <i className="card-title fa-solid fa-building"></i>
                  <h4 className="card-title">Hire Us as an Agency</h4>
                </div>
              </div>
            </a>
          </div>

          {/* Companies Section */}
          <div className="col-12">
            <h4 className="fw-bold lead mb-3" style={{ marginTop: '8rem' }}>
              Our Clients
            </h4>
            <div className="heading-line mb-5"></div>
          </div>
        </div>

        <div className="slider">
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
      </div>

      <style jsx>{`
        .card {
          border: none;
          border-radius: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .card-body {
          padding: 20px;
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
      `}</style>
    </section>
  );
};

export default FeaturedSection;
