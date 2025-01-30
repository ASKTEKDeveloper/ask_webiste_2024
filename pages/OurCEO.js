import Link from "next/link";
import React from "react";

const OurCEO = () => {
  return (
    <section className="about-area-three pt-25 rpt-0 pb-100 rpb-65 rel z-1">
      <div className="container pt-4">
        <div className="row align-items-start gap-100">
          <div className="col-lg-6">
            <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-60 rmb-40">
                {/* <span className="sub-title mb-15">Meet Our CEO</span> */}
                <h2>Meet Our CEO</h2>
              </div>
              <div className="row gap-40">
                <div className="col-12">
                  <div className="service-item style-three">
                    <p>
                      I am a seasoned entrepreneur and IT professional,
                      currently serving as the Founder and CEO of Asktek
                      Solutions, a leading IT solutions provider catering
                      specifically to the apparel industry. With over 20 years
                      of experience, I have leveraged my extensive background in
                      information technology to identify and address critical
                      bottlenecks in apparel manufacturing processes. My passion
                      for solving these challenges has driven me to develop
                      innovative software solutions that enhance operational
                      efficiency, streamline workflows, and drive growth within
                      the fashion sector.
                    </p>
                    <p>
                      My unique blend of expertise in both IT and apparel
                      manufacturing enables me to bridge the gap between
                      technology and production effectively. I am committed to
                      innovation, constantly seeking to provide tailored
                      software solutions that address the specific needs of the
                      apparel industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-three-image rel z-1 mb-30 rmb-65 wow fadeInRight delay-0-2s">
              <img src="assets/images/salahuddin.svg" alt="About" />
            </div>
          </div>
        </div>
        <div className="row my-30 align-items-center gap-100">
          <div className="col-lg-12">
            <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
              <div className="section-title text-center mb-30 rmb-40">
                <span className="sub-title ">Key Highlights </span>
              </div>
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <div className="service-item-six wow fadeInUp delay-0-2s h-100 mb-0 text-center d-flex align-items-center">
                    <p>
                      Development of ERP solutions tailored for textile and
                      garment industries.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service-item-six wow fadeInUp delay-0-2s h-100 mb-0 text-center d-flex align-items-center">
                    <p>
                      Implementation of Buying House Management Software for
                      sourcing and production automation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service-item-six wow fadeInUp delay-0-2s h-100 mb-0 text-center d-flex align-items-center">
                    <p>
                      Creation of Operation Bulletin & Shrinkage Tools to
                      optimize production processes.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service-item-six wow fadeInUp delay-0-2s h-100 mb-0 text-center d-flex align-items-center">
                    <p>
                      Asktek Solutions delivers corporate software that
                      digitally transforms the fashion technology sector.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service-item-six wow fadeInUp delay-0-2s h-100 mb-0 text-center d-flex align-items-center">
                    <p>
                      Our software solutions are widely used across India and
                      Bangladesh, helping manufacturers boost productivity and
                      efficiency.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service-item-six wow fadeInUp delay-0-2s h-100 mb-0 text-center d-flex align-items-center">
                    <p>
                      Designed exclusively for fashion brands and manufacturers,
                      automating processes related to product creation,
                      sourcing, and production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-12">
            <div className="service-item style-three">
              <p>
                At Asktek Solutions, our mission is to empower the fashion
                industry by improving efficiency, reducing waste, and increasing
                productivity through cutting-edge software applications. Our
                solutions provide a competitive advantage by leveraging fashion
                technology to drive digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-bg-shape">
        <img src="assets/images/background/about-bg-shape.png" alt="About" />
      </div>
    </section>
  );
};

export default OurCEO;
