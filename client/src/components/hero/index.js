import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero2 from "../../images/slider/slide-3.jpg";
import hero3 from "../../images/slider/slide-4.jpg";

import "./style.css";

class Hero extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };

    return (
      <section className="hero hero-slider hero-style-1">
        <Slider {...settings}>
          <div className="slide">
            <div
              className="slide-inner"
              style={{ backgroundImage: `url(${this.props.Hero})` }}
            >
              <div className="container">
                <div className="col col-lg-6 slide-caption">
                  <div className="slide-title">
                    <h2>
                      SAVE PRECIOUS <span>LIVES</span>
                    </h2>
                  </div>
                  <div className="slide-subtitle">
                    <p>
                      “HE WHO SAVES ONE LIFE, IT IS AS THOUGH HE HAS SAVED ALL
                      OF HUMANITY.”
                    </p>
                    <p>(QUR'AN, 5:32).</p>
                  </div>
                  <div className="btns">
                    <Link to="/donate" className="theme-btn">
                      Donate Now
                    </Link>
                    <Link to="/about" className="theme-btn-s2">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="slide-inner"
              style={{ backgroundImage: `url(${hero2})` }}
            >
              <div className="container">
                <div className="col col-lg-6 slide-caption">
                  <div className="slide-title">
                    <h2>
                      SAVE PRECIOUS <span>LIVES</span>
                    </h2>
                  </div>
                  <div className="slide-subtitle">
                    <p>
                      “HE WHO SAVES ONE LIFE, IT IS AS THOUGH HE HAS SAVED ALL
                      OF HUMANITY.”
                    </p>
                    <p>(QUR'AN, 5:32).</p>
                  </div>
                  <div className="btns">
                    <Link to="/donate" className="theme-btn">
                      Donate Now
                    </Link>
                    <Link to="/about" className="theme-btn-s2">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="slide-inner"
              style={{ backgroundImage: `url(${hero3})` }}
            >
              <div className="container">
                <div className="col col-lg-6 slide-caption">
                  <div className="slide-title">
                    <h2>
                      SAVE PRECIOUS <span>LIVES</span>
                    </h2>
                  </div>
                  <div className="slide-subtitle">
                    <p>
                      “HE WHO SAVES ONE LIFE, IT IS AS THOUGH HE HAS SAVED ALL
                      OF HUMANITY.”
                    </p>
                    <p>(QUR'AN, 5:32).</p>
                  </div>
                  <div className="btns">
                    <Link to="/donate" className="theme-btn">
                      Donate Now
                    </Link>
                    <Link to="/about" className="theme-btn-s2">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}

export default Hero;
