import { Logo } from "../Logo"
import logo from './person.png';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './header.scss';
import { useCallback, useState } from "react";

export const Header = () => {
  const [position, setPosition] = useState(0);

  const isBackDisabled = position === 0;
  const isNextDisabled = position === 7;

  const shift = -350 * position;

  const moveForward = useCallback(() => {
    setPosition((current) => current + 1);
  }, []);

  const moveBack = useCallback(() => {
    setPosition((current) => current - 1);
  }, []);
  return (
    <header className="header">
      <div className="header__login">
        <Logo />
        <div className="header__user user">
          <p className="user__collection">My collection</p>
          <div className="user__info">
            <p className="user__name">Galih Pambudi</p>
            <img src={logo} alt="Galih Pambudi" className="user__photo" />
          </div>
        </div>
      </div>
      <div className="header__details">
        <div className="header__nav nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn('nav__button', { 'is-active': isActive })
          }
        >
          Home
        </NavLink>
        <NavLink
          to="recommendation"
          className={({ isActive }) =>
            cn('nav__button', { 'is-active': isActive })
          }
        >
          Recommendation
        </NavLink>
        <NavLink
          to="explore"
          className={({ isActive }) =>
            cn('nav__button', { 'is-active': isActive })
          }
        >
          Explore
        </NavLink>
        <NavLink
          to="help"
          className={({ isActive }) =>
            cn('nav__button', { 'is-active': isActive })
          }
        >
          Help
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            cn('nav__button', { 'is-active': isActive })
          }
        >
          About Us
        </NavLink>
        </div>
        
        <div className="header__slider">
          <div className="header__description slider">
          <div 
              className="slider__container"
              style={{
              transform: `translateX(${shift}px)`,
            }}>
              <div className="slider__slide-1 slide">
                <h2 className="slide__title">The Walchen 
                <br />
                Lake
                </h2>
                <p className="slide__text">One of the deepest and largest alpine lakes in Germany 
                <br />and one the best outdoors place 
                <br />that you never imagine before.</p>
                <div className="slide__button">Read More</div>
              </div>

              <div className="slider__slide-2 slide">
                <h2 className="slide__title">2The Walchen 
                <br />
                Lake
                </h2>
                <p className="slide__text">One of the deepest and largest alpine lakes in Germany 
                <br />and one the best outdoors place 
                <br />that you never imagine before.</p>
                <div className="slide__button">Read More</div>
              </div>

              <div className="slider__slide-3 slide">
                <h2 className="slide__title">3The Walchen 
                <br />
                Lake
                </h2>
                <p className="slide__text">One of the deepest and largest alpine lakes in Germany 
                <br />and one the best outdoors place 
                <br />that you never imagine before.</p>
                <div className="slide__button">Read More</div>
              </div>

              <div className="slider__slide-4 slide">
                <h2 className="slide__title">4The Walchen 
                <br />
                Lake
                </h2>
                <p className="slide__text">One of the deepest and largest alpine lakes in Germany 
                <br />and one the best outdoors place 
                <br />that you never imagine before.</p>
                <div className="slide__button">Read More</div>
              </div>

              <div className="slider__slide-5 slide">
                <h2 className="slide__title">5The Walchen 
                <br />
                Lake
                </h2>
                <p className="slide__text">One of the deepest and largest alpine lakes in Germany 
                <br />and one the best outdoors place 
                <br />that you never imagine before.</p>
                <div className="slide__button">Read More</div>
              </div>

              <div className="slider__slide-6 slide">
                <h2 className="slide__title">6The Walchen 
                <br />
                Lake
                </h2>
                <p className="slide__text">One of the deepest and largest alpine lakes in Germany 
                <br /> and one the best outdoors place 
                <br /> that you never imagine before.</p>
                <div className="slide__button">Read More</div>
              </div>

              <div className="slider__slide-7 slide">
                <h2 className="slide__title">7The Walchen 
                <br />
                Lake
                </h2>
                <p className="slide__text">One of the deepest and largest alpine lakes in Germany 
                <br />and one the best outdoors place 
                <br />that you never imagine before.</p>
                <div className="slide__button">Read More</div>
              </div>
              <div className="slider__slide-8 slide">
                <h2 className="slide__title">8The Walchen 
                <br />
                Lake
                </h2>
                <p className="slide__text">One of the deepest and largest alpine lakes in Germany 
                <br /> and one the best outdoors place 
                <br />that you never imagine before.</p>
                <div className="slide__button">Read More</div>
              </div>
            </div>
          </div>

          <div className="slider__nav">
            <div className="actions">
              <button
                className="button"
                disabled={isBackDisabled}
                onClick={moveBack}
              >
                <svg
                  className="icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4715 3.52861C10.2111 3.26826 9.78903 3.26826 9.52868 3.52861L5.52868 7.52861C5.26833 7.78896 5.26833 8.21107 5.52868 8.47141L9.52868 12.4714C9.78903 12.7318 10.2111 12.7318 10.4715 12.4714C10.7318 12.2111 10.7318 11.789 10.4715 11.5286L6.94289 8.00001L10.4715 4.47141C10.7318 4.21107 10.7318 3.78896 10.4715 3.52861Z"
                  />
                </svg>
              </button>

              <button
                className="button"
                disabled={isNextDisabled}
                onClick={moveForward}
              >
                <svg
                  className="icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z"
                  />
                </svg>
              </button>
            </div>

            <div className="actions__comment">
            <p className="slider__note">Outdoors Edition</p>
            <div className="slider__line slider__line--long"></div>
            <div className="slider__count">{`${position + 1}/8`}</div>
            <div className="slider__line slider__line--short"></div>
            </div>
          </div>
        </div>
      </div>
    </header>


  )
}