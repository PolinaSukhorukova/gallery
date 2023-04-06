import './above.scss';
import above from './above.jpg'

export const Above = () => {
  return (
    <section className="above">
      <div className="above__image-container">
        <img src={above} alt="Above The Sea" className="above__image" />
      </div>

      <div className="above__description">
        <h2 className="above__title">Above The Sea</h2>
        <p className="above__quote">&ldquo; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis eligendi amet inventore excepturi illo quibusdam rerum aliquid! &rdquo;</p>
        <p className="above__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit esse repudiandae fuga obcaecati eligendi enim suscipit reprehenderit provident, dolor excepturi aut placeat eaque officiis aperiam consequatur quibusdam? Libero, quibusdam veritatis velit aliquid dicta quia repellat dignissimos necessitatibus quod at corporis, sequi natus tenetur odit ad exercitationem quo pariatur eum! Natus! </p>
        <p className="above__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit esse repudiandae fuga obcaecati eligendi enim suscipit reprehenderit provident, dolor excepturi aut placeat eaque officiis aperiam consequatur quibusdam? Libero, quibusdam veritatis velit aliquid dicta quia repellat dignissimos necessitatibus quod at corporis, sequi natus tenetur odit ad exercitationem quo pariatur eum! Natus! </p>
        <div className="above__button">Read more</div>
      </div>
    </section>
  )
}