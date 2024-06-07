import React, { useState } from "react";
import styles from '@/assets-website/css/PortfolioSection.module.css'; // Example for CSS Modules

const PortfolioSection = () => {
    const [filter, setFilter] = useState("all");

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const portfolioItems = [
        { id: 1, title: "SSO project one", category: "sso", imgSrc: "images/portfolio/portfolio-1.jpg", description: "website" },
        { id: 2, title: "Design project one", category: "design", imgSrc: "images/portfolio/portfolio-2.jpg", description: "design" },
        { id: 3, title: "Course project one", category: "courses", imgSrc: "images/portfolio/portfolio-3.jpg", description: "OKTA" },
        { id: 4, title: "Course project two", category: "courses", imgSrc: "images/portfolio/portfolio-4.jpg", description: "commvault" },
        { id: 5, title: "SSO project two", category: "sso", imgSrc: "images/portfolio/portfolio-5.jpg", description: "website" },
        { id: 6, title: "Development project two", category: "devsecops", imgSrc: "images/portfolio/portfolio-6.jpg", description: "website" },
        { id: 7, title: "CRM project three", category: "crm", imgSrc: "images/portfolio/portfolio-7.jpg", description: "opensource crm" },
        { id: 8, title: "CRM setup project three", category: "crm", imgSrc: "images/portfolio/portfolio-8.jpg", description: "salesforce" },
        { id: 9, title: "CRM project three", category: "crm", imgSrc: "images/portfolio/portfolio-9.jpg", description: "zoho crm" },
    ];

    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className="container">
                <div className="row text-center mt-5">
                    <h1 className="display-3 fw-bold text-capitalize">Latest work</h1>
                    <div className="heading-line"></div>
                    <p className="lead">
                        Everyday pushing the boundaries of what's possible, Here are our recent projects.
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
                                {category.toUpperCase()}
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
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
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
