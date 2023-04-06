import './spots.scss';
import pick from './pick.jpg';
import canyon from './canyon.jpg';
import lake from './lake.jpg';

export const Spots = () => {
  return (
    <section className="spots">
      <div className="spots__describe describe">
        <h2 className="describe__title">Featured Spots</h2>
        <p className="describe__text">Some of featured spot
          <br /> that you might want 
          <br /> visit before you die</p>
        <div className="describe__button">View all</div>
      </div>

      <div className="spots__main">
      <div className="spots__view veiw">
        <div className="view__items">
          <div className="view__item">
            <div className="view__image-container">
              <img src={pick} alt="" className="view__image" />
            </div>
            <h3 className="view__title">Ollantaytambo</h3>
            <div className="view__subtitle">Pure</div>
            <p className="view__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo, excepturi similique possimus non sunt ratione tempore alias consectetur eveniet quos voluptatibus consequuntur beatae, rem impedit corrupti accusamus adipisci velit!</p>
            <div className="view__button">read more</div>
          </div>
        </div>

        <div className="view__items">
          <div className="view__item">
            <div className="view__image-container">
              <img src={canyon} alt="" className="view__image" />
            </div>
            <h3 className="view__title">Ollantaytambo</h3>
            <div className="view__subtitle">Pure</div>
            <p className="view__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo, excepturi similique possimus non sunt ratione tempore alias consectetur eveniet quos voluptatibus consequuntur beatae, rem impedit corrupti accusamus adipisci velit!</p>
            <div className="view__button">read more</div>
          </div>
        </div>

        <div className="view__items">
          <div className="view__item">
            <div className="view__image-container">
              <img src={lake} alt="" className="view__image" />
            </div>
            <h3 className="view__title">Ollantaytambo</h3>
            <div className="view__subtitle">Pure</div>
            <p className="view__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo, excepturi similique possimus non sunt ratione tempore alias consectetur eveniet quos voluptatibus consequuntur beatae, rem impedit corrupti accusamus adipisci velit!</p>
            <div className="view__button">read more</div>
          </div>
        </div>
      </div>
      <div className="spots__nav">
            <p className="spots__note">Outdoors Edition</p>
            <div className="spots__line slider__line--long"></div>
            <div className="spots__count">2/8</div>
            <div className="spots__line slider__line--short"></div>
      </div>
      </div>
    </section>
  )
}