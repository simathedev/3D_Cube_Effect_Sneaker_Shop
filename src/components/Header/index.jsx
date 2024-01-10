import React from 'react'
import Links from './Links'
import styles from './style.module.scss'


function index() {
  return (
  <div className={`${styles.main} min-w-full`}>
       <h1>
Shoebox
</h1>
<div className='min-w-full'>
<Links/>
</div>

    </div>
  )
}

export default index