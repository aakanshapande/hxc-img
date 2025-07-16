import React from "react";
import { useTranslation } from "react-i18next";

const FaqSection = () => {
  const { t } = useTranslation("faq");

  const faqList = t("accordion", { returnObjects: true });

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="row text-center">
          <h2 className="display-3 fw-bold text-uppercase">{t("heading")}</h2>
          <div className="heading-line"></div>
          <p className="lead">{t("subheading")}</p>
        </div>

        <div className="row mt-5 faq__accordion mx-auto">
          <div className="col-md-12">
            <div className="accordion" id="accordionExample">
              {faqList.map((item, index) => (
                <div className="accordion-item shadow mb-3" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
