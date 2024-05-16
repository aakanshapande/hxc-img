import React from "react";

const InternshipButtonSection = () => {
    return (
        <div className="container">
      <div className="row align-items-center gap-2">
        <div className="col-auto mr-sm-3">
          <button className="virtual-internship-btn p-3">
            Virtual Internships
          </button>
        </div>

        <div className="col-auto alert-container p-3 ms-3">
           Limited seats available hurry up!
        </div>
      </div>
    </div>
    );
};

export default InternshipButtonSection;