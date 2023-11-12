import React from 'react';
import styles from './style.module.scss';
import { FaSquareFacebook,FaSquareXTwitter,FaSquareInstagram } from "react-icons/fa6";

function index() {

  const navigationLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Products",
        href: "/"
    },
    {
        title: "Contact",
        href: "/"
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
          <a key={`${i}`} href={link.href}>
            {link.title}
          </a>
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