import './mountain.scss';
import mountain1 from './mountain1.jpg';
import mountain2 from './mountain2.jpg';
import mountain3 from './mountain3.jpg';

export const Mountain = () => {
  return (
    <section className="mountains">
      <div className="mountains__container">
        <div className="mountains__inner">
        <h2 className="mountains__title">
          Mountain Collections
        </h2>
        <p className="mountains__subtitle">
          See our best mountain collection explore and Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem beatae adipisci! Optio voluptate ab laboriosam corporis.
        </p>

        <div className="mountains__items">
          <article className="mountains__mountain mountain">
              <div className="mountain__description">
                <h3 className="mountain__title">Southern Mountain</h3>
                <h4 className="mountain__subtitle">South Country</h4>
                <div className="mountain__article">
                  <p className="mountain__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse velit dicta voluptas asperiores, praesentium repellendus vitae harum illo cumque distinctio perspiciatis quo mollitia veritatis, voluptate exercitationem dolorum, voluptatem officiis? Voluptate ipsum doloremque quibusdam earum animi, soluta, ut esse perferendis exercitationem cumque at dolore officia nesciunt error!</p>
                  <p className="mountain__text">Mollitia, harum quia? Nihil a minima nam dolor praesentium, quo aspernatur laboriosam esse deserunt dignissimos dolores, itaque culpa est! Animi adipisci nobis amet veritatis nihil fuga rerum minus, beatae atque, libero nam sed!</p>
                </div>
                <div className="mountain__button">Read More</div>
              </div>

              <img src={mountain1} alt="mountain" className="mountain__image" />
            </article>

            <article className="mountains__mountain mountain">
              <div className="mountain__description">
                <h3 className="mountain__title">Northern Mountain</h3>
                <h4 className="mountain__subtitle">North Country</h4>
                <div className="mountain__article">
                  <p className="mountain__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse velit dicta voluptas asperiores, praesentium repellendus vitae harum illo cumque distinctio perspiciatis quo mollitia veritatis, voluptate exercitationem dolorum, voluptatem officiis? Voluptate ipsum doloremque quibusdam earum animi, soluta, ut esse perferendis exercitationem cumque at dolore officia nesciunt error!</p>
                  <p className="mountain__text">Mollitia, harum quia? Nihil a minima nam dolor praesentium, quo aspernatur laboriosam esse deserunt dignissimos dolores, itaque culpa est! Animi adipisci nobis amet veritatis nihil fuga rerum minus, beatae atque, libero nam sed!</p>
                </div>
                <div className="mountain__button">Read More</div>
              </div>

              <img src={mountain2} alt="mountain" className="mountain__image" />
            </article>

            
            <article className="mountains__mountain mountain">
              <div className="mountain__description">
                <h3 className="mountain__title">Eastern Mountain</h3>
                <h4 className="mountain__subtitle">East Country</h4>
                <div className="mountain__article">
                  <p className="mountain__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse velit dicta voluptas asperiores, praesentium repellendus vitae harum illo cumque distinctio perspiciatis quo mollitia veritatis, voluptate exercitationem dolorum, voluptatem officiis? Voluptate ipsum doloremque quibusdam earum animi, soluta, ut esse perferendis exercitationem cumque at dolore officia nesciunt error!</p>
                  <p className="mountain__text">Mollitia, harum quia? Nihil a minima nam dolor praesentium, quo aspernatur laboriosam esse deserunt dignissimos dolores, itaque culpa est! Animi adipisci nobis amet veritatis nihil fuga rerum minus, beatae atque, libero nam sed!</p>
                </div>
                <div className="mountain__button">Read More</div>
              </div>

              <img src={mountain3} alt="mountain" className="mountain__image" />
            </article>
        </div>
        </div>
      </div>
    </section>
  )
}