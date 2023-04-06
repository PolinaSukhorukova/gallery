import { Logo } from "../Logo"
import './footer.scss';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import facebook from './facebook-f.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <p className="footer__rights">&copy; 2017 - 2018</p>
      <div className="footer__socials">
        <img src={instagram} alt="instagram" className="footer__icon"/>
        <img src={facebook} alt="facebook" className="footer__icon"/>
        <img src={twitter} alt="twitter" className="footer__icon"/>
      </div>
    </footer>
  )
}