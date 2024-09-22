"use client"

import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import Link from 'next/link'
import SocialMedia from './socialMedia/socialmedia.js'


export const Footer = () => {
  const path = usePathname().split('?')[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
  
      <div className={styles.footerList}>
        <h3>Pages</h3>
        <ul>
          <li><Link href="/about_us">About Us</Link></li>
          <li><Link href="/destination">Destination</Link></li>
          <li><Link href="/nasa_collaboration">Nasa Collaboration</Link></li>          
        </ul>
      </div>
    
      <SocialMedia/>

    </footer>
  );
}
