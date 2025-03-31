"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import SocialMediaItem from './SocialMediaItem';

export const Footer = () => {
  const path = usePathname().split('?')[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      <div className={styles.footerLinks}>
        <h3>Pages</h3>
        <ul className={styles.footerList}>
        <SocialMediaItem url="https://google.com" title="Google" iconName="google" />
        <SocialMediaItem url="https://facebook.com" title="Facebook" iconName="facebook" />
        <SocialMediaItem url="https://instagram.com" title="Instagram" iconName="instagram" />
        <SocialMediaItem url="https://linkedin.com" title="LinkedIn" iconName="linkedin" />
        <SocialMediaItem url="https://tiktok.com" title="TikTok" iconName="tiktok" />
      </ul> 
      </div>
    </footer>
  );
}
