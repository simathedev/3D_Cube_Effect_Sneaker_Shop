import React from 'react';
import styles from './style.module.scss';
import { FaSquareFacebook,FaSquareXTwitter,FaSquareInstagram } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';

function index() {

  const navigationLinks = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Products",
        href: "shop"
    },
    {
        title: "Contact",
        href: "contact"
    },
]
const additionalLinks = [
  {
      title: "Orders",
      href: "/"
  },
  {
      title: "Returns & Exchanges",
      href: "/"
  },
  {
      title: "Terms & Conditions",
      href: "/"
  },
]

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.footerContainer}`}>
        <div className={`${styles.footerSecContainer} flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row`}>
<h1 className={styles.shopName}>
  Shoebox
</h1>
<div className={styles.link}>
        {navigationLinks.map((link, i) => (
           <ScrollLink
           key={i}
           to={link.href}
           spy={true}
           smooth={true}
           duration={500}
         >
          <a key={`${i}`} href={link.href}
          >
            {link.title}
          </a>
          </ScrollLink>
        ))}
    </div>
    <div className={styles.link}>
        {additionalLinks.map((link, i) => (
          <a key={`${i}`} href={link.href}>
            {link.title}
          </a>
        ))}
    </div>
    <div className={styles.socialMediaLinks}>
<FaSquareFacebook/>
<FaSquareInstagram/>
<FaSquareXTwitter/>
    </div>
    </div>
    </div>
    <p>
  © 2023 Shoebox, Inc. All Rights Reserved
  </p>
    </div>
  )
}

export default index