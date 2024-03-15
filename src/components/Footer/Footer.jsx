import './Footer.css'
import footer_logo from './../../assets/images/footer-logo.svg'
import linkedin from "./../../assets/images/linkedin.svg";
import messenger from "./../../assets/images/messenger.svg";
import twitter from "./../../assets/images/twitter.svg";
import twoo from "./../../assets/images/twoo.svg";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container flex-col">
          <div className="footer-cols">
            <div className="col-1">
              <img src={footer_logo} alt="" className="logo" />
              <p>Travel helps companies manage payments easily.</p>
              <div className="social-media flex-al-c">
                <img src={linkedin} alt="" />
                <img src={messenger} alt="" />
                <img src={twitter} alt="" />
                <img src={twoo} alt="" />
              </div>
            </div>
            <div className="col-2">
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="col-2">
              <h3>Destinations</h3>
              <ul>
                <li>Maldives</li>
                <li>Los Angelas</li>
                <li>Las Vegas</li>
                <li>Torronto</li>
              </ul>
            </div>
          </div>
          <p>Copyright @ Xpro 2023 All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
