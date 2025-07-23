import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const FeaturedSection = () => {
  const { t } = useTranslation('featured');
  const [clientImages, setClientImages] = useState([]);

  useEffect(() => {
    fetch(`${strapiUrl}/api/images-sites?populate=*`)
      .then(res => res.json())
      .then(data => {
        // Only include specific logo names
        const includeNames = [
          'DoControl-logo',
          'Sika-logo',
          'Sphera-logo',
          'ideaspace-logo',
          'results-logo',
          'techblog-logo',
        ];
        const filtered = (data.data || []).filter(entry =>
          includeNames.includes(entry.name) && entry.Image && entry.Image.url
        );
        setClientImages(filtered.map(entry => ({
          name: entry.name,
          url: strapiUrl + entry.Image.url
        })));
      })
      .catch(console.error);
  }, []);

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
                  <h4 className="card-title">{t('book_consultation')}</h4>
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
                  <h4 className="card-title">{t('train_employees')}</h4>
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
                  <h4 className="card-title">{t('hire_agency')}</h4>
                </div>
              </div>
            </a>
          </div>

          {/* Companies Section */}
          <div className="col-12">
            <h4 className="fw-bold lead mb-3" style={{ marginTop: '8rem' }}>
              {t('our_clients')}
            </h4>
            <div className="heading-line mb-5"></div>
          </div>
        </div>

        <div className="slider">
          <div className="slide-track">
            {clientImages.map((client, index) => (
              <div key={index} className="slide_featured_company">
                <div className="featured-in__logo-box shadow-sm">
                  <img
                    src={client.url}
                    alt={client.name}
                    title={client.name}
                    className="img-fluid company-logo"
                    style={{
                      height: '60px',
                      width: 'auto',
                      maxWidth: '140px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                      marginTop: ['Sika-logo', 'Sphera-logo'].includes(client.name) ? '-10px' : undefined
                    }}
                  />
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
        .large-logo {
          max-height: 70px !important;
          max-width: 140px !important;
          width: auto !important;
          height: auto !important;
        }
      `}</style>
    </section>
  );
};

export default FeaturedSection;
