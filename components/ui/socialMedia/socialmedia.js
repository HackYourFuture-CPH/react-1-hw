import styles from '../socialMedia/socialMedia.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';


const SocialMedia = () => {

return(

<div className={styles.footerList}>
        <h3>Follow us</h3>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} />Instagram</a>
          </li>
          <li>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok}/>Tiktok</a>
          </li>
          <li>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle}/>Google</a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/>Linkedin</a>
          </li>
          {/* TASK - React 1 week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* it should accept the following props */}
          {/* url, title, icon */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}
        </ul>
      </div>
)}

      export default SocialMedia;