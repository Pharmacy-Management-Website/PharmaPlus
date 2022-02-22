import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { logoutUser } from "../../actions/userActions.js";
import Title from "../Utils/Meta/Title.js";

import Hero from "../../images/hero-2.svg";
import Clock from "../../images/clock.png";
import Address from "../../images/address.png";
import Call from "../../images/call.png";
import Calpol from "../../images/calpol-2.jpg";
import Dolo from "../../images/dolo-2.jpg";
import Star from "../../images/3star.png";
import Montek from "../../images/montek.jpg";
import Discount_1 from "../../images/discount-1.jpg";
import Discount_2 from "../../images/discount-2.jpg";
import Discount_3 from "../../images/discount-3.jpg";
import Girl_1 from "../../images/girl-1.jpg";
import Girl_2 from "../../images/girl-2.jpg";
import Boy_1 from "../../images/boy-1.jpg";
import Boy_2 from "../../images/boy-2.jpg";

const HomePage = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    alert.success("Logged out successfully");
    navigate("/");
  };

  return (
    <Fragment>
      <Title title="Home" />

      {/* Hero Section */}
      <section id="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__left" data-aos="fade-left">
              <div className="hero__left__wrapper">
                <h1 class="hero__heading">
                  Only Shop for your Healthy LifeStyle
                </h1>

                <p class="hero__info">
                  Making a meaningful difference in patients’ lives.
                </p>
                <div className="button__wrapper">
                  <Link to="/medicines" className="btn primary-btn">
                    Explore Medicines
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero__right" data-aos="fade-right">
              <div className="hero__imgWrapper">
                <img src={Hero} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero Section --> */}

      {/* <!-- Store Info Section --> */}
      <section id="storeInfo" data-aos="fade-up">
        <div className="container">
          <div className="storeInfo__wrapper">
            <div className="storeInfo__item">
              <div className="storeInfo__icon">
                <img src={Clock} alt="clock icon" className="icon" />
              </div>
              <h3 className="storeInfo__title">9 AM - 11 PM</h3>
              <p className="storeInfo__text">Opening Hour</p>
            </div>
            <div className="storeInfo__item">
              <div className="storeInfo__icon">
                <img src={Address} alt="clock icon" className="icon" />
              </div>
              <h3 className="storeInfo__title">Bangalore</h3>
              <p className="storeInfo__text">Address</p>
            </div>
            <div className="storeInfo__item">
              <div className="storeInfo__icon">
                <img src={Call} alt="clock icon" className="icon" />
              </div>
              <h3 className="storeInfo__title">+9876543210</h3>
              <p className="storeInfo__text">Call Now</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Store Info Section --> */}

      {/* <!-- Top Medicines --> */}
      <section id="medicineGrid" data-aos="fade-up">
        <div className="container">
          <h2 className="medicineGrid__title">Top Pills</h2>
          <div className="medicineGrid__wrapper">
            <div className="medicineGrid__item">
              <div className="medicineGrid__item__img">
                <img src={Calpol} alt="calpol" />
              </div>
              <div className="medicineGrid__item__info">
                <h3 className="medicineGrid__item__title">Calpol</h3>
                <h3 className="medicineGrid__item__price">$14</h3>
                <div className="medicineGrid__item__stars">
                  <img src={Star} alt="3 star" />
                </div>
              </div>
            </div>
            <div className="medicineGrid__item">
              <div className="medicineGrid__item__img">
                <img src={Dolo} alt="dolo-650" />
              </div>
              <div className="medicineGrid__item__info">
                <h3 className="medicineGrid__item__title">Dolo 650</h3>
                <h3 className="medicineGrid__item__price">$27</h3>
                <div className="medicineGrid__item__stars">
                  <img src={Star} alt="3 star" />
                </div>
              </div>
            </div>
            <div className="medicineGrid__item">
              <div className="medicineGrid__item__img">
                <img src={Montek} alt="montek lc" />
              </div>
              <div className="medicineGrid__item__info">
                <h3 className="medicineGrid__item__title">Montek LC</h3>
                <h3 className="medicineGrid__item__price">$156</h3>
                <div className="medicineGrid__item__stars">
                  <img src={Star} alt="3 star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Medicines --> */}

      {/* <!-- Discount Section --> */}
      <section id="discount" data-aos="fade-up">
        <div className="container">
          <div className="discount__wrapper">
            <div className="discount__images">
              <div className="discount__img1">
                <img src={Discount_1} alt="Food img" />
              </div>
              <div className="discount__img2">
                <img src={Discount_2} alt="Food img" />
              </div>
              <div className="discount__img3">
                <img src={Discount_3} alt="Food img" />
              </div>
            </div>
            <div className="discount__info">
              <h3 className="discount__text">20% OFF</h3>
              <h3 className="discount__title">Discount on Combo Medicines</h3>
              <h3 className="discount__price">
                <span className="discount__oldPrice">$45</span>
                <span className="discount__newPrice">$35</span>
              </h3>
              <div className="discount__stars">
                <img src={Star} alt="3 stars" />
              </div>
              <a className="btn primary-btn" href="/cart">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Discount Section --> */}

      {/* <!-- Why Us section --> */}
      <section id="whyUs">
        <div className="container">
          <div className="whyUs__wrapper">
            <div className="whyUs__left" data-aos="fade-right">
              <h2 className="whyUs__title">Why Choose Our Pills</h2>
              <p className="whyUs__text">
                We at Pharma+ are commited to sell the latest drug and medicine
                to our customers. The medicines are bound to have the extended
                expiration date from the date of purchase and we dedicate
                ourselves to keep the customers to have the best experience from
                our shop.
              </p>
            </div>
            <div className="whyUs__right" data-aos="fade-left">
              <div className="whyUs__items__wrapper">
                <div className="whyUs__item">
                  <div className="whyUs__item__icon">
                    <i className="far fa-grin-wink fa-5x"></i>
                  </div>
                  <p className="whyUs__item__text">
                    In-house available prescription
                  </p>
                </div>
                <div className="whyUs__item">
                  <div className="whyUs__item__icon">
                    <i className="far fa-grin-stars fa-5x"></i>
                  </div>
                  <p className="whyUs__item__text">Best Customer Experience</p>
                </div>
                <div className="whyUs__item">
                  <div className="whyUs__item__icon">
                    <i className="far fa-kiss-wink-heart fa-5x"></i>
                  </div>
                  <p className="whyUs__item__text">Latest Medicines</p>
                </div>
                <div className="whyUs__item">
                  <div className="whyUs__item__icon">
                    <i className="far fa-dizzy fa-5x"></i>
                  </div>
                  <p className="whyUs__item__text">48-hour Return Accepted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Why Us section --> */}

      {/* <!-- Testimonial Section --> */}
      <section id="testimonial">
        <div className="container">
          <div className="testimonial__wrapper" data-aos="fade-up">
            <h2 className="testimonial__title">What Our Customers Say</h2>
            <div className="testimonial__items__wrapper">
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={Girl_1} alt="Sayed Ahmed" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Deepika Padukone</h3>
                  <div className="testimonial__item__stars">
                    <img src={Star} alt="3 star" />
                  </div>
                  <p className="testimonial__item__text">
                    We at Pharma+ are commited to sell the latest drug and
                    medicine to our customers. The medicines are bound to have
                    the extended expiration date from the date of purchase.
                  </p>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={Boy_1} alt="Sayed Ahmed" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Dawood Ibrahim</h3>
                  <div className="testimonial__item__stars">
                    <img src={Star} alt="3 star" />
                  </div>
                  <p className="testimonial__item__text">
                    We at Pharma+ are commited to sell the latest drug and
                    medicine to our customers. The medicines are bound to have
                    the extended expiration date from the date of purchase.
                  </p>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={Boy_2} alt="Sayed Ahmed" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Osama Bin Laden</h3>
                  <div className="testimonial__item__stars">
                    <img src={Star} alt="3 star" />
                  </div>
                  <p className="testimonial__item__text">
                    We at Pharma+ are commited to sell the latest drug and
                    medicine to our customers. The medicines are bound to have
                    the extended expiration date from the date of purchase.
                  </p>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={Girl_2} alt="Sayed Ahmed" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Virat Kohli</h3>
                  <div className="testimonial__item__stars">
                    <img src={Star} alt="3 star" />
                  </div>
                  <p className="testimonial__item__text">
                    We at Pharma+ are commited to sell the latest drug and
                    medicine to our customers. The medicines are bound to have
                    the extended expiration date from the date of purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

      {/* <!-- Footer --> */}
      <footer>
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__col1">
              <div className="footer__logo">
                <a href="/" className="logo">
                  <i className="fas fa-capsules fa-5x"></i>
                </a>
              </div>
              <p className="footer__desc">
                Only Shop for all your Health Needs
              </p>
              <div className="footer__socials">
                <h4 className="footer__socials__title">Follow us</h4>
                <ol className="footer__socials__list">
                  <li>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-instagram"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
            <div className="footer__col2">
              <h3 className="footer__text__title">Links</h3>
              <ol className="footer__text">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Medicines</a>
                </li>
              </ol>
            </div>
            <div className="footer__col3">
              <h3 className="footer__text__title">Support</h3>
              <ol className="footer__text">
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Refund Policy</a>
                </li>
              </ol>
            </div>
            <div className="footer__col4">
              <h3 className="footer__text__title">Contact</h3>
              <ol className="footer__text">
                <li>
                  <a href="/">+9876543210</a>
                </li>
                <li>
                  <a href="/">abcdefgh@gmail.com</a>
                </li>
                <li>
                  <a href="/">Jayanagar, Bangalore.</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- End Footer --> */}

      {/* <!-- aos script --> */}
      {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script> */}
      {/* <!-- custom script --> */}
      {/* <script src="./main.js"></script> */}
    </Fragment>
  );
};

export default HomePage;
