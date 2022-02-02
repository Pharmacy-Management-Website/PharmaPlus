import React from "react";

const Header = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <a href="./index.html" className="logo">
            <i className="fas fa-capsules fa-5x"></i>
          </a>

          <form action="#" className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search Medicines"
            />
            <button className="search__button">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>

          <nav>
            <div className="nav__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </div>
            <div className="nav__bgOverlay"></div>
            <ol className="nav__list">
              <div className="nav__close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>

              <div className="nav__list__wrapper">
                <li>
                  <a className="nav__link" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav__link" href="#">
                    Menu
                  </a>
                </li>
                <li>
                  <a className="nav__link" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav__link" href="#">
                    Contact
                  </a>
                </li>
              </div>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
