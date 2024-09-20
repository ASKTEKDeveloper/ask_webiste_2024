import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import FaqHire from "@/src/components/faqHire";
import { Nav, Tab } from "react-bootstrap";
import {
  mainSliderActive,
  serviceThreeSlider,
  testimonialThreeSlider,
  servicesFiveActive,
  projectThreeActive,
  testimonialSlider,
} from "@/src/sliderProps";

import Marquee from "react-fast-marquee";
import Link from "next/link";
import Slider from "react-slick";
import { Container, Paper, Typography } from "@mui/material";
import { GiReceiveMoney } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { CgDisplayFlex } from "react-icons/cg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";

import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";

import { LiaBusinessTimeSolid } from "react-icons/lia";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IoSchoolSharp } from "react-icons/io5";
import { FaShip } from "react-icons/fa6";
import { MdOutlineFactory } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

import { MdOutlineRealEstateAgent } from "react-icons/md";

import dynamic from "next/dynamic";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

import { TbBulb } from "react-icons/tb";
import { SiLinkerd } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { RiFocus2Line } from "react-icons/ri";
import { TbLayersLinked } from "react-icons/tb";
import { SlLike } from "react-icons/sl";

const GarmentManufacturing = () => {
  const theme = useTheme();
  const matchesBigScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Layout>
      <section className="about-area-five py-50 rel z-1">
        <Container maxWidth={"lg"}>
          <div className="row align-items-center gap-100">
            <div className="col-lg-7">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">Empower Your</span>
                  <h2 className="text-gradient-title3">
                    Garment Business with Technology
                  </h2>
                </div>
                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon icon-size">
                        <img
                          src="/assets/images/projects/ob/fashion.png"
                          alt="Icon"
                        />
                      </div>
                      {/*                     
                      <div className="icon">
                        <i className="flaticon-br-shirt" />
                      </div> */}
                      <h4 className="text-gradient-title">
                        Boost Garment <br />
                        Efficiency
                      </h4>
                      <p>
                        Automate processes, reduce errors, and speed up
                        production with advanced software
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon icon-size">
                        <img
                          src="/assets/images/projects/ob/sewing-machine.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="text-gradient-title">
                        Optimize Garment <br />
                        Potential
                      </h4>
                      <p>
                        Improve visibility, optimize resources, and enhance
                        decisions with smart solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {matchesBigScreen && (
              <div className="col-lg-5">
                <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                  <img
                    src="assets/images/hire/gar3.png"
                    alt="About"
                    style={{ borderRadius: 20, objectFit: "contain" }}
                  />
                  <img
                    src="assets/images/hire/gar1.png"
                    alt="About"
                    style={{ borderRadius: 20, objectFit: "contain" }}
                  />
                  <img
                    className="abut-bg-shape"
                    src="assets/images/about/about-five-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
      <section className="services-area-five pt-50 rpt-35  rpb-100 rel z-2">
        <Container>
          <div className="col-lg-12">
            <div className="about-content my-55 rel z-1 wow fadeInLeft delay-0-2s">
              <div className="section-title text-center rmb-40">
                <h2
                  className="text-gradient-title2 mb-15"
                  style={{ fontFamily: "Play", textTransform: "uppercase" }}
                >
                  Our Garment Industry Solutions
                </h2>
                <span className="sub-title mb-15">
                  Explore our comprehensive suite of software solutions designed
                  to enhance efficiency, streamline operations, and boost
                  productivity in the garment sector. Each of our products is
                  crafted to meet the unique needs of the industry, ensuring you
                  have the tools necessary for success.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Services Area Two start */}
      <section className="services-area-two py-50 rel z-2">
        <Container maxWidth={"xl"}>
          <div className="row">
            <div className="col-lg-6 round-2">
              <div
                className=" service-item-five industries-grid wow fadeInUp delay-0-2s"
                style={{ maxHeight: "400px" }}
              >
                <img
                  src="assets/images/hire/tbmspng.png"
                  alt="Services"
                  style={{ objectFit: "cover" }}
                />
                <div className="content" id="maxxwid">
                  <div className="icon-title">
                    <div className="icon2" style={{ marginBottom: 50 }}>
                      <img
                        src="assets/images/services/garments.jpg"
                        alt="Icon"
                        style={{
                          borderRadius: 20,
                          minWidth: "120px",
                          height: "120px",
                          objectFit: "contain",
                          backgroundColor: "none",
                        }}
                      />
                    </div>

                    <h4>
                      {" "}
                      <Link legacyBehavior href="buying_house_management">
                        Buying House Management
                      </Link>{" "}
                    </h4>
                    <div className="d-flex justify-content-start">
                      <Link legacyBehavior href="buying_house_management">
                        <a
                          className="read-more "
                          style={{
                            color: "white",
                            backgroundColor: "#198754",
                            borderRadius: "5px",
                            padding: "7px",
                            marginBottom: "10px",
                            fontFamily: "inherit",
                          }}
                        >
                          Know More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Efficiently manage buying processes, streamline
                      communication, and ensure smooth order management for your
                      business.
                    </p>
                  </div>
                </div>
                <span className="bg-text">TBMS</span>
              </div>
            </div>

            <div className="col-lg-6 round-2">
              <div
                className=" service-item-five industries-grid wow fadeInUp delay-0-2s"
                style={{ maxHeight: "400px" }}
              >
                <img
                  src="assets/images/hire/ob.png"
                  alt="Services"
                  style={{ objectFit: "cover" }}
                />
                <div className="content" id="maxxwid">
                  <div className="icon-title">
                    <div className="icon2" style={{ marginBottom: 50 }}>
                      <img
                        src="assets/images/projects/ob/obb.png"
                        alt="Icon"
                        style={{
                          borderRadius: 20,
                          minWidth: "120px",
                          height: "120px",
                          objectFit: "contain",
                          backgroundColor: "none",
                        }}
                      />
                    </div>

                    <h4>
                      {" "}
                      <Link legacyBehavior href="operation_bulletin">
                        Operation Bulletin (QUICK OB)
                      </Link>{" "}
                    </h4>
                    <div className="d-flex justify-content-start">
                      <Link legacyBehavior href="operation_bulletin">
                        <a
                          className="read-more "
                          style={{
                            color: "white",
                            backgroundColor: "#198754",
                            borderRadius: "5px",
                            padding: "7px",
                            marginBottom: "10px",
                            fontFamily: "inherit",
                          }}
                        >
                          Know More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Track production in real-time and manage piece rates to
                      improve factory efficiency and overall productivity.
                    </p>
                  </div>
                </div>
                <span className="bg-text">QUICK OB</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 round-2">
              <div
                className=" service-item-five industries-grid wow fadeInUp delay-0-2s"
                style={{ maxHeight: "400px" }}
              >
                <img
                  src="assets/images/hire/gar3.png"
                  alt="Services"
                  style={{ objectFit: "cover" }}
                />
                <div className="content" id="maxxwid">
                  <div className="icon-title">
                    <div className="icon2" style={{ marginBottom: 50 }}>
                      <img
                        src="assets/images/services/production.png"
                        alt="Icon"
                        style={{
                          borderRadius: 20,
                          minWidth: "120px",
                          height: "120px",
                          objectFit: "contain",
                          backgroundColor: "white",
                          padding: 5,
                        }}
                      />
                    </div>

                    <h4>
                      {" "}
                      <Link legacyBehavior href="garments_sampling_software">
                        Garments Sampling Module
                      </Link>{" "}
                    </h4>
                    <div className="d-flex justify-content-start">
                      <Link legacyBehavior href="garments_sampling_software">
                        <a
                          className="read-more "
                          style={{
                            color: "white",
                            backgroundColor: "#198754",
                            borderRadius: "5px",
                            padding: "7px",
                            marginBottom: "10px",
                            fontFamily: "inherit",
                          }}
                        >
                          Know More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Simplify the sampling process, track approvals, and ensure
                      timely prototype delivery for faster market readiness.
                    </p>
                  </div>
                </div>
                <span className="bg-text">SAMPLING</span>
              </div>
            </div>

            <div className="col-lg-6 round-2">
              <div
                className=" service-item-five industries-grid wow fadeInUp delay-0-2s"
                style={{ maxHeight: "400px" }}
              >
                <img
                  src="assets/images/hire/manufacturing.png"
                  alt="Services"
                  style={{ objectFit: "cover" }}
                />
                <div className="content" id="maxxwid">
                  <div className="icon-title">
                    <div className="icon2" style={{ marginBottom: 50 }}>
                      <img
                        src="assets/images/projects/ob/output-onlinepngtools.png"
                        alt="Icon"
                        style={{
                          borderRadius: 20,
                          minWidth: "120px",
                          height: "120px",
                          objectFit: "contain",
                          backgroundColor: "none",
                          backgroundColor: "white",
                          padding: 10,
                        }}
                      />
                    </div>

                    <h4>
                      {" "}
                      <Link legacyBehavior href="garment_inspection_softwares">
                        Garment Inspection Software
                      </Link>{" "}
                    </h4>
                    <div className="d-flex justify-content-start">
                      <Link legacyBehavior href="garment_inspection_softwares">
                        <a
                          className="read-more "
                          style={{
                            color: "white",
                            backgroundColor: "#198754",
                            borderRadius: "5px",
                            padding: "7px",
                            marginBottom: "10px",
                            fontFamily: "inherit",
                          }}
                        >
                          Know More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Manage quality control effectively, reduce defects, and
                      ensure every product meets your highest quality standards.
                    </p>
                  </div>
                </div>
                <span className="bg-text">QUALITY</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 round-2">
              <div
                className=" service-item-five industries-grid wow fadeInUp delay-0-2s"
                style={{ maxHeight: "400px" }}
              >
                <img
                  src="assets/images/hire/erpg.png"
                  alt="Services"
                  style={{ objectFit: "cover" }}
                />
                <div className="content" id="maxxwid">
                  <div className="icon-title">
                    <div className="icon2" style={{ marginBottom: 50 }}>
                      <img
                        src="assets/images/services/erp33.png"
                        alt="Icon"
                        style={{
                          borderRadius: 20,
                          minWidth: "120px",
                          height: "120px",
                          objectFit: "contain",
                          backgroundColor: "white",
                          padding: 5,
                        }}
                      />
                    </div>

                    <h4>
                      {" "}
                      <Link legacyBehavior href="erp-for-textiles-and-garments">
                        Garment ERP for Knit & Woven
                      </Link>{" "}
                    </h4>
                    <div className="d-flex justify-content-start">
                      <Link legacyBehavior href="erp-for-textiles-and-garments">
                        <a
                          className="read-more "
                          style={{
                            color: "white",
                            backgroundColor: "#198754",
                            borderRadius: "5px",
                            padding: "7px",
                            marginBottom: "10px",
                            fontFamily: "inherit",
                          }}
                        >
                          Know More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Integrate all key production functions, from inventory to
                      scheduling, with our ERP tailored for garment
                      manufacturers.
                    </p>
                  </div>
                </div>
                <span className="bg-text">ERP</span>
              </div>
            </div>

            <div className="col-lg-6 round-2">
              <div
                className=" service-item-five industries-grid wow fadeInUp delay-0-2s"
                style={{ maxHeight: "400px" }}
              >
                <img
                  src="assets/images/hire/garmentisnpetion.png"
                  alt="Services"
                  style={{ objectFit: "cover" }}
                />
                <div className="content" id="maxxwid">
                  <div className="icon-title">
                    <div className="icon2" style={{ marginBottom: 50 }}>
                      <img
                        src="assets/images/services/supply-chain-management.png"
                        alt="Icon"
                        style={{
                          borderRadius: 20,
                          minWidth: "120px",
                          height: "120px",
                          objectFit: "contain",
                          backgroundColor: "white",
                          padding: 5,
                        }}
                      />
                    </div>

                    <h4>
                      {" "}
                      <Link legacyBehavior href="garments_exports_software">
                        Garment Export Application
                      </Link>{" "}
                    </h4>
                    <div className="d-flex justify-content-start">
                      <Link legacyBehavior href="garments_exports_software">
                        <a
                          className="read-more "
                          style={{
                            color: "white",
                            backgroundColor: "#198754",
                            borderRadius: "5px",
                            padding: "7px",
                            marginBottom: "10px",
                            fontFamily: "inherit",
                          }}
                        >
                          Know More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Easily manage export documentation, track shipments, and
                      stay compliant with all international trade regulations.
                    </p>
                  </div>
                </div>
                <span className="bg-text">EXPORT</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Partners Area start */}
      <section className="partners-area   py-50 rel z-1">
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
              <div>
                <img
                  src="assets/images/clients/1.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div>
                <img
                  src="assets/images/clients/2.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div>
                <img
                  src="assets/images/clients/3.webp"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div>
                <img
                  src="assets/images/clients/4.webp"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>

              <div>
                <img
                  src="assets/images/clients/5.jpg"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div>
                <img
                  src="assets/images/clients/6.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div>
                <img
                  src="assets/images/clients/7.jpg"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div>
                <img
                  src="assets/images/clients/8.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                  className="client-logo"
                />
              </div>
              <div>
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
      <section className="why-choose-us-area py-50 rel z-1">
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
                          // className="why-choose-img"
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
          {/* <img
            className="shape one"
            src="assets/images/about/why-choose-shape1.png"
            alt="Shape"
          /> */}
          {/* <img
            className="shape two"
            src="assets/images/about/why-choose-shape2.png"
            alt="Shape"
          /> */}
        </div>
      </section>
      {/* Why Choose Us Area end */}

      {/* Statistics Area start */}
      <section className="statistics-area-two px-3   rel z-2 mb-100 rmb-100">
        <Container maxWidth="xl">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-10">
                  Learn About Our Company Statistics
                </span>
              </div>
            </div>
          </div>
          <div className="row no-gap justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/programming.png"
                    alt="programming"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={2000}
                    data-stop={500}
                  >
                    <Counter end={500} />
                  </span>
                  <span className="counter-title">Projects Delivered</span>
                  <p>
                    Showcasing our commitment to excellence, integrity, and
                    client satisfaction
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-7s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/review.png"
                    alt="review"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text percent"
                    data-speed={2000}
                    data-stop={98.9}
                  >
                    <Counter end={98.9} />
                  </span>
                  <span className="counter-title">Happy clients </span>
                  <p>
                    clients happiness is our priority, reflected in our
                    impressive 98.9% satisfaction rate.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-5s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/reputation.png"
                    alt="review"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={2000}
                    data-stop={25}
                  >
                    <Counter end={25} />
                  </span>
                  <span className="counter-title">Years of Experience</span>
                  <p>
                    and industry expertise, we bring a wealth of experience to
                    every project
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-5s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/teamwork.png"
                    alt="reputation"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={2000}
                    data-stop={25}
                  >
                    <Counter end={100} />
                  </span>
                  <span className="counter-title">Engineers </span>
                  <p>
                    of our team is dedicated to delivering innovative solutions
                    and driving success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};
export default GarmentManufacturing;
