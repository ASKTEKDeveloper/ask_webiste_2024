import Layout from "@/layout";
import {
  Chip,
  Container,
  Divider,
  Dialog,
  DialogContent,
  TextField,
  Grid,
  LinearProgress,
} from "@mui/material";
import ContactUsProduct from "./ContactUsProduct";
import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

import Slide from "@mui/material/Slide";

import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import { serviceThreeSlider } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import ContactUsGarments from "./ContactUsGarments";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ProjectGrid = () => {
  const [open, setOpen] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);

  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const brochuresPath = {
    ERP: "/assets/docs/ERP.pdf",
    SCM: "/assets/docs/HRMS.pdf",
    HRMS: "/assets/docs/HRMS.pdf",
    BMS: "/assets/docs/BMS.pdf",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setOpenLoader(true);
    try {
      const response = await axios.post("/api/Enquiry/ProductEnquiry", values);
      console.log("Form submitted successfully:", response.data);
      setOpen(false);
      SendMailProduct(values);
      SendMailInternal(values);
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error submitting form. Please try again later.");
    }
  };

  const SendMailProduct = async (datas) => {
    try {
      const response = await axios.post("/api/Email/SendMail3", {
        from: "sales@asktek.net",
        to: datas.email,
        subject: "Thank You for Downloading Our Product Brochure",
        text: `
        <p>Dear ${datas.name},</p>
        <p>Thank you for downloading our product brochure!</p>
        <p>We hope you find the information helpful and informative. 
        If you have any questions or would like further assistance, feel free to reach out to us.</p>
        <p>Best regards,</p>
        <p>ASK TECHNOLOGY</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
      `,
        SmtpPort: 587,
        Filepathattach: "",
      });

      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending product demo email:", error);
      setOpenLoader(false);
    }
  };

  const SendMailInternal = async (datas) => {
    try {
      const subjectLine = "User Downloaded Product Brochure";

      const bodyMessage = `
<p>Dear Team,</p>
<p>A user has downloaded our product brochure from our website:</p>
<p><strong>Name:</strong> ${datas.name}</p>
<p><strong>Email:</strong> ${datas.email}</p>
<p><strong>Phone Number:</strong> ${datas.phone_number}</p>
<p><strong>Company Name:</strong> ${datas.company_name}</p>
<p><strong>City:</strong> ${datas.city}</p>
<p>Please take note of this and follow up with the user if necessary.</p>
<p>Best regards,</p>
<p>ASK TECHNOLOGY</p>
<p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
<p><a href="http://www.asktek.net">www.asktek.net</a></p>
`;
      const approvs = await axios.post("/api/Email/SendMail3", {
        from: "sales@asktek.net",
        to: "sales@asktek.net",
        subject: subjectLine,
        text: bodyMessage,
        SmtpPort: 587,
        Filepathattach: "",
      });

      const product = datas.product;
      const brochurePath = brochuresPath[product];
      console.log("path", brochuresPath[product]);
      const link = document.createElement("a");
      link.href = brochurePath;
      link.setAttribute("download", `brochure_${product}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setOpenLoader(false);
      Swal.fire({
        title: "Thank you!",
        text: "Your product brochure has been successfully downloaded. If you have any further questions, feel free to reach out to us.",
        icon: "success",
        confirmButtonText: "Done",
      });
    } catch (error) {
      console.error("Error sending internal email:", error);
    }
  };

  return (
    <>
      <Layout>
        <>
          <section className="project-grid-area rel z-2 py-50 rpy-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s ">
                    <h2 className="text-gradient-title3">
                      Quick OB - Garment Industry Management Solutions
                    </h2>
                    <h5>
                      Streamline Operation Bulletin Planning and Boost
                      Efficiency with Quick OB
                    </h5>
                    <div className="image my-50 wow fadeInUp delay-0-2s">
                      <img
                        src="assets/images/projects/bms-mockup.png"
                        alt="Service Details"
                        style={{ objectFit: "contain", maxWidth: "60%" }}
                      />
                    </div>
                    <div className="d-flex justify-content-center alig n-items-center my-50 ">
                      <div class="button">
                        <a
                          onClick={handleButtonClick}
                          style={{ color: "white" }}
                        >
                          Download Brochure
                        </a>
                        <b class="top">Click to </b>
                        <b class="bottom">Document</b>
                      </div>
                    </div>
                    <p>
                      Quick OB is a cloud-based solution designed specifically
                      for garment manufacturers to streamline and digitize the
                      operation bulletin planning process. From accurate SMV
                      calculations to efficient production tracking, Quick OB
                      helps you manage resources, improve planning, and achieve
                      continuous performance improvement. Whether you're
                      handling real-time monitoring or planning for future
                      operations, Quick OB offers the tools you need to succeed
                      in today's competitive manufacturing landscape.
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
                <div className="section-title text-center ">
                  <Divider>
                    {/* <Chip label="Key Features" size="medium" /> */}
                  </Divider>
                </div>
              </div>
            </div>
          </section>

          {/* Functional Flow */}
          <section className="about-area-five  rel z-1 mb-25 ">
            <Container>
              <div className="row align-items-center gap-100">
                <div className="col-lg-12">
                  <div className="about-content  rel z-1 wow fadeInLeft delay-0-2s">
                    <div className="section-title text-center rmb-40 ">
                      <span className="sub-title mb-15">
                        Functional Flow for
                      </span>
                      <h3 className="text-gradient-title2">
                        Operation Bulletin
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-50  d-flex justify-content-center align-items-center gap-2  wow fadeInUp delay-0-2s">
                    <img src="assets/images/flowchart/bms.png" alt="steps" />
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="service-details-area px-3  rpt-100 pb-50 rpb-85">
            <Container>
              <div className="row gap-100">
                <div className="col-lg-12">
                  <div className="service-details-content">
                    <div className="section-title text-center mb-100 ">
                      <Divider>
                        <Chip
                          label="Functional Areas"
                          size="medium"
                          color="info"
                        />
                      </Divider>
                    </div>

                    <div className="mt-3 row gap-90  justify-content-center align-items-center mt-75 mb-100 ">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image fadeInUp rmb-55">
                          <img
                            src="assets/images/projects/erp/buyerc.png"
                            alt="Why Choose"
                            className="product-features-img "
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="blog-details-content wow fadeInUp delay-0-2s">
                          <div className="title mb-20">
                            <h3>
                              Application for Reducing Line Writer Workload
                            </h3>
                          </div>
                          <p>
                            Our solution offers a digital transformation for
                            line writing, helping reduce the workload of line
                            writers by streamlining the entire process. The
                            mobile application allows line writers to enter
                            production data directly, simplifying the task and
                            improving efficiency.
                          </p>
                          <ul className="list-style-one pt-10 pb-40">
                            <li>
                              Digitize line writing tasks for easy data entry.
                            </li>
                            <li>
                              Combine individual and line performance in one
                              entry.
                            </li>
                            <li>
                              Monitor production targets and employee efficiency
                              instantly.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90   fadeInRight justify-content-center  align-items-center mb-100">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="blog-details-content wow fadeInUp delay-0-2s">
                          <div className="title mb-20">
                            <h3>Application Benefits for Supervisors</h3>
                          </div>
                          <p>
                            This application offers powerful tools for
                            supervisors to manage and monitor production
                            efficiency. It allows supervisors to stay on top of
                            line performance, monitor employee output, and
                            access detailed reports in real-time.
                          </p>
                          <ul className="list-style-one pt-10 pb-40">
                            <li>
                              Real-time line production status at a glance.
                            </li>
                            <li>Identify high and low performers instantly.</li>
                            <li>
                              Access detailed, hour-by-hour production reports.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-6  fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/erp/factory.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90 fadeInUp  mb-100 justify-content-center align-items-center mb-100 ">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="assets/images/projects/erp/time.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="blog-details-content wow fadeInUp delay-0-2s">
                          <div className="title mb-20">
                            <h3>Reporting & Transparency</h3>
                          </div>
                          <p>
                            Our application empowers management by providing
                            real-time insights and fostering transparency across
                            the organization, allowing quick access to data
                            without relying on line writers or supervisors.
                          </p>
                          <ul className="list-style-one pt-10 pb-40">
                            <li>Real-time reporting anytime, anywhere.</li>
                            <li>
                              Transparency across all levels of the
                              organization.
                            </li>
                            <li>
                              Comprehensive unit-wise, line-wise, and
                              employee-wise performance reports.
                            </li>
                            <li>
                              Track employee efficiency to support performance
                              reviews and salary adjustments.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90  fadeInRight justify-content-center  align-items-center mb-100 ">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="blog-details-content wow fadeInUp delay-0-2s">
                          <div className="title mb-20">
                            <h3>Monitoring & Integration</h3>
                          </div>
                          <p>
                            The application drives continuous improvement with
                            planned vs. actual production monitoring, flexible
                            reporting, and seamless integration with your
                            current systems.
                          </p>
                          <ul className="list-style-one pt-10 pb-40">
                            <li>
                              Monitor planned vs. actual production for
                              continuous improvement.
                            </li>
                            <li>
                              Access day-wise, style-wise, and month-wise
                              reports.
                            </li>
                            <li>
                              Generate customizable reports tailored to your
                              needs.
                            </li>
                            <li>
                              Seamless integration with existing systems,
                              subject to compatibility.
                            </li>
                            <li>
                              Expert support with over 20 years of industry
                              experience.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-6   fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image ">
                          <img
                            src="assets/images/projects/erp/audit.png"
                            alt="Why Choose"
                            className="drp-shadow-img product-features-img "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          {/* What We Provide Area Start */}
          <section className="what-we-provide overflow-hidden pb-130 rpy-100 rel z-1">
            <div className="container">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                {/* <span className="sub-title mb-10"> </span> */}
                <h2>
                  Application for Reducing Industrial{" "}
                  <span className="text-success">Engineers' Time </span>
                </h2>
              </div>
              <Slider {...serviceThreeSlider} className="service-three-slider">
                <div className="service-item-three active wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/projects/ob/01.png"
                      alt="Service"
                      style={{
                        maxWidth: "410px",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="top-part">
                      <span className="number">01</span>
                      <div className="icon">
                        <i className="flaticon-coding-1" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Digitalized Operation Bulletin Planning
                        </Link>
                      </h4>
                    </div>
                    <div className="bottom-part">
                      <p>
                        Seamlessly plan operation bulletins with our cloud-based
                        platform, digitizing the entire process from start to
                        finish.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-item-three active wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="assets/images/projects/ob/02.png"
                      alt="Service"
                      style={{
                        maxWidth: "410px",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="top-part">
                      <span className="number">02</span>
                      <div className="icon">
                        <i className="flaticon-layers" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Accurate SMV Calculation
                        </Link>
                      </h4>
                    </div>
                    <div className="bottom-part">
                      <p>
                        Use the built-in time study feature to determine
                        Standard Minute Value (SMV) accurately, ensuring precise
                        and consistent results
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-item-three active wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/projects/ob/03.png"
                      alt="Service"
                      style={{
                        maxWidth: "410px",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="top-part">
                      <span className="number">03</span>
                      <div className="icon">
                        <i className="flaticon-coding-1" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Intelligent Reusability
                        </Link>
                      </h4>
                    </div>
                    <div className="bottom-part">
                      <p>
                        Get notified for repeat styles, allowing easy reuse of
                        operation bulletins and SMV calculations for similar
                        operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-item-three active wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="assets/images/projects/ob/04.png"
                      alt="Service"
                      style={{
                        maxWidth: "410px",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="top-part">
                      <span className="number">04</span>
                      <div className="icon">
                        <i className="flaticon-layers" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Efficient Production Planning
                        </Link>
                      </h4>
                    </div>
                    <div className="bottom-part">
                      <p>
                        Quickly plan machine counts, allocate workers, and
                        estimate production costs with accurate single-piece
                        time calculations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-item-three active wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/projects/ob/055.png"
                      alt="Service"
                      style={{
                        maxWidth: "410px",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="top-part">
                      <span className="number">05</span>
                      <div className="icon">
                        <i className="flaticon-coding-1" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Flexible Scheduling and Adjustments
                        </Link>
                      </h4>
                    </div>
                    <div className="bottom-part">
                      <p>
                        Easily adjust plans based on unit capacity, working
                        days, hours, and overtime requirements to meet
                        production goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-item-three active wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="assets/images/projects/ob/05.png"
                      alt="Service"
                      style={{
                        maxWidth: "410px",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="top-part">
                      <span className="number">06</span>
                      <div className="icon">
                        <i className="flaticon-layers" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Customizable Reporting Options
                        </Link>
                      </h4>
                    </div>
                    <div className="bottom-part">
                      <p>
                        Generate fully customizable reports tailored to your
                        specific business needs for better decision-making and
                        tracking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-item-three active wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/projects/ob/13.png"
                      alt="Service"
                      style={{
                        maxWidth: "410px",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="top-part">
                      <span className="number">07</span>
                      <div className="icon">
                        <i className="flaticon-coding-1" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Production Efficiency Tracking
                        </Link>
                      </h4>
                    </div>
                    <div className="bottom-part">
                      <p>
                        Track production efficiency at both the unit and
                        employee levels, using detailed time study data to
                        optimize performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-item-three active active wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="assets/images/projects/ob/08.png"
                      alt="Service"
                      style={{
                        maxWidth: "410px",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="top-part">
                      <span className="number">08</span>
                      <div className="icon">
                        <i className="flaticon-layers" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Operation Status Monitoring
                        </Link>
                      </h4>
                    </div>
                    <div className="bottom-part">
                      <p>
                        Stay updated on the status of your operation bulletins
                        with real-time tracking and notifications on every
                        operation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-item-three active wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="assets/images/projects/ob/09.png"
                      alt="Service"
                      style={{
                        maxWidth: "410px",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="top-part">
                      <span className="number">09</span>
                      <div className="icon">
                        <i className="flaticon-layers" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Planned vs. Actual Tracking
                        </Link>
                      </h4>
                    </div>
                    <div className="bottom-part">
                      <p>
                        Compare planned production against actual outcomes,
                        ensuring you stay aligned with production goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-item-three active wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="assets/images/projects/ob/10.png"
                      alt="Service"
                      style={{
                        maxWidth: "410px",
                        maxHeight: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <div className="top-part">
                      <span className="number">10</span>
                      <div className="icon">
                        <i className="flaticon-layers" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Skill Matrix Integration
                        </Link>
                      </h4>
                    </div>
                    <div className="bottom-part">
                      <p>
                        Identify operators based on their skill levels, helping
                        new industrial engineers find top performers within a
                        group.
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </section>

          {/* Contact Form Section Start */}
          <ContactUsGarments TypeOF={"p"} initialValue={"OB"} />
          {/* Contact Form Section End */}
        </>
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth={"xs"}
          TransitionComponent={Transition}
          keepMounted
        >
          <DialogContent className=" p-0 m-0 ">
            <div className=" align-items-center bg-white">
              <div className="col-lg-12 pt-50 ">
                <div
                  className={`d-flex bg-white justify-content-center ${
                    matchesSmallScreen && "flex-column-reverse"
                  }  align-items-centercontact-info-wrap wow fadeInLeft delay-0-2s`}
                >
                  <div className={`section-title text-center`}>
                    <h4
                      className="text-gradient-title3"
                      style={{ fontFamily: "oswald" }}
                    >
                      Please fill in the below details to download our product
                      brochure
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 ">
                <div className="   rmb-55 wow fadeInRight delay-0-2s">
                  <Formik
                    initialValues={{
                      name: "",
                      phone_number: "",
                      company_name: "",
                      email: "",
                      city: "",
                      TypeOfReq: "d",
                      product: "BMS",
                      enquiry_details: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string().required(
                        "Please provide your full name."
                      ),
                      phone_number: Yup.string().required(
                        "Please enter your phone number."
                      ),
                      email: Yup.string()
                        .email("Please provide a valid email address.")
                        .required("Email address is required."),
                      city: Yup.string().required("Please specify your city."),
                      company_name: Yup.string().required(
                        "Please specify the name of your company."
                      ),
                    })}
                    onSubmit={handleSubmit}
                  >
                    <Form className="bg-white p-25 ">
                      <Grid container spacing={1}>
                        <Grid item xs={12} className="mb-10">
                          <Field name="name">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Name"
                                variant="outlined"
                                color="info"
                                size="small"
                                error={form.errors.name && form.touched.name}
                                helperText={<ErrorMessage name="name" />}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} className="mb-10">
                          <Field name="phone_number">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Phone no"
                                variant="outlined"
                                size="small"
                                error={
                                  form.errors.phone_number &&
                                  form.touched.phone_number
                                }
                                helperText={
                                  <ErrorMessage name="phone_number" />
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} className="mb-10">
                          <Field name="company_name">
                            {({ field, form }) => (
                              <TextField
                                size="small"
                                {...field}
                                fullWidth
                                label="Your Company Name"
                                variant="outlined"
                                error={
                                  form.errors.company_name &&
                                  form.touched.company_name
                                }
                                helperText={
                                  <ErrorMessage name="company_name" />
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} className="mb-10">
                          <Field name="email">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                size="small"
                                label="Email"
                                variant="outlined"
                                type="email"
                                error={form.errors.email && form.touched.email}
                                helperText={<ErrorMessage name="email" />}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} className="mb-10">
                          <Field name="city">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="City"
                                size="small"
                                variant="outlined"
                                error={form.errors.city && form.touched.city}
                                helperText={<ErrorMessage name="city" />}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          className="d-flex justify-content-center mt-25 align-items-center"
                        >
                          <button type="submit" className="theme-btn style-two">
                            Download
                            <i className="far fa-long-arrow-right" />
                          </button>
                        </Grid>
                      </Grid>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Dialog
          open={openLoader}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
        >
          <LinearProgress />
        </Dialog>
      </Layout>
    </>
  );
};
export default ProjectGrid;
