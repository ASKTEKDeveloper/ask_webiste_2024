import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import {
  Chip,
  Typography,
  Button,
  Container,
  Divider,
  InputLabel,
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
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Grid } from "@mui/material";

import { TextField, MenuItem } from "@mui/material";

import axios from "@/axios";

const Careers = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    gender: "",
    years_of_experience: "",
    resume: "",
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);
      setOpenSnackbar(true);
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.name) {
      errors.name = "Please enter your name";
      formIsValid = false;
    }

    if (!formData.phone_number) {
      errors.phone_number = "Please enter your phone number";
      formIsValid = false;
    }

    if (!formData.email) {
      errors.email = "Please enter your email";
      formIsValid = false;
    }

    if (!formData.gender) {
      errors.gender = "Please select your gender";
      formIsValid = false;
    }

    if (!formData.years_of_experience) {
      errors.years_of_experience = "Please enter your years of experience";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
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
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <h4 className="text-gradient-title2 ">
                  {" "}
                  We're on the lookout for talented individuals like you to join
                  our team! At ASK Technology, we offer a dynamic, innovative
                  environment where your ideas are valued, and your growth is
                  supported
                </h4>
                {/* <div className="image my-50 wow fadeInUp delay-0-2s">
                  <img
                    src="/assets/images/projects/mockup-erp.png"
                    alt="Service Details"
                    style={{ objectFit: "contain", maxWidth: "60%" }}
                  />
                </div> */}
                {/* <p>
                  We're on the lookout for talented individuals like you to join
                  our team! At ASK Technology, we offer a dynamic, innovative
                  environment where your ideas are valued, and your growth is
                  supported
                </p> */}
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
                <form onSubmit={handleSubmit} className="bg-white">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <InputLabel
                        htmlFor="resume-upload"
                        className="inputstextlabel"
                      >
                        Name
                      </InputLabel>
                      <TextField
                        fullWidth
                        // label="Name"
                        variant="outlined"
                        name="name"
                        style={{ fontFamily: "oswald" }}
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name ? true : false}
                        helperText={errors.name}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <InputLabel
                        htmlFor="resume-upload"
                        className="inputstextlabel"
                      >
                        Phone no
                      </InputLabel>
                      <TextField
                        fullWidth
                        // label="Phone no"
                        variant="outlined"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        error={errors.phone_number ? true : false}
                        helperText={errors.phone_number}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <InputLabel
                        htmlFor="resume-upload"
                        className="inputstextlabel"
                      >
                        Email
                      </InputLabel>

                      <TextField
                        fullWidth
                        // label="Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        select
                        label="Gender"
                        variant="outlined"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        error={errors.gender ? true : false}
                        helperText={errors.gender}
                        required
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Years of Experience"
                        variant="outlined"
                        type="number"
                        name="years_of_experience"
                        value={formData.years_of_experience}
                        onChange={handleChange}
                        error={errors.years_of_experience ? true : false}
                        helperText={errors.years_of_experience}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputLabel
                        htmlFor="resume-upload"
                        className="inputstextlabel"
                      >
                        Upload Resume (PDF, DOCX)
                      </InputLabel>
                      <TextField
                        fullWidth
                        variant="outlined"
                        type="file"
                        id="resume-upload"
                        name="resume"
                        onChange={handleChange}
                        inputProps={{ accept: ".pdf,.docx" }}
                        required
                        sx={{ borderStyle:'dotted'}}
                      />
                    </Grid>

                    <Grid item xs={12} justifyContent={"center"}>
                      <Button
                        variant="outlined"
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
                </form>
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
    </Layout>
  );
};
export default Careers;
