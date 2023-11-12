import React from 'react';
import { FaPhone,FaLocationDot,FaEnvelope, FaSquareFacebook,FaSquareXTwitter,FaSquareInstagram} from "react-icons/fa6";
import styles from './style.module.scss';


export default function index() {
  return (
    <div className={styles.main}>
        <div className={styles.contactDetails}>
          <div className={styles.contactLinks}>
    <FaLocationDot/>
    <p>234 Oak Lane, Sandton, Gauteng, 2196</p>
    <FaPhone/>
    <p>0836789900</p>
    <FaEnvelope/>
    <p>support@shoebox.co.za</p>
    <p>sales@showbox.co.za</p>
    </div>
    <h3 className={styles.socialMediaHeading}>Our Social Media</h3>
    </div>
    <div className={styles.socialMediaLinks}>
    <FaSquareFacebook/>
    <FaSquareXTwitter/>
    <FaSquareInstagram/>
    </div>
    </div>
  )
}
