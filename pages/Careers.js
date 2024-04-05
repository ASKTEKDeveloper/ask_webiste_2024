import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import path from "path";

import {
  Chip,
  Typography,
  Button,
  Container,
  Divider,
  InputLabel,
  Stack,
  Box,
  LinearProgress,
} from "@mui/material";
import Link from "next/link";
import { CgWorkAlt } from "react-icons/cg";
import { GiReceiveMoney } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { CgDisplayFlex } from "react-icons/cg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { FcIdea } from "react-icons/fc";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Grid } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { TextField, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import axios from "axios";

const StyledButton = styled(Button)({
  whiteSpace: "nowrap",
  width: "100%",
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const useStyles = styled((theme) => ({
  fileInput: {
    display: "none",
  },
  chooseFileButton: {
    width: "100%",
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const Careers = () => {
  const theme = useTheme();
  const [openLoader, setOpenLoader] = useState(false);
  const classes = useStyles();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedFilePhoto, setSelectedFilePhoto] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFilePath, setSelectedFilePath] = useState("");

  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];
      setSelectedFilePhoto(file);
      setSelectedFileName(file.name);

      // Create FormData object to send the file to server
      const formData = new FormData();
      formData.append("file", file);

      // Log the FormData object to verify file data
      console.log("formData:", formData);

      // Upload file to server
      const response = await axios.post("/api/upload", formData);

      // Assuming server returns the file path
      const filePath = response.data.filePath;
      setSelectedFilePath(filePath);
      console.log("file path", filePath);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setOpenLoader(true);
    try {
      const response = await axios.post("/api/Careers/CareersForm", values);
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
    const approvs = await axios
      .post("/api/Email/SendMail", {
        FromMailid: "hr@asktek.net",
        ToMailid: `${datas.email}`,
        CcMailid: "",
        CcMailid1: "",
        CcMailid2: "",
        Subject: "Application for Job Opportunity at ASK Technology",
        SmtpServer: "us2.smtp.mailhostbox.com",
        MailPassowrd: "Saima@99559#",
        Body: `
        <p>Dear ${datas.name},</p>
        <p>Thank you for considering a career opportunity at ASK Technology.</p>
        <p>We have received your application and appreciate your interest in joining our team.</p>
        <p>Our hiring team will review your application thoroughly. If your qualifications match our requirements, we will contact you for further steps in the recruitment process.</p>
        <p>If you have any questions or need further information, please feel free to reach out to us.</p>
        <p>Best Regards,</p>
        <p>ASK Technology HR Team</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ hr@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
        `,
        SmtpPort: 587,
        Filepathattach: "",
        // "C:\\inetpub\\wwwroot\\TechVeel_API\\Views\\Participation_Certificate1.pdf",
      })
      .then((res) => {
        if (res.data === "Email Send Succefully") {
          setOpenLoader(false);
        } else {
          setOpenLoader(false);
        }
      });
  };

  const SendMail2 = async (datas) => {
    const approvs = await axios
      .post("/api/Email/SendMail", {
        FromMailid: "hr@asktek.net",
        ToMailid: `${datas.email}`,
        CcMailid: "",
        CcMailid1: "",
        CcMailid2: "",
        Subject: "New Job Application Received",
        SmtpServer: "us2.smtp.mailhostbox.com",
        MailPassowrd: "Saima@99559#",
        Body: `
        <p>Dear HR Team,</p>
        <p>A new job application has been received from:</p>
        <p><strong>Name:</strong> ${datas.name}</p>
        <p><strong>Email:</strong> ${datas.email}</p>
        <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
        <p>Please review the application and proceed with the necessary steps in the recruitment process.</p>
        <p>Best Regards,</p>
        <p>ASK Technology HR Team</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ hr@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
        `,
        SmtpPort: 587,
        Filepathattach: "",
        // "C:\\inetpub\\wwwroot\\TechVeel_API\\Views\\Participation_Certificate1.pdf",
      })
      .then((res) => {
        if (res.data === "Email Send Succefully") {
          setOpenLoader(false);
          Swal.fire({
            title: "Thank you!",
            text: "Your job application has been submitted successfully. We'll review your application and get back to you shortly",
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
      <img
        src="assets/images/careers/careers.jpg"
        alt="Blog Single"
        style={{ maxWidth: "100%" }}
      />

      <section className="project-grid-area rel z-2 py-50 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="section-title text-center mb-50 wow  delay-0-2s">
                <h4 className="text-gradient-title2 ">
                  {" "}
                  We're on the lookout for talented individuals like you to join
                  our team! At ASK Technology, we offer a dynamic, innovative
                  environment where your ideas are valued, and your growth is
                  supported
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area-six  rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-45">
            <h3 className="text-black-50">Why Choose Us ?</h3>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon" style={{ color: "#0C359E" }}>
                  <CgWorkAlt />
                </div>
                <h4>Innovative Careers</h4>
                <p>Join a team that thrives on innovation and creativity.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-4s">
                <div className="icon" style={{ color: "#0C359E" }}>
                  <AiOutlineRise />
                </div>
                <h4>Growth Opportunities</h4>
                <p>
                  We invest in your growth and offer opportunities for
                  advancement.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon" style={{ color: "#0C359E" }}>
                  <RiTeamLine />
                </div>
                <h4>Collaborative Culture</h4>
                <p>
                  Work alongside brilliant minds in a supportive, inclusive
                  environment.
                </p>
              </div>
            </div>{" "}
            <div className="col-lg-3 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon" style={{ color: "#0C359E" }}>
                  <HiOutlineComputerDesktop />
                </div>
                <h4>Meaningful Impact</h4>
                <p>
                  Contribute to projects that make a difference in our world.
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>

      <section
        className="contact-form-area py-50 pb-100 px-3  rpy-100  mb-4 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/background/feature-bg.jpg)",
        }}
      >
        <Container>
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6 mb-40">
              <div className="d-flex justify-content-center align-items-center gap-5 contact-info-wrap wow fadeInLeft delay-0-2s">
                <div className="section-title text-center mb-40">
                  <h2 className="text-gradient-title3">How to Apply</h2>
                  <p>
                    Complete the application form to submit your application.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-5 contact-info-wrap wow fadeInLeft delay-0-2s">
                <div className="why-choose-image d-flex justify-content-center align-items-center gap-2 fadeInUp rmb-55">
                  <img
                    src="/assets/images/hire/hire.png"
                    alt="Why Choose"
                    style={{ maxWidth: "60%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form shadowbox-2 bg-white p-50">
                <Formik
                  initialValues={{
                    name: "",
                    phone_number: "",
                    email: "",
                    gender: "",
                    years_of_experience: "",
                    resume: null,
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = "Please enter your name";
                    }
                    if (!values.phone_number) {
                      errors.phone_number = "Please enter your phone number";
                    }
                    if (!values.email) {
                      errors.email = "Please enter your email";
                    }
                    if (!values.gender) {
                      errors.gender = "Please select your gender";
                    }
                    if (!values.years_of_experience) {
                      errors.years_of_experience =
                        "Please enter your years of experience";
                    }
                    if (!values.resume) {
                      errors.resume = "Please upload your resume";
                    }
                    return errors;
                  }}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form className="bg-white">
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                          <InputLabel
                            htmlFor="resume-upload"
                            className="inputstextlabel"
                          >
                            Name
                          </InputLabel>
                          <Field name="name">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={form.errors.name && form.touched.name}
                                helperText={
                                  form.errors.name &&
                                  form.touched.name &&
                                  form.errors.name
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <InputLabel
                            htmlFor="resume-upload"
                            className="inputstextlabel"
                          >
                            Phone no
                          </InputLabel>

                          <Field name="phone_number">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={
                                  form.errors.phone_number &&
                                  form.touched.phone_number
                                }
                                helperText={
                                  form.errors.phone_number &&
                                  form.touched.phone_number &&
                                  form.errors.phone_number
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <InputLabel
                            htmlFor="resume-upload"
                            className="inputstextlabel"
                          >
                            Email
                          </InputLabel>

                          <Field name="email">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={form.errors.email && form.touched.email}
                                helperText={
                                  form.errors.email &&
                                  form.touched.email &&
                                  form.errors.email
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={6}>
                          <InputLabel
                            htmlFor="resume-upload"
                            className="inputstextlabel"
                          >
                            Gender
                          </InputLabel>
                          <Field name="gender">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                select
                                variant="outlined"
                                size="small"
                                error={
                                  form.errors.gender && form.touched.gender
                                }
                                helperText={
                                  form.errors.gender &&
                                  form.touched.gender &&
                                  form.errors.gender
                                }
                              >
                                <MenuItem value="m">Male</MenuItem>
                                <MenuItem value="f">Female</MenuItem>
                                <MenuItem value="o">Other</MenuItem>
                              </TextField>
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={6}>
                          <InputLabel
                            htmlFor="resume-upload"
                            className="inputstextlabel"
                          >
                            Yrs of Experience
                          </InputLabel>

                          <Field name="years_of_experience">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                variant="outlined"
                                size="small"
                                type="number"
                                error={
                                  form.errors.years_of_experience &&
                                  form.touched.years_of_experience
                                }
                                helperText={
                                  form.errors.years_of_experience &&
                                  form.touched.years_of_experience &&
                                  form.errors.years_of_experience
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12}>
                          <Field name="resume">
                            {({ field, form }) => (
                              <>
                                <Box fullWidth>
                                  <label
                                    htmlFor="fileInput"
                                    style={{ width: "100%" }}
                                  >
                                    <Button
                                      fullWidth
                                      component="span"
                                      className={classes.chooseFileButton}
                                      variant="outlined"
                                      size="large"
                                      startIcon={<CloudUploadIcon />}
                                    >
                                      {selectedFileName
                                        ? "Change Attached"
                                        : "Upload Resume (PDF, DOCX)"}
                                    </Button>
                                    <input
                                      className={classes.fileInput}
                                      id="fileInput"
                                      type="file"
                                      accept=".pdf,.doc,.docx"
                                      onChange={(event) => {
                                        handleFileChange(event);
                                        form.setFieldValue(
                                          "resume",
                                          event.currentTarget.files[0]
                                        );
                                      }}
                                      style={{ display: "none" }}
                                    />
                                  </label>
                                </Box>
                                {/* Display error message if resume field has error */}
                                {form.errors.resume && form.touched.resume && (
                                  <Typography color="error" variant="caption">
                                    {form.errors.resume}
                                  </Typography>
                                )}
                                {/* Display selected file name */}
                                {selectedFileName && (
                                  <Typography
                                    textTransform={"capitalize"}
                                    variant="caption"
                                    color="inherit"
                                  >
                                    {selectedFileName}
                                  </Typography>
                                )}
                              </>
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} justifyContent={"center"}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            type="submit"
                            endIcon={<i className="far fa-long-arrow-right" />}
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <p className="py-50">
              If you don't see a suitable position, feel free to send your
              resume to
              <span className="sub-title mx-10" style={{ color: "blue" }}>
                {" hr@asktek.net "}
              </span>
              We're eager to hear from talented individuals like you!"
            </p>
          </div>
        </Container>
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
export default Careers;
