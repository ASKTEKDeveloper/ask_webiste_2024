import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { TextField, Dialog, Grid, LinearProgress } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const Contact = () => {
  const [openLoader, setOpenLoader] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setOpenLoader(true);
    try {
      const response = await axios.post("/api/Contact/ContactUS", values);
      console.log("Form submitted successfully:", response.data);
      SendMail(values);
      SendMail2(values);
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error!",
        text: "Error submitting form. Please try again later.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const SendMail = async (datas) => {
    setOpenLoader(true);
    const subjectLine = "New Contact Form Submission: " + datas.subject;
    const bodyMessage = `
        <p>Dear Team,</p>
        <p>A new message has been received from the website contact form:</p>
        <p><strong>Subject:</strong> ${datas.subject}</p>
        <p><strong>Name:</strong> ${datas.name}</p>
        <p><strong>Email:</strong> ${datas.email}</p>
        <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
        <p><strong>Message:</strong></p>
        <p>${datas.message}</p>
        <p>Please review the message and respond accordingly.</p>
        <p>Best regards,</p>
        <p>ASK TECHNOLOGY</p>
    `;
    const approvs = await axios
      .post("http://103.73.189.37/EmailAPi/api/Mail", {
        FromMailid: "hr@techveel.com",
        ToMailid: "sathish.asktech@gmail.com",
        CcMailid: "",
        CcMailid1: "",
        CcMailid2: "",
        Subject: subjectLine,
        SmtpServer: "us2.smtp.mailhostbox.com",
        MailPassowrd: "Rose@99559#",
        Body: bodyMessage,
        SmtpPort: 587,
        Filepathattach: "",
      })
      .then((res) => {
        if (res.data === "Email Send Succefully") {
          setOpenLoader(false);
          setOpen(false);
        } else {
          setOpenLoader(false);
        }
      });
  };

  const SendMail2 = async (datas) => {
    setOpenLoader(true);
    const subjectLine = "Your Message has been Received";
    const bodyMessageToUser = `
        <p>Dear ${datas.name},</p>
        <p>Thank you for contacting us!</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Here are the details you provided:</p>
        <p><strong>Subject:</strong> ${datas.subject}</p>
        <p><strong>Name:</strong> ${datas.name}</p>
        <p><strong>Email:</strong> ${datas.email}</p>
        <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
        <p><strong>Message:</strong></p>
        <p>${datas.message}</p>
        <p>Best regards,</p>
        <p>Your Website</p>
    `;
    const approvs = await axios
      .post("http://103.73.189.37/EmailAPi/api/Mail", {
        FromMailid: "hr@techveel.com",
        ToMailid: `${datas.email}`,
        CcMailid: "",
        CcMailid1: "",
        CcMailid2: "",
        Subject: subjectLine,
        SmtpServer: "us2.smtp.mailhostbox.com",
        MailPassowrd: "Rose@99559#",
        Body: bodyMessageToUser,
        SmtpPort: 587,
        Filepathattach: "",
      })
      .then((res) => {
        if (res.data === "Email Send Succefully") {
          setOpenLoader(false);
          setOpen(false);
          Swal.fire({
            title: "Thank you!",
            text: "Your message has been successfully submitted. We'll review it and respond shortly.",
            icon: "success",
            confirmButtonText: "Done",
          });
        } else {
          setOpenLoader(false);
        }
      });
  };

  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />{" "}
      <section className="contact-page-info pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row text-center mb-35 justify-content-center wow fadeInUp delay-0-2s">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">Need any Helps</span>
                <h2>Contact Informations</h2>
              </div>
              {/* <p>
                Sed ut perspiciatis unde omnis natus errorsit voluptatem
                accusantium doloremque laudantium aperiam eaque quae abillo
                inventore veritatis quasi architecto beatae vitae dicta sunt
                explicabo
              </p> */}
            </div>
          </div>
          <div className="row justify-content-center">
            {/* <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <h4>Locations</h4>
                <span>553 Main Street, 2nd - Block, New York 32500</span>
              </div>
            </div> */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="fal fa-envelope-open" />
                </div>
                <h4>Email Us</h4>
                <a href="mailto:sales@asktek.net">sales@asktek.net</a>
                <br />
                <br />
                {/* <a href="http://www.itservice.net">www.itservice.net</a> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fal fa-phone-plus" />
                </div>
                <h4>Locations</h4>
                <span>
                  Mobile : <a href="callto:+919840899559">+91 98408 99559</a>
                </span>
                <span>
                  Telephone : <a href="callto:+044-45034080">+044-45034080</a>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="fal fa-clock" />
                </div>
                <h4>Working Hour</h4>
                <b>Monday - Saturday,</b>
                <span>10:00am - 07:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7550794644962!2d80.22746827505244!3d13.051255813126886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267890e44ad75%3A0xa6eecf3f48cde4df!2sASK%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1711027578442!5m2!1sen!2sin"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Location Map Area End */}
      {/* Contact Form Start */}
      <section className="contact-page-form py-130 rpb-100">
        <div className="container">
          <div className="contact-form-wrap form-style-two bg-white wow fadeInUp delay-0-2s">
            <div className="row text-center mb-35 justify-content-center">
              <div className="col-xl-9 col-lg-11">
                <div className="section-title mb-25 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>We’re Here to Help You</h2>
                </div>
                <p>
                  Got a project in mind? We’d love to hear about it. Take five
                  minutes to fill out our project form so that we can get to
                  know you and understand your project.
                </p>
              </div>
            </div>
            <Formik
              initialValues={{
                name: "",
                phone_number: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Please provide your full name."),
                subject: Yup.string().required(
                  "Please provide a subject for your message."
                ),
                phone_number: Yup.string().required(
                  "Please enter your phone number."
                ),
                email: Yup.string()
                  .email("Please provide a valid email address.")
                  .required("Email address is required."),
                message: Yup.string()
                  .max(200, "should not exceed 200 characters.")
                  .required("Type here, whats on your mind"),
              })}
              onSubmit={handleSubmit}
            >
              <Form className=" p-10 m-25">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field name="name">
                      {({ field, form }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Name"
                          variant="outlined"
                          color="info"
                          error={form.errors.name && form.touched.name}
                          helperText={<ErrorMessage name="name" />}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field name="phone_number">
                      {({ field, form }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Phone no"
                          variant="outlined"
                          error={
                            form.errors.phone_number &&
                            form.touched.phone_number
                          }
                          helperText={<ErrorMessage name="phone_number" />}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field name="email">
                      {({ field, form }) => (
                        <TextField
                          {...field}
                          fullWidth
                          // required
                          label="Email"
                          variant="outlined"
                          type="email"
                          error={form.errors.email && form.touched.email}
                          helperText={<ErrorMessage name="email" />}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field name="subject">
                      {({ field, form }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Subject"
                          variant="outlined"
                          color="info"
                          // required
                          error={form.errors.subject && form.touched.subject}
                          helperText={<ErrorMessage name="subject" />}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Field name="message">
                      {({ field, form }) => (
                        <TextField
                          {...field}
                          fullWidth
                          multiline
                          rows={3}
                          label="Type Something..."
                          variant="outlined"
                          error={form.errors.message && form.touched.message}
                          helperText={<ErrorMessage name="message" />}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className="d-flex justify-content-center align-items-center gap-2"
                  >
                    <button type="submit" className="theme-btn style-two">
                      send message <i className="far fa-long-arrow-right" />
                    </button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
      {/* loader popup dialog box */}
      <Dialog
        open={openLoader}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <LinearProgress />
      </Dialog>
    </Layout>
  );
};
export default Contact;
