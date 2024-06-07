import React from "react";
import Link from "next/link";

const BackToTopSection = () => {
    return (
        <Link href="#home" className="shadow btn-primary rounded-circle back-to-top">
        <i className="fas fa-chevron-up"></i>
      </Link>
    );
};

export default BackToTopSection;