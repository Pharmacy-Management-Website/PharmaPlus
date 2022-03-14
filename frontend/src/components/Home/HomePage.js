import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { logoutUser } from "../../actions/userActions.js";
import Title from "../Utils/Meta/Title.js";
import "../../styles/main.js";

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
import Diabetes_Care from "../../images/Diabetes-Care.jpeg";
import Cold_Care from "../../images/Cold_Immunity.jpeg";
import Oral_Care from "../../images/Oral-Care.jpeg";
import Mental_Care from "../../images/Mental-Health.jpeg";
import Pampers from "../../images/Pampers.svg";
import Dabur from "../../images/Dabur.svg";
import Dove from "../../images/Dove.svg";
import Colgate from "../../images/Colgate.svg";
import Gilette from "../../images/Gilette.svg";

const HomePage = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    alert.success("Logged out successfully");
    navigate("/");
  };

  const [health, setHealth] = useState("");

  const filterHealth = (e) => {
    e.preventDefault();
    if (health.trim()) {
      navigate(`/medicines/${health}`);
    } else {
      navigate("/medicines");
    }
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
                <h1 class="hero__heading">Only Shop for Healthy LifeStyle</h1>

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
                <h3 className="medicineGrid__item__price">₹14</h3>
                <div className="grid__wrapper">
                  <Link to="/medicines" className="grid-button">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
            <div className="medicineGrid__item">
              <div className="medicineGrid__item__img">
                <img src={Dolo} alt="dolo-650" />
              </div>
              <div className="medicineGrid__item__info">
                <h3 className="medicineGrid__item__title">Dolo 650</h3>
                <h3 className="medicineGrid__item__price">₹27</h3>
                <div className="grid__wrapper">
                  <Link to="/medicines" className="grid-button">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
            <div className="medicineGrid__item">
              <div className="medicineGrid__item__img">
                <img src={Montek} alt="montek lc" />
              </div>
              <div className="medicineGrid__item__info">
                <h3 className="medicineGrid__item__title">Montek LC</h3>
                <h3 className="medicineGrid__item__price">₹156</h3>
                <div className="grid__wrapper">
                  <Link to="/medicines" className="grid-button">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Medicines --> */}

      {/* <!-- Shop By Health Section --> */}
      <section id="testimonial">
        <div className="container">
          <div className="testimonial__wrapper" data-aos="fade-up">
            <h2 className="testimonial__title">Shop By Health Conditions</h2>
            <div className="testimonial__items__wrapper">
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={Diabetes_Care} alt="Sayed Ahmed" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Disinfectants</h3>
                  <p className="testimonial__item__text">
                    <li>Dettol Hand Sanitizer</li>
                    <li>Himalaya Antiseptic Soap</li>
                    <li>Boroline Ayurvedic Cream</li>
                    <li>Savlon Antiseptic Liquid</li>
                    <li>Lifebuoy Germ Protection</li>
                  </p>

                  <div className="testimonial__wrapper">
                    <Link to="/medicines" className="testimonial-button">
                      <button
                        onClick={(e) => {
                          navigate("/medicines/Disinfectants");
                        }}
                      >
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={Oral_Care} alt="Sayed Ahmed" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Oral Care</h3>

                  <p className="testimonial__item__text">
                    <li>Oral B Electric Brush</li>
                    <li>Colgate Sensitive Plus</li>
                    <li>Listerine Cool Mint Mouthwash</li>
                    <li>Vicco Vajradanti Tooth Powder</li>
                    <li>Sensodyne Sensitive Toothbrush</li>
                  </p>

                  <div className="testimonial__wrapper">
                    <Link to="/medicines" className="testimonial-button">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={Mental_Care} alt="Sayed Ahmed" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Mental Wellness</h3>

                  <p className="testimonial__item__text">
                    <li>Apollo Vitamin B-12</li>
                    <li>Himalaya Stress Relief</li>
                    <li>Brainmax Omega 3 Liquid</li>
                    <li>HealthVit Melatonin Tablets</li>
                    <li>Mankind Multi Vitamin Tablets</li>
                  </p>

                  <div className="testimonial__wrapper">
                    <Link to="/medicines" className="testimonial-button">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
              <div className="testimonial__item">
                <div className="testimonial__item__img">
                  <img src={Cold_Care} alt="Sayed Ahmed" />
                </div>
                <div className="testimonial__item__info">
                  <h3 className="testimonial__item__name">Cold & Immunity</h3>

                  <p className="testimonial__item__text">
                    <li>Crocin</li>
                    <li>Azitral </li>
                    <li>Montek LC</li>
                    <li>Grenil</li>
                    <li>Dolo 650</li>
                  </p>

                  <div className="testimonial__wrapper">
                    <Link to="/medicines" className="testimonial-button">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Shop By Health Section --> */}

      {/* <!-- Shop By Brand Section --> */}
      <section id="shopByBrand" data-aos="fade-up">
        <div className="container">
          <h2 className="shopByBrand__title">Shop By Brands</h2>
          <div className="shopByBrand__wrapper">
            <div className="shopByBrand__item">
              <div className="shopByBrand__item__img">
                <a href="/home" className="logo">
                  <img src={Dove} alt="dove" />
                </a>
              </div>
            </div>
            <div className="shopByBrand__item">
              <div className="shopByBrand__item__img">
                <a href="/home" className="logo">
                  <img src={Pampers} alt="himalaya" />
                </a>
              </div>
            </div>
            <div className="shopByBrand__item">
              <div className="shopByBrand__item__img">
                <a href="/home" className="logo">
                  <img src={Dabur} alt="manforce" />
                </a>
              </div>
            </div>

            <div className="shopByBrand__item">
              <div className="shopByBrand__item__img">
                <a href="/home" className="logo">
                  <img src={Gilette} alt="gilette" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Shop By Brand Section --> */}

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
                <span className="discount__oldPrice">₹300</span>
                <span className="discount__newPrice">₹260</span>
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

      {/* <!-- Footer --> */}
      <footer>
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__col1">
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
                  <a href="/">DashBoard</a>
                </li>
                <li>
                  <a href="/">Medicines</a>
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

      <form className="search" onSubmit={filterHealth}>
        <input
          type="text"
          className="search__input"
          placeholder="Search Medicines"
          onChange={(e) => setHealth(e.target.value)}
        />
      </form>

      {/* <!-- End Footer --> */}

      {/* <!-- aos script --> */}
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    </Fragment>
  );
};

export default HomePage;
