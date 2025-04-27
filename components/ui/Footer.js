"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Footer.module.css";

// SocialMediaItem Component
const SocialMediaItem = ({ url, title, icon }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={title} className={styles.icon} /> {title}
    </a>
  </li>
);

export const Footer = () => {
  const path = usePathname().split("?")[0];

  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      {/* Pages Section */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem url="https://facebook.com" title="Facebook" icon="/socialmedia/facebook.png" />
          <SocialMediaItem url="https://instagram.com" title="Instagram" icon="/socialmedia/instagram.png" />
          <SocialMediaItem url="https://tiktok.com" title="Tiktok" icon="/socialmedia/tiktok.png" />
          <SocialMediaItem url="https://linkedin.com" title="LinkedIn" icon="/socialmedia/linkedin.png" />
        </ul>
      </div>
    </footer>
  );
};