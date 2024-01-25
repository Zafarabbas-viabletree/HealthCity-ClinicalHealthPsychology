// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./TestimonialSecStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "../../../theme";
import { TESTIMONIALS } from "../../../constants";

export default class TestimonialSecController extends React.Component {
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
    var settings = {
      dots: false,
      arrows: false,
      autoPlay: true,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div style={{ margin: "100px 0" }}>
        <div className="container my-5">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {TESTIMONIALS.map((item) => {
              return (
                <div key={item.id} className={css(styles.testimonialBox)}>
                  <span className={css(styles.boxContent)}>
                    {item.text}
                    <span
                      style={{
                        fontWeight: 600,
                        display: "block",
                        textAlign: "center",
                      }}
                    >
                      {item.reivewedBy}
                    </span>
                  </span>
                </div>
              );
            })}
          </Slider>
          <div className={css(styles.prevNextContainer)}>
            <button className={css(styles.prevBtn)} onClick={this.previous}>
              <img src={Images.prev_arrow} className={css(styles.arrowIcon)} />
            </button>
            <button onClick={this.next} className={css(styles.nextBtn)}>
              <img src={Images.next_arrow} className={css(styles.arrowIcon)} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
