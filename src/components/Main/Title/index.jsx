import React from 'react';
import styles from './style.module.scss';

export default function index() {
  return (
    <div>
    <h1 className={`${styles.title} xs:text-[5rem] md:text-[9rem]`}>
        Shoebox
    </h1>
    </div>
  )
}
