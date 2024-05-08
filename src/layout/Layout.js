import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Index";
import Header from "./header/Index";
import ScrollTopButton from "./ScrollTopButton";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../public/assets/images/logos/logo-one.png";

const Layout = ({ children, header }) => {
  useEffect(() => {
    animation();
  }, []);

  const customChatboxStyle = {
    backgroundColor: "white",
  };

  const customButtonStyle = {
    width: "50px",
    height: "50px",
  };

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <Preloader /> */}
        <Header header={header} />
        {children}
        {/* footer area start */}
        <Footer />
        {/* footer area end */}
        {/* Scroll Top Button */}
        {/* <ScrollTopButton /> */}
        <FloatingWhatsApp
          phoneNumber="9003802269"
          accountName="ASK TECH"
          avatar="http://103.73.189.37/techveellogo/askwa.png"
          chatboxStyle={customChatboxStyle}
          buttonStyle={customButtonStyle}
        />
      </div>
    </Fragment>
  );
};
export default Layout;
