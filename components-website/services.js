// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Link from "next/link";

// const ServiceSection = () => {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);
//   const progressBarRef = useRef(null);

//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const sections = gsap.utils.toArray(".scroll-section");
//     const colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#ba55d3"];

//     gsap.to(sectionRef.current, {
//       xPercent: -100 * (sections.length+2),
//       ease: "none",
//       scrollTrigger: {
//         trigger: triggerRef.current,
//         pin: true,
//         scrub: 0.6,
//         start: "top 150px",
//         end: () => `+=${sectionRef.current.scrollWidth - triggerRef.current.clientWidth}`,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           const sectionIndex = Math.floor(progress * sections.length);
//           const color = colors[sectionIndex % colors.length];
//           progressBarRef.current.style.width = `${progress * 100}%`;
//           progressBarRef.current.style.backgroundColor = color;
//         },
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section id="services" className="services">
//       <div className="container mb-5">
//         <div className="row text-center">
//           <h1 className="display-3 fw-bold">Our Services</h1>
//           <div className="heading-line mb-1"></div>
//         </div>

//         <div className="row pb-2 my-3">
//           <div className="col-md-6 border-right">
//             <div className="service-section-card-light p-4">
//               <h2 className="fw-bold text-capitalize text-left">
//                 Our Services Range From Single Sign-On(SSO), Security Assessments(VAPT) To DevOps/DevSecOps and CRM Anywhere Anytime
//               </h2>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="service-section-card-light p-4 text-start">
//               <p className="fw-light lead">
//                 Discover HAKXCORE: Your Go-To for Open-Source Cybersecurity, SSO, DevSecOps, and CRM Solutions. Harness the power of open-source tech for robust data protection, seamless access control, and enhanced customer engagement. Your path to a secure and efficient digital future starts here.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="scroll-section-outer">
//         <div ref={triggerRef}>
//           <div ref={sectionRef} className="container px-5 scroll-section-inner">
//             {/* Start the Marketing Content */}
//             <div className="row px-0 px-lg-5 scroll-section">
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto order-1 order-md-0">
//                 <div className="services__content order-sm-0">
//                   <div className="icon d-block fas fa-shield"></div>
//                   <h3 className="display-3--title mt-1">Single Sign-On(SSO)</h3>
//                   <p className="lh-lg">
//                     Effortless and Secure Access with Custom SSO Solutions!
//                     Discover seamless authentication and enhanced security through our tailored Single Sign-On (SSO) integration. Elevate user experience with personalized solutions. Contact us to revolutionize your digital access.
//                   </p>
//                   <Link href="#contact">
//                     <button type="button" className="rounded-pill btn-rounded border-primary">
//                       Learn more<span><i className="fas fa-arrow-right"></i></span>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto text-end">
//                 <div className="services__pic mx-5">
//                   <img src="/images/services/sso.svg" alt="marketing illustration" className="img-fluid" />
//                 </div>
//               </div>
//             </div>

//             {/* VAPT Component */}
//             <div className="row px-0 px-lg-5 scroll-section">
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto order-1 order-md-0">
//                 <div className="services__content order-sm-0">
//                   <div className="icon d-block fas fa-shield-alt"></div>
//                   <h3 className="display-3--title mt-1">Vulnerability Assessment and Penetration Testing (VAPT)</h3>
//                   <p className="lh-lg">
//                     Protect Your Digital Assets with Comprehensive Security Testing!
//                     Our VAPT services identify vulnerabilities and provide actionable insights to strengthen your security posture. Ensure your systems are secure with our expert testing and analysis.
//                   </p>
//                   <Link href="#contact">
//                     <button type="button" className="rounded-pill btn-rounded border-primary">
//                       Learn more<span><i className="fas fa-arrow-right"></i></span>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto text-end">
//                 <div className="services__pic mx-5">
//                   <img src="/images/services/vapt.svg" alt="VAPT illustration" className="img-fluid" />
//                 </div>
//               </div>
//             </div>

//             {/* DevOps/DevSecOps Component */}
//             <div className="row px-0 px-lg-5 scroll-section">
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto">
//                 <div className="services__content">
//                   <div className="icon d-block fas fa-code"></div>
//                   <h3 className="display-3--title mt-1">DevOps/DevSecOps</h3>
//                   <p className="lh-lg">
//                     Empower Your Development with DevOps/DevSecOps Expertise!
//                     Harness the potential of DevOps and DevSecOps through our expert services. Streamline your development lifecycle, ensuring efficiency, security, and top-notch quality. Partner with us to elevate your development experience.
//                   </p>
//                   <Link href="#contact">
//                     <button type="button" className="rounded-pill btn-rounded border-primary">
//                       Learn more<span><i className="fas fa-arrow-right"></i></span>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto text-start">
//                 <div className="services__pic mx-5">
//                   <img src="/images/services/devsecops.svg" alt="DevOps/DevSecOps illustration" className="img-fluid" />
//                 </div>
//               </div>
//             </div>

//             {/* Blockchain Development Component */}
//             <div className="row px-0 px-lg-5 scroll-section">
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto order-1 order-md-0">
//                 <div className="services__content order-sm-0">
//                   <div className="icon d-block fas fa-link"></div>
//                   <h3 className="display-3--title mt-1">Blockchain Development</h3>
//                   <p className="lh-lg">
//                     Innovate and Transform with Custom Blockchain Solutions!
//                     Harness the power of blockchain technology to enhance security, transparency, and efficiency. Our expert team delivers tailored blockchain development services to meet your unique needs.
//                   </p>
//                   <Link href="#contact">
//                     <button type="button" className="rounded-pill btn-rounded border-primary">
//                       Learn more<span><i className="fas fa-arrow-right"></i></span>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto text-end">
//                 <div className="services__pic mx-5">
//                   <img src="/images/services/blockchain.svg" alt="Blockchain development illustration" className="img-fluid" />
//                 </div>
//               </div>
//             </div>

//             {/* Customer Relations/AI Business Integration Component */}
//             <div className="row px-0 px-lg-5 scroll-section">
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto order-1 order-md-0">
//                 <div className="services__content">
//                   <div className="icon d-block fas fa-users"></div>
//                   <h3 className="display-3--title mt-1">Customer Relations/AI Business Integration</h3>
//                   <p className="lh-lg">
//                     Optimize Relationships with Tailored CRM Solutions!
//                     At hakxcore, we specialize in enhancing your customer interactions through customized CRM solutions. We have partnered with MACRM, a reputed CRM and Business Marketing agency. Streamline operations, gain valuable insights, and elevate satisfaction. Discover the future of efficient customer relationship management with us.
//                   </p>
//                   <Link href="#contact">
//                     <button type="button" className="rounded-pill btn-rounded border-primary">
//                       Learn more<span><i className="fas fa-arrow-right"></i></span>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services text-end my-auto">
//                 <div className="services__pic mx-5">
//                   <img src="/images/services/crm.svg" alt="CRM illustration" className="img-fluid" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div ref={progressBarRef} className="progress-bar"></div>
//         </div>
//       </div>

//       <style jsx>{`
//         .scroll-section-outer {
//           overflow: hidden;
//           position: relative;
//         }
//         .scroll-section-inner {
//           display: flex;
//           flex-direction: row;
//           position: relative;
//           width: calc(300vw - 100%);
//         }
//         .scroll-section {
//           flex: 0 0 100vw;
//         }
//         .services__content {
//           padding: 20px;
//         }
//         .services__pic {
//           text-align: center;
//         }
//         .services__pic img {
//           max-width: 100%;
//           height: auto;
//         }
//         @media (max-width: 768px) {
//           .services__content {
//             text-align: center;
//           }
//           .services__pic {
//             margin: 20px 0;
//           }
//         }
//         .progress-bar {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           height: 5px;
//           background-color: red; // Initial color
//           width: 0%;
//           transition: background-color 0.2s, width 0.2s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ServiceSection;











import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

const ServiceSection = () => {
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
          <h1 className="display-3 fw-bold">Our Services</h1>
          <div className="heading-line mb-1"></div>
        </div>

        <div className="row pb-2 my-3">
          <div className="col-md-6 border-right">
            <div className="service-section-card-light p-4">
              <h2 className="fw-bold text-capitalize text-left">
                Our Services Range From Single Sign-On(SSO), Security Assessments(VAPT) To DevOps/DevSecOps and CRM Anywhere Anytime
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

      <div className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="container px-5 scroll-section-inner">
            {/* Start the Marketing Content */}
            <div className="row px-0 px-lg-5 scroll-section">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services my-auto order-1 order-md-0">
                <div className="services__content order-sm-0">
                  <div className="icon d-block fas fa-shield"></div>
                  <h3 className="display-3--title mt-1">Single Sign-On(SSO)</h3>
                  <p className="lh-lg">
                    Effortless and Secure Access with Custom SSO Solutions!
                    Discover seamless authentication and enhanced security through our tailored Single Sign-On (SSO) integration. Elevate user experience with personalized solutions. Contact us to revolutionize your digital access.
                  </p>
                  <Link href="#contact">
                    <button type="button" className="rounded-pill btn-rounded border-primary">
                      Learn more<span><i className="fas fa-arrow-right"></i></span>
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
                  <h3 className="display-3--title mt-1">Vulnerability Assessment and Penetration Testing (VAPT)</h3>
                  <p className="lh-lg">
                    Protect Your Digital Assets with Comprehensive Security Testing!
                    Our VAPT services identify vulnerabilities and provide actionable insights to strengthen your security posture. Ensure your systems are secure with our expert testing and analysis.
                  </p>
                  <Link href="#contact">
                    <button type="button" className="rounded-pill btn-rounded border-primary">
                      Learn more<span><i className="fas fa-arrow-right"></i></span>
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
                  <h3 className="display-3--title mt-1">DevOps/DevSecOps</h3>
                  <p className="lh-lg">
                    Empower Your Development with DevOps/DevSecOps Expertise!
                    Harness the potential of DevOps and DevSecOps through our expert services. Streamline your development lifecycle, ensuring efficiency, security, and top-notch quality. Partner with us to elevate your development experience.
                  </p>
                  <Link href="#contact">
                    <button type="button" className="rounded-pill btn-rounded border-primary">
                      Learn more<span><i className="fas fa-arrow-right"></i></span>
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
                  <h3 className="display-3--title mt-1">Blockchain Development</h3>
                  <p className="lh-lg">
                    Innovate and Transform with Custom Blockchain Solutions!
                    Harness the power of blockchain technology to enhance security, transparency, and efficiency. Our expert team delivers tailored blockchain development services to meet your unique needs.
                  </p>
                  <Link href="#contact">
                    <button type="button" className="rounded-pill btn-rounded border-primary">
                      Learn more<span><i className="fas fa-arrow-right"></i></span>
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
            <div className="row px-0 px-lg-5 scroll-section">
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
                      Learn more<span><i className="fas fa-arrow-right"></i></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services text-end my-auto">
                <div className="services__pic mx-5">
                  <img src="/images/services/crm.svg" alt="CRM illustration" className="img-fluid" />
                </div>
              </div>
            </div>
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
