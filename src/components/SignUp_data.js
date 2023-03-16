import React from 'react';


function SignUpData() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <h1 className="text-left" style={{ padding: "0 auto" }}>Start Basic Cloud Managed</h1>
          <h1 className="text-left tagline" style={{ padding: "0 auto" }}>Care plan for free</h1>
          <h2 className="text-left tagline" style={{ padding: "0 auto" }}>Our Offerings:</h2>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <ul style={{ padding: "0 auto", fontSize: "auto" }}>
            <li className="fs-5 fs-md-4 fs-lg-3 mb-3">Cloud Infrastructure Monitoring</li>
            <li className="fs-5 fs-md-4 fs-lg-3 mb-3">Cloud Migration</li>
            <li className="fs-5 fs-md-4 fs-lg-3 mb-3">DR Plan & Testing </li>
            <li className="fs-5 fs-md-4 fs-lg-3 mb-3">Microservices Architecture & Containerization </li>
            <li className="fs-5 fs-md-4 fs-lg-3 mb-3">DevOps Automation</li>
          </ul>
          <a href="https://cloudbuilders.io/pricing/" className="custom-link" style={{fontFamily: "Helvetica Neue"}}>Know More about Cloud managed care Plans</a>
        </div>
          <div className="container"style={{ paddingTop: "40px"}}>

      </div>

      </div>
    </div>
  );
}

export default SignUpData;
