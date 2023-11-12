'use client';
import React , { useEffect } from 'react';
import styles from './style.module.scss';
import { FaCartShopping } from "react-icons/fa6";

export default function index() {
 const links = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Shop",
            href: "/"
        },
        {
            title: "Contact",
            href: "/"
        },
    ]
  return (
    <div>
  <div className={styles.link}>
        {links.map((link, i) => (
          <a key={`${i}`} href={link.href}>
            {link.title}
          </a>
        ))}
          <FaCartShopping />
      </div> 
    </div>
  )
}
