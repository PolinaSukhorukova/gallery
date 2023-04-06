import { useCallback, useEffect, useState } from 'react';
import './pick.scss';
import flatiron from './flatiron.jpg';
import hakone from './hakone.jpg';
import gate from './gate.jpg';
import road from './road.jpg';
import canyon from './canyon.jpg'

const availableImage = [
  {
    'img': flatiron,
    title: 'Flatiron',
    subtitle: 'USA',
    text: 'The Flatiron Building was developed as the headquarters of construction firm Fuller Company, which acquired the site from the Newhouse family in May 1901',
  },

  {
    img: hakone,
    title: 'Hakone Shrine',
    subtitle: 'Japan',
    text: 'The Hakone Shrine is a Japanese Shinto shrine on the shores of Lake Ashi in the town of Hakone in the Ashigarashimo District of Kanagawa Prefecture. It is also known as the Hakone Gongen.',
  },

  {
    img: gate,
    title: 'Golden gate',
    subtitle: 'USA',
    text: 'Constructed in 1937, it set the world record for the longest bridge span, the distance between supports (4,200 ft, 1,280 m) and also the tallest towers.',
  },
]

export const Pick = () => {
  const [images, setImages] = useState([availableImage]);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setImages(availableImage);
  }, [])

  const {img, title, subtitle, text} = images[0];

  const isBackDisabled = position === 0;
  const isNextDisabled = position === 2;

  const moveForward = useCallback(() => {
    setPosition((current) => current + 1);
    setImages(prevState => [...prevState.slice(1), prevState[0]]);
  }, []);

  const moveBack = useCallback(() => {
    setPosition((current) => current - 1);
    setImages(prevState => [ prevState[2], ...prevState.slice(0, 2)]);
  }, []);

  return (
    <section className="pick">
      <div className="pick__describe describe">
        <h2 className="describe__title">Editor's Pick</h2>
        <p className="describe__text">Our picks, just for you nam an vibisse admodum omittantur, nihil corrumpit</p>
      </div>

      <div className="pick__view"> 
        <div className="pick__nav">
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

          <p className="pick__note">Outdoors Edition</p>
          <div className="slider__line slider__line--long"></div>
          <div className="slider__count">{`${position + 1}/3`}</div>
          <div className="slider__line slider__line--short"></div>
          <div className="slider__count">sort by &#9660;</div>
          <div className="slider__line slider__line--short"></div>
        </div>

        <div className="pick__gallery gallery">
          <div className="gallery__main-container">
            <img src={img} alt="" className="gallery__main-image" />
            <div className="gallery__description">
              <h4 className="gallery__description--title">{title}</h4>
              <h5 className="gallery__description--subtitle">{subtitle}</h5>
              <p className="gallery__description--text">{text}</p>
            </div>
          </div>

          <div className="gallery__secondary-container">

            {images.slice(1).map((item, i) => {
              const {img} = item;
                return (
                  <img src={img} alt="" key={i} className="gallery__secondary-image" />
                )
            })}
          </div>

        </div>

        <div className="pick__display display">
          <div className="display__container--small">
            <img src={canyon} alt="" className="display__image--small" />
          </div>
          <div className="display__container--big">
          <img src={road} alt="" className="display__image--big" />
          </div>
        </div>

      </div>
    </section>
  )
}
