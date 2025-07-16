import React, { useState, useTransition } from "react";
import styles from '@/assets-website/css/PortfolioSection.module.css'; // Example for CSS Modules
import { useTranslation } from "react-i18next";

const PortfolioSection = () => {
    const [filter, setFilter] = useState("all");
    const {t} = useTranslation("portfolio")

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const portfolioItems = [
        { id: 1, title: "SSO project one", category: "sso", imgSrc: "images/portfolio/portfolio-1.webp", description: "Auth0" },
        { id: 2, title: "Course project one", category: "courses", imgSrc: "images/portfolio/portfolio-2.webp", description: "course" },
        { id: 3, title: "Course project one", category: "courses", imgSrc: "images/portfolio/portfolio-3.webp", description: "OKTA" },
        { id: 4, title: "Course project two", category: "courses", imgSrc: "images/portfolio/portfolio-4.webp", description: "commvault" },
        { id: 5, title: "SSO project two", category: "sso", imgSrc: "images/portfolio/portfolio-5.webp", description: "website" },
        { id: 6, title: "Development project two", category: "devsecops", imgSrc: "images/portfolio/portfolio-6.webp", description: "opensource digital-library crm" },
        { id: 7, title: "SSO PHP Laraval Project", category: "sso", imgSrc: "images/portfolio/portfolio-7.webp", description: "php laraval sso" },
        { id: 8, title: "Keycloak SSO Theme Customization", category: "sso", imgSrc: "images/portfolio/portfolio-8.webp", description: "keycloak" },
        { id: 9, title: "Blue Team Course Development", category: "sso", imgSrc: "images/portfolio/portfolio-9.webp", description: "course" },
    ];

    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className="container">
                <div className="row text-center mt-5">
                    <h2 className="display-3 fw-bold text-capitalize">{t('title')}</h2>
                    <div className="heading-line"></div>
                    <p className="lead">
                       {t('subtitle')}
                    </p>
                </div>

                {/* FILTER BUTTONS */}
                <div className="row mt-5 mb-4 g-3 text-center">
                    <div className="col-md-12">
                        {["all", "sso", "courses", "devsecops", "crm","design"].map((category) => (
                            <button
                                key={category}
                                className={`btn btn-outline-primary filter-btn mx-1 ${filter === category ? "active" : ""}`}
                                type="button"
                                onClick={() => handleFilterChange(category)}
                            >
                                {t(`filters.${category}`)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* PORTFOLIO ITEMS */}
                <div className="row d-flex justify-content-around">
                    {portfolioItems
                        .filter(item => filter === "all" || item.category === filter)
                        .map(item => (
                            <div key={item.id} className="col-lg-4 col-md-6 portfolio-card" data-tags={`all, ${item.category}`}>
                                <div className="portfolio-box shadow">
                                    <img src={item.imgSrc} alt={item.title} title={item.title} className="img-fluid" />
                                    <div className="portfolio-info">
                                        <div className="caption">
                                            <a href={item.imgSrc} className="glightbox2">
                                                <i className="fas fa-magnifying-glass mb-3"></i>
                                            </a>
                                            <h4>{t(`projects.${item.id}.title`)}</h4>
                                            <p>{t(`projects.${item.id}.description`)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
