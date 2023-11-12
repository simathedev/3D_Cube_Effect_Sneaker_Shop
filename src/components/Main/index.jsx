import React from 'react';
import Cube from '../Cube';
import Title from './Title';
import styles from './style.module.scss';

function index() {
  return (
    <div className={styles.main} >
       <Title/>
      <Cube/>
    </div>
  )
}

export default index