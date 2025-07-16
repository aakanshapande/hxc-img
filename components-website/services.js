import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ServiceSection = () => {
  const { t } = useTranslation('services');
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const progressBarRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections = gsap.utils.toArray(".scroll-section");
    const colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#ba55d3"];

    const setupGSAP = () => {
      gsap.to(sectionRef.current, {
        xPercent: -100 * (sections.length + 2),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 0.6,
          start: "top 150px",
          end: () => `+=${sectionRef.current.scrollWidth - triggerRef.current.clientWidth}`,
          onUpdate: (self) => {
            const progress = self.progress;
            const sectionIndex = Math.floor(progress * sections.length);
            const color = colors[sectionIndex % colors.length];
            progressBarRef.current.style.width = `${progress * 100}%`;
            progressBarRef.current.style.backgroundColor = color;
          },
        },
      });
    };

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
      setupGSAP();
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="services" className="services">
      <div className="container mb-5">
        <div className="row text-center">
          <h2 className="display-3 fw-bold">{t('title')}</h2>
          <div className="heading-line mb-1"></div>
        </div>

        <div className="row pb-2 my-3">
          <div className="col-md-6 border-right">
            <div className="service-section-card-light p-4">
              <h3 className="fw-bold text-capitalize text-left">
                {t('intro_heading')}
              </h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-section-card-light p-4 text-start">
              <p className="fw-light lead">
{t('intro_paragraph')}   
           </p>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="container px-5 scroll-section-inner">
            {/* Start the Marketing Content */}
            <div className="row px-0 px-lg-5 scroll-section">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto order-1 order-md-0">
                <div className="services__content order-sm-0">
                  <div className="icon d-block fas fa-shield"></div>
                  <h3 className="display-3--title mt-1">{t('sso_title')}</h3>
                  <p className="lh-lg">
                    {t('sso_description')}
                    </p>
                  <Link href="#contact">
                    <button type="button" className="rounded-pill btn-rounded border-primary">
{t('learn_more')}<span><i className="fas fa-arrow-right"></i></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto text-end">
                <div className="services__pic mx-5">
                  <img src="/images/services/sso.svg" alt="marketing illustration" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* VAPT Component */}
            <div className="row px-0 px-lg-5 scroll-section">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto order-1 order-md-0">
                <div className="services__content order-sm-0">
                  <div className="icon d-block fas fa-shield-alt"></div>
                  <h3 className="display-3--title mt-1">{t('vapt_title')}</h3>
                  <p className="lh-lg">
{t('vapt_description')}                  </p>
                  <Link href="#contact">
                    <button type="button" className="rounded-pill btn-rounded border-primary">
{t('learn_more')}<span><i className="fas fa-arrow-right"></i></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto text-end">
                <div className="services__pic mx-5">
                  <img src="/images/services/vapt.svg" alt="VAPT illustration" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* DevOps/DevSecOps Component */}
            <div className="row px-0 px-lg-5 scroll-section">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto">
                <div className="services__content">
                  <div className="icon d-block fas fa-code"></div>
                  <h3 className="display-3--title mt-1">{t('devops_title')}</h3>
                  <p className="lh-lg">
{t('devops_description')}                  </p>
                  <Link href="#contact">
                    <button type="button" className="rounded-pill btn-rounded border-primary">
{t('learn_more')}<span><i className="fas fa-arrow-right"></i></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto text-start">
                <div className="services__pic mx-5">
                  <img src="/images/services/devsecops.svg" alt="DevOps/DevSecOps illustration" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* Blockchain Development Component */}
            <div className="row px-0 px-lg-5 scroll-section">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto order-1 order-md-0">
                <div className="services__content order-sm-0">
                  <div className="icon d-block fas fa-link"></div>
                  <h3 className="display-3--title mt-1">{t('blockchain_title')}</h3>
                  <p className="lh-lg">
{t('blockchain_description')}                  </p>
                  <Link href="#contact">
                    <button type="button" className="rounded-pill btn-rounded border-primary">
{t('learn_more')}<span><i className="fas fa-arrow-right"></i></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto text-end">
                <div className="services__pic mx-5">
                  <img src="/images/services/blockchain.svg" alt="Blockchain development illustration" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* Customer Relations/AI Business Integration Component */}
            {/* <div className="row px-0 px-lg-5 scroll-section">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto order-1 order-md-0">
                <div className="services__content">
                  <div className="icon d-block fas fa-users"></div>
                  <h3 className="display-3--title mt-1">Customer Relations/AI Business Integration</h3>
                  <p className="lh-lg">
                    Optimize Relationships with Tailored CRM Solutions!
                    At hakxcore, we specialize in enhancing your customer interactions through customized CRM solutions. We have partnered with MACRM, a reputed CRM and Business Marketing agency. Streamline operations, gain valuable insights, and elevate satisfaction. Discover the future of efficient customer relationship management with us.
                  </p>
                  <Link href="#contact">
                    <button type="button" className="rounded-pill btn-rounded border-primary">
{t('learn_more')}<span><i className="fas fa-arrow-right"></i></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services text-end my-auto">
                <div className="services__pic mx-5">
                  <img src="/images/services/crm.svg" alt="CRM illustration" className="img-fluid" />
                </div>
              </div>
            </div> */}
          </div>
          <div ref={progressBarRef} className="progress-bar"></div>
        </div>
      </div>

      <style jsx>{`
        .scroll-section-outer {
          overflow: hidden;
          position: relative;
        }
        .scroll-section-inner {
          display: flex;
          flex-direction: row;
          position: relative;
          width: calc(300vw - 100%);
        }
        .scroll-section {
          flex: 0 0 100vw;
        }
        .services__content {
          padding: 20px;
        }
        .services__pic {
          text-align: center;
        }
        .services__pic img {
          max-width: 100%;
          height: auto;
        }
        @media (max-width: 768px) {
          .scroll-section-inner {
            flex-direction: column;
            width: 100%;
          }
          .scroll-section {
            flex: 1 0 auto;
          }
          .services__content {
            text-align: center;
          }
          .services__pic {
            margin: 20px 0;
          }
          .progress-bar {
            display: none;
          }
        }
        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 5px;
          background-color: red; // Initial color
          width: 0%;
          transition: background-color 0.2s, width 0.2s;
        }
      `}</style>
    </section>
  );
};

export default ServiceSection;
