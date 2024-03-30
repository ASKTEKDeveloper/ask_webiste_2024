import { sliderTwoActive } from "@/src/sliderProps";
import { Container } from "@mui/material";
import Link from "next/link";
import { Component, Fragment } from "react";
import Slider from "react-slick";

export default class Hero4Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <Fragment>
        <Slider
          {...sliderTwoActive}
          ref={(c) => (this.slider = c)}
          className="slider-two-active"
        >
          <div className="slider-item-two">
            <Container >
              <div className="slide-content">
                <span className="sub-title" style={{color:"#3E54AC"}}>Welcome to ASK  Technology</span>
                <h2 style={{textTransform:'capitalize', color:"#0079FF"}}>WE BRING SUCCESS TO YOUR GREAT BUSINESS</h2>
                <p>
                  Revolutionize your operations with Ask Technology's
                  cutting-edge solutions. From ERP tailored for Textile &
                  Garment Industries to Enterprise-level Goods Traders
                  Management, our suite of products is designed for excellence
                </p>

                <Link legacyBehavior href="/about">
                  <a className="theme-btn style-two  mt-15">
                  Explore Our Solutions <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>               
              </div>
            </Container>
            <div
              className="slider-image"
              style={{
                backgroundImage: "url(assets/images/home/home3.jpg)",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
              }}
            />
          </div>
         
         
        </Slider>
        <div className="slider-arrows">
          <div className="container rel">
            <button className="prev-slider slick-arrow" onClick={this.previous}>
              <i className="fal fa-angle-left" />
            </button>
            <button className="next-slider slick-arrow" onClick={this.next}>
              <i className="fal fa-angle-right" />
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
