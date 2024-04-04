import Layout from "@/layout";
import { Chip, Container, Divider } from "@mui/material";
import ContactUsProduct from "./ContactUsProduct";

const ProjectGrid = () => {
  return (
    <>
      <Layout>
        <>
          <section className="project-grid-area rel z-2 py-50 rpy-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                    <h2>TARGET - ERP for Textile & Garment Industries</h2>
                    <h5>
                      Unleashing Excellence in Textile & Garment Manufacturing
                    </h5>
                    <div className="image my-50 wow fadeInUp delay-0-2s">
                      <img
                        src="assets/images/projects/mockup-erp.png"
                        alt="Service Details"
                        style={{ objectFit: "contain", maxWidth: "60%" }}
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-50 ">
                      <div class="button">
                        <a href="assets/docs/Blogs.docx" download>
                          Download Brochure
                        </a>
                        <b class="top">Click to </b>
                        <b class="bottom">Document</b>
                      </div>
                    </div>
                    <p>
                      Elevate your textile and garment manufacturing with
                      TARGET, our comprehensive ERP solution. Tailored for
                      manufacturers and exporters, TARGET streamlines production
                      processes, optimizes inventory management, and simplifies
                      export documentation. Experience efficiency like never
                      before, and watch your operations seamlessly align with
                      global standards.
                    </p>
                  </div>
                  <div className="project-shapes">
                    <img
                      className="shape one"
                      src="assets/images/shapes/project-left.png"
                      alt="shape"
                    />
                    <img
                      className="shape two"
                      src="assets/images/shapes/project-right.png"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="section-title text-center mb-10">
                  <Divider>
                    <Chip label="Key Features" size="medium" />
                  </Divider>
                </div>
                <div className="col-lg-3  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="assets/images/projects/erp/planning-strategy.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Production Planning</h5>
                  </div>
                </div>
                <div className="col-lg-3  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="assets/images/projects/erp/time-sheet.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Scheduling</h5>
                  </div>
                </div>
                <div className="col-lg-3  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="assets/images/projects/erp/inventory-management.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Inventory Control</h5>
                  </div>
                </div>
                <div className="col-lg-3  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="assets/images/projects/erp/businessorder.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Order Management</h5>
                  </div>
                </div>
                <div className="col-lg-3  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="assets/images/projects/erp/supply-chain.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Supplier Management</h5>
                  </div>
                </div>
                <div className="col-lg-3  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="assets/images/projects/erp/quality-assurance.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Quality Assurance</h5>
                  </div>
                </div>
                <div className="col-lg-3  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3  wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="assets/images/projects/erp/yearly-report.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Financial Management</h5>
                  </div>
                </div>
                <div className="col-lg-3  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3  wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="assets/images/projects/erp/dashboard.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Reporting & Analytics</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="service-details-area px-3  rpt-100 pb-50 rpb-85">
            <Container>
              <div className="row gap-100">
                <div className="col-lg-12">
                  <div className="service-details-content">
                    <div className="section-title text-center">
                      <Divider>
                        <Chip
                          label="Functional Areas"
                          size="medium"
                          color="info"
                        />
                      </Divider>
                    </div>

                    <div className="row gap-90  justify-content-center align-items-center">
                      <div className="col-lg-4 fadeInUp">
                        <div className="why-choose-image fadeInUp rmb-55">
                          <img
                            src="assets/images/projects/erp/Manufacturing.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 fadeInUp">
                        <div className="why-choose-content fadeInUp">
                          <h4>Production Management</h4>
                          <p>
                            Aims to optimize efficiency by implementing
                            real-time monitoring and scheduling to streamline
                            processes. This involves overseeing the tracking of
                            raw materials, work-in-progress, and finished goods
                            to ensure smooth operations throughout the
                            production cycle
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90   fadeInRight justify-content-center  align-items-center">
                      <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Inventory Management</h3>
                          <p>
                            Involves optimizing inventory levels through
                            advanced forecasting techniques to minimize
                            stockouts, alongside managing multi-location
                            warehouses and monitoring material movements.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4  fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/erp/inventory.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90 fadeInUp  justify-content-center align-items-center">
                      <div className="col-lg-4 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="assets/images/projects/erp/Invoice-amico.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Order Processing</h3>
                          <p>
                            Entails seamlessly handling customer orders and
                            overseeing order fulfillment operations, including
                            the generation of invoices, packing slips, and
                            shipping labels
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90  fadeInRight justify-content-center  align-items-center">
                      <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Supply Chain Integration</h3>
                          <p>
                            Facilitates collaboration with suppliers and
                            distributors by tracking shipments, managing
                            supplier performance, and optimizing procurement
                            processes.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/erp/Logistics-pana.png"
                            alt="Why Choose"
                            className="product-features-img "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90   fadeInUp justify-content-center align-items-center">
                      <div className="col-lg-4 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="assets/images/projects/erp/Manufacturing.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Quality Control</h3>
                          <p>
                            Measures are implemented throughout the production
                            process, including the capture and analysis of
                            quality data to enhance product quality and
                            compliance
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90 fadeInRight  justify-content-center  align-items-center">
                      <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Financial Management</h3>
                          <p>
                            Automates processes such as invoicing, billing, and
                            payment processing, while also generating financial
                            reports like profit and loss statements and balance
                            sheets
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/erp/Financial data-amico.png"
                            alt="Why Choose"
                            className="product-features-img "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12 mt-50 ">
                      <section className="services-area  pt-75 pb-10 rel z-1">
                        <div className="container">
                          <div className="row medium-gap">
                            <div className="col-xl-12">
                              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">
                                  Business Benefits
                                </span>
                                <h3 style={{ color: "#8758FF" }}>
                                  Unlocking Business Advantages
                                </h3>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div className="benefits-item wow fadeInUp delay-0-4s">
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/time-management.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div className="content">
                                  <h4>Improved Efficiency</h4>
                                  <p>
                                    Streamline processes and eliminate manual
                                    tasks to increase operational efficiency
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div className="benefits-item wow fadeInUp delay-0-6s">
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/vision.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div className="content">
                                  <h4>Enhanced Visibility</h4>
                                  <p>
                                    Gain real-time insights into production,
                                    inventory, and financial data for informed
                                    decision-making.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div className="benefits-item wow fadeInUp delay-0-3s">
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/costs.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div className="content">
                                  <h4>Cost Reduction</h4>
                                  <p>
                                    Optimize inventory levels, minimize
                                    stockouts, and reduce production downtime to
                                    lower costs.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div className="benefits-item wow fadeInUp delay-0-5s">
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/satisfaction.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div className="content">
                                  <h4>Increased Customer Satisfaction</h4>
                                  <p>
                                    Deliver products on time and meet quality
                                    standards to enhance customer satisfaction.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div className="benefits-item wow fadeInUp delay-0-7s">
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/approval.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div className="content">
                                  <h4>Compliance</h4>
                                  <p>
                                    Ensure compliance with industry regulations
                                    and standards, reducing the risk of
                                    penalties and fines.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div className="benefits-item wow fadeInUp delay-0-7s">
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/maximize.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div className="content">
                                  <h4>Scalability</h4>
                                  <p>
                                    Scale your operations seamlessly as your
                                    business grows, with the flexibility to add
                                    new features and modules.
                                  </p>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          {/* Contact Form Section Start */}
          <ContactUsProduct TypeOF={"p"} initialValue={"ERP"} />
          {/* Contact Form Section End */}
        </>
      </Layout>
    </>
  );
};
export default ProjectGrid;
