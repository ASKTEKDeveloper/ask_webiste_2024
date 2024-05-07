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
const customChatboxStyle = {
  backgroundColor: "lightblue", // Change the background color here
  // Add more styles as needed
};

const Layout = ({ children, header }) => {
  useEffect(() => {
    animation();
  }, []);

  const customChatboxStyle = {
    backgroundColor: "lightblue", 
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
        <ScrollTopButton />
        <FloatingWhatsApp
          phoneNumber="9566377721"
          accountName="ASK TECH"
          avatar="https://ik.imagekit.io/sathishask2024/Untitled%20design.png?updatedAt=1715087838298"
          chatboxStyle={customChatboxStyle}
        />
      </div>
    </Fragment>
  );
};
export default Layout;
