import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
import Link from "next/link";

import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  mainSliderActive,
  serviceThreeSlider,
  testimonialThreeSlider,
} from "@/src/sliderProps";
import { Container } from "@mui/material";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const ServiceDetails = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const accordionData = [
    { id: 1, title: "Why Get Our IT Services ?" },
    { id: 2, title: "BestTeam Member Provider ?" },
    { id: 3, title: "Leanr About Our Company ?" },
    { id: 4, title: "Payment Method ?" },
  ];
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      {/* About Area start */}
      <section className="about-area-three mt-120  px-3  pt-25 rpt-0 pb-100 rpb-65 rel z-1">
        <Container>
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  {/* <span className="sub-title mb-15">About ASK</span> */}
                  <h2 style={{ fontFamily: "oswald", color: "#637A9F" }}>
                    <span style={{ color: "#1D24CA" }}>ASK Technology,</span>{" "}
                    Empowering Businesses with Innovative Solutions
                  </h2>
                </div>
                <p>
                  At Ask Technology, we are more than just an IT services
                  company – we are your trusted partner in leveraging technology
                  to drive innovation and growth. With a relentless focus on
                  delivering exceptional solutions tailored to your unique
                  needs, we have established ourselves as a leader in the
                  industry.
                </p>

                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          IT Consulting
                        </Link>
                      </h4>
                      <p>
                        Our IT consulting services encompass strategic planning
                        to align technology initiatives with business
                        objectives, ensuring optimal efficiency and
                        performance..
                      </p>
                      {/* <Link legacyBehavior href="/service-details">
                        <a className="read-more">
                          Read More <i className="far fa-arrow-right" />
                        </a>
                      </Link> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Business Growth
                        </Link>
                      </h4>
                      <p>
                        Our ERP products, tailored for textile, garment, and
                        rental management industries, streamline operations and
                        catalyze business growth through enhanced efficiency and
                        productivity
                      </p>
                      {/* <Link legacyBehavior href="/service-details">
                        <a className="read-more">
                          Read More <i className="far fa-arrow-right" />
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/about-five1.jpg" alt="About" />
                <img src="assets/images/about/about-five2.jpg" alt="About" />
                <div className="experience-years">
                  <span className="years">25</span>
                  <h4>Years Of Experienced IT Solutions</h4>
                </div>
                <img
                  className="abut-bg-shape"
                  src="assets/images/about/about-five-bg.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center gap-20 mt-100">
            <div className="col-xl-6 col-md-6   pt-25">
              <div className="mission-vision-item  mx-4delay-0-3s">
                <div
                  className={`${
                    matchesSmallScreen && "flex-column"
                  } d-flex  flex-column  wow fadeInUp  justify-content-start align-items-center gap-4`}
                >
                  <div className="icon">
                    <img
                      src="https://ik.imagekit.io/sathishask2024/20943892.jpg?updatedAt=1710941958371"
                      className="icon"
                      style={{ objectFit: "contain", mixBlendMode: "multiply" }}
                    />
                  </div>

                  <div className="content">
                    <h2
                      style={{ fontFamily: "oswald", color: "#637A9F" }}
                      className="text-center mb-2 pb-3"
                      // className={`${matchesSmallScreen && "text-center"}`}
                    >
                      <span style={{ color: "#1D24CA" }}></span> Our{" "}
                      <span style={{ color: "#5356FF" }}>Mission</span>
                    </h2>
                    <p className="text-center">
                      At Ask Technology, we empower businesses with
                      transformative technology solutions, driving efficiency
                      and growth. Through expertise, innovation, and commitment,
                      we deliver unparalleled value, enabling clients to thrive
                      in a rapidly evolving digital landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6   pt-25">
              <div className="mission-vision-item  mx-4 wow  delay-0-3s">
                <div
                  className={`${
                    matchesSmallScreen && "flex-column"
                  } d-flex  flex-column wow  fadeInUp justify-content-start  align-items-center gap-4`}
                >
                  <div className="icon">
                    <img
                      src="https://ik.imagekit.io/sathishask2024/Wavy_Bus-18_Single-11.jpg?updatedAt=1710941958118"
                      className="icon"
                      style={{ objectFit: "contain", mixBlendMode: "multiply" }}
                    />
                  </div>

                  <div className="content">
                    <h2
                      style={{ fontFamily: "oswald", color: "#637A9F" }}
                      className="text-center mb-2 pb-3"
                      // className={`${matchesSmallScreen && "text-center"}`}
                    >
                      <span style={{ color: "#1D24CA" }}></span> Our{" "}
                      <span style={{ color: "#6420AA" }}>Vision</span>
                    </h2>
                    <p className="text-center">
                      At Ask Technology, we envision a future where innovation
                      and technology empower businesses to achieve their fullest
                      potential. Our vision is to be the leading force driving
                      digital transformation, revolutionizing industries, and
                      shaping the future of business worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="about-bg-shape">
          <img src="assets/images/background/about-bg-shape.png" alt="About" />
        </div>
      </section>
      {/* About Area end */}
         {/* Partners Area start */}
         <section className="partners-area   pb-100 pt-150 rmt-30 rpb-70 rel z-1">
        <div>
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            {/* <span className="sub-title mb-15">Global Partners</span> */}
            <h2 className="text-gradient-title2">Our Partners</h2>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <Marquee
              direction="right"
              pauseOnHover
              gradient={100}
              loop={0}
              autoFill
            >
              <div >
                <img
                  src="assets/images/clients/1.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div >
                <img
                  src="assets/images/clients/2.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div >
                <img
                  src="assets/images/clients/3.webp"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div >
                <img
                  src="assets/images/clients/4.webp"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div >
                <img
                  src="assets/images/clients/5.jpg"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div >
                <img
                  src="assets/images/clients/6.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div >
                <img
                  src="assets/images/clients/7.jpg"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div >
                <img
                  src="assets/images/clients/8.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div >
                <img
                  src="assets/images/clients/9.jpg"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      {/* Partners Area end */}

      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area px-3  py-130 rpy-100 rel z-1">
        <Container>
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15 new-font-play">
                  Why Choose Ask Technology
                </span>
                <h5 className="my-4">
                  At Ask Technology, we understand that the right technology
                  partner can make all the difference. Here's why we stand out
                  in the crowded tech landscape
                </h5>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"wc-tap1"}>
            <div className="why-choose-tab">
              <Nav
                as={"ul"}
                className="nav nav-pills nav-fill mb-20 rmb-50 wow fadeInUp delay-0-4s"
              >
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap1"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap1"
                  >
                    <TbBulb className="nav-icons" />
                    <span>Innovation</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap2"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap2"
                  >
                    <SiLinkerd className="nav-icons" />
                    <span>Tailoring</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap3"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap3"
                  >
                    <LuBrainCircuit className="nav-icons" />
                    <span>Expertise</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap4"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap4"
                  >
                    <RiFocus2Line className="nav-icons" />
                    <span>Client-Centric</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap5"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap5"
                  >
                    <TbLayersLinked className="nav-icons" />
                    <span>End-to-End</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap6"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap6"
                  >
                    <SlLike className="nav-icons" />
                    <span>Excellence</span>
                  </Nav.Link>
                </li>
              </Nav>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap1">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-4">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/Deconstructed.png"
                          alt="Why Choose"
                          className="why-choose-img "
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Innovation at the Core
                        </h3>
                        <p>
                          Our commitment to innovation drives everything we do.
                          From developing cutting-edge solutions to adopting the
                          latest technologies, we ensure your business stays
                          ahead in a rapidly evolving digital landscape
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Strategic UI/UX Assessment</li>
                          <li>
                            Thorough Contextual Research and 360° Planning
                          </li>
                          <li>
                            Advanced Wireframing &amp; Prototyping Techniques
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap2">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Tailored Solutions, Every Time
                        </h3>
                        <p>
                          Our approach is personalized to fit your specific
                          requirements. We delve deep into understanding your
                          business intricacies to provide tailor-made solutions
                          that perfectly match your objectives. No cookie-cutter
                          approaches here – just bespoke strategies for your
                          success.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Customized Strategy Development</li>
                          <li>Thorough Needs Analysis and Consultation</li>
                          <li>Personalized Product Development</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/technology.png"
                          alt="Why Choose"
                          className="why-choose-img"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap3">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-4">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/expert.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Proven Expertise
                        </h3>
                        <p>
                          With years of experience in IT technology services, we
                          bring a wealth of expertise to the table. Our team of
                          skilled professionals is dedicated to delivering
                          solutions that not only meet but exceed expectations
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Decades of IT Technology Services Experience</li>
                          <li>In-depth Industry Expertise and Insight</li>
                          <li>Commitment to Exceeding Client Expectations</li>
                        </ul>

                        {/* <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap4">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Client-Centric Approach
                        </h3>
                        <p>
                          Your success is our priority. We pride ourselves on
                          our client-centric approach, ensuring open
                          communication, transparency, and a collaborative
                          partnership. Your challenges are our challenges, and
                          your victories are our victories.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Commitment to Prioritizing Your Success</li>
                          <li>
                            Emphasis on Open Communication and Transparency
                          </li>
                          <li>Building Collaborative Partnerships</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/excellence.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap5">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-4">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/End-to-End.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          End-to-End Services
                        </h3>
                        <p>
                          From web and mobile app development to ready-to-go ERP
                          products and technology training, we offer end-to-end
                          services. This holistic approach ensures that all your
                          technology needs are met under one roof.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive Web and Mobile App Development</li>
                          <li>Ready-to-Deploy ERP Solutions</li>
                          <li>Technology Training and Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap6">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Commitment to Excellence
                        </h3>
                        <p>
                          Excellence is not just a goal; it's a standard. We are
                          committed to delivering solutions that not only meet
                          high-quality benchmarks but set new standards in the
                          industry. Your success story is our measure of
                          success.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Setting High-Quality Standards</li>
                          <li>Pioneering Industry-Leading Solutions</li>
                          <li>Your Success Drives Our Pursuit of Excellence</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/Commitment.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </Container>
        <div className="why-choose-shapes">
          <img
            className="shape one"
            src="assets/images/about/why-choose-shape1.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/about/why-choose-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Why Choose Us Area end */}

      {/* Statistics Area start */}
      <section className="statistics-area-two rel z-2">
        <>
          <div
            className="statistics-inner style-two bgs-cover text-white p-80 pb-20"
            style={{
              backgroundImage: "url(assets/images/background/statistics.jpg)",
            }}
          >
            <div className="row align-items-xl-start align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">Company Statistics</span>
                    <h2 className="mt-3">Learn About Our Comapny Statistics</h2>
                  </div>
                  {/* <Link legacyBehavior href="/about">
                    <a className="read-more">
                      Learn More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="row">
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-target" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={500}
                      >
                        <Counter end={500} />
                      </span>
                      <span className="counter-title">Projects Delivered</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-target-audience" />
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop="99"
                      >
                        <Counter end={98.9} decimals="1" />
                      </span>
                      <span className="counter-title"> Happy Clients</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-customer-experience" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop="25"
                      >
                        <Counter end={25} decimals="1" />
                      </span>
                      <span className="counter-title">Years Experience</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-medal" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={100}
                      >
                        <Counter end={100} />
                      </span>
                      <span className="counter-title">Engineers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </section>
      {/* Statistics Area end */}

      {/* Testimonials Area Three Start */}
      <section className="testimonials-three-area px-3  py-130 rpy-100">
        <Container>
          <div className="row gap-80 align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="testimonials-three-image rmb-55 wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-three.png"
                  alt="Testimonials"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="testimonials-three-wrap wow fadeInRight delay-0-2s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-10">Our Testimonials</span>
                  <h2>What Our Clients Say About Solutions</h2>
                </div>
                <Slider
                  {...testimonialThreeSlider}
                  className="testimonial-three-slider"
                >
                  <div className="testimonial-item">
                    <div className="content">
                      <div className="testi-header">
                        <h4>Excellent Works</h4>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </div>
                      </div>
                      <div className="testi-text">
                        The software we've been using has truly revolutionized
                        our operations. Its intuitive interface and excellent
                        customer support have significantly enhanced our
                        workflow, making it an invaluable asset to our business
                      </div>
                      <div className="testi-footer">
                        <div className="icon">
                          <i className="flaticon-quotation" />
                        </div>
                        <div className="title">
                          <h4>Sathish Kumar</h4>
                          <span className="designation">CEO | TECHVEEL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="content">
                      <div className="testi-header">
                        <h4>Excellent Works</h4>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </div>
                      </div>
                      <div className="testi-text">
                        This software has exceeded our expectations, offering
                        seamless integration and exceptional functionality. It
                        has become an indispensable tool for our daily
                        operations, greatly enhancing our productivity and
                        efficiency
                      </div>
                      <div className="testi-footer">
                        <div className="icon">
                          <i className="flaticon-quotation" />
                        </div>
                        <div className="title">
                          <h4>Harel Manic</h4>
                          <span className="designation">
                            CEO | ERP Solutions
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Testimonials Area Three End */}

      {/* Contact Form Section Start */}
      <section
        className="contact-form-area py-130 px-3  rpy-100  mb-4 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/background/contact-form-bg.jpg)",
        }}
      >
        <Container>
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="contact-form bg-white p-80 rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  <h3>Get In Touch With Us</h3>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="form-style-one"
                  action="#"
                  name="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control"
                          defaultValue=""
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          id="emailid"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={3}
                          placeholder="Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two mt-15 w-100"
                        >
                          send message <i className="far fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-info-wrap wow fadeInLeft delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-10">Need Consultations ?</span>
                  <h2>Need A Project? We Would Love To Hear From You.</h2>
                </div>
                <div className="contact-info-part">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-map-marked-alt" />
                    </div>
                    <div className="content">
                      <span>Location</span>
                      <h5>Kodambakkam, Chennai</h5>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope-open-text" />
                    </div>
                    <div className="content">
                      <span>Email Us</span>
                      <h5>
                        <a href="mailto:support@gmail.com">sales@asktek.net</a>
                      </h5>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="content">
                      <span>Hotline</span>
                      <h5>
                        <a href="calto:+04445034080">+044 4503 4080</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Contact Form Section End */}
    </Layout>
  );
};
export default ServiceDetails;
