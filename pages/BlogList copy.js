import { projectSliderActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Container } from "@mui/material";
import { useRef, useState } from "react";

const BlogList = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <section className="blog-area-four pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-30">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-25 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-10">Our Blog &amp; News</span>
                <h2>Latest Blog, News &amp; Articles</h2>
                <span className="bg-text">Blog</span>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link legacyBehavior href="/blog">
                <a className="theme-btn style-four mb-30 wow fadeInRight delay-0-2s">
                  View More.. <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="blog-item style-four wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="assets/images/blog/blog-details.jpeg" alt="Blog" />
            </div>
            <div className="content">
              <ul className="blog-meta">
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#">April 5, 2024</a>
                </li>
              </ul>
              <h4>
                <Link legacyBehavior href="blog-details">
                  Maximizing Efficiency with Custom ERP Solutions for
                  Manufacturing Industries
                </Link>
              </h4>
              <div className="author-more">
                <span className="author">
                  <a href="/" style={{ color: "#456e96" }}>
                    {" "}
                    By ASK TECHNOLOGY
                  </a>
                </span>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-item style-four wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="assets/images/blog/blog-four2.jpg" alt="Blog" />
            </div>
            <div className="content">
              <ul className="blog-meta">
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#">March 3, 2024</a>
                </li>
              </ul>
              <h4>
                <Link legacyBehavior href="blog-details">
                  Unveiling the Power of AI in Modern HRMS Solutions
                </Link>
              </h4>
              <div className="author-more">
                <span className="author">
                  <a href="/" style={{ color: "#456e96" }}>
                    {" "}
                    By ASK TECHNOLOGY
                  </a>
                </span>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="blog-item style-four wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="assets/images/blog/blog-four2.jpg" alt="Blog" />
            </div>
            <div className="content">
              <ul className="blog-meta">
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#">MArch 25, 2024</a>
                </li>
              </ul>
              <h4>
                <Link legacyBehavior href="blog-details">
                  Unlocking Potential: The Benefits of Hiring a Dedicated Full
                  Stack Developer
                </Link>
              </h4>
              <div className="author-more">
                <span className="author">
                  <a href="/" style={{ color: "#456e96" }}>
                    {" "}
                    By ASK TECHNOLOGY
                  </a>
                </span>
                <Link legacyBehavior href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogList;
