import { useState } from 'react';
import './subscribe.scss';

export const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <section className="subscribe">
      <div className="subscribe__title">Subscribe to our news letter</div>
      <form 
        action="" 
        method="get" 
        className="subscribe__form"
        onSubmit={handleSubmit}
      >
        <input 
          type="email" 
          name="email" 
          className="subscribe__email"
          placeholder="Your email"
          value={email}
          onChange={handleChange}
        />
        <button 
          type="submit"
          className="subscribe__button"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}