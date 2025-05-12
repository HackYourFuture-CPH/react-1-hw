"use client"

import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import Link from 'next/link';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTiktok} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import { SocialMediaItem } from './SocialMediaItem';



export const Footer = () => {
  const path = usePathname().split('?')[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
  
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul className = {styles.pageLinks}>
          <li>
            <Link href="/about_us">About</Link>
          </li>
          <li>
            <Link href="/destination">Destination</Link>
          </li>
          <li>
            <Link href="/crew">Crew</Link>
          </li>
          <li>
            <Link href="/nasa_collaboration">NASA COLLABORATION</Link>
          </li>
      </ul>
      </div>
    
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          
          <SocialMediaItem
            icon={<FaLinkedin />}
            url="https://www.linkedin.com"
            title="LinkedIn"
          />
          <SocialMediaItem
            icon={<FaFacebook />}
            url="https://www.facebook.com"
            title="Facebook"
          />
          <SocialMediaItem
            icon={<FaInstagram />}
            url="https://www.instagram.com"
            title="Instagram"
          />
          <SocialMediaItem
            icon={<FaTiktok />}
            url="https://www.tiktok.com"
            title="TikTok"
          />
          <SocialMediaItem
            icon={<FaGoogle />}
            url="https://www.google.com"
            title="Google"

          />
          
        </ul>
      </div>
    </footer>
  );
}
