import React from 'react';
import styles from './style.module.scss';
import {shoeDetails} from './data.js';
import Image from 'next/image';


function index() {

  return (
    <div className={`${styles.main} min-h-screen`}>
      <h1 className={styles.heading}>
        Shop
      </h1>
      <p className={`${styles.description} xs:text-[1rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[1.4rem]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, laudantium dignissimos magni tempora quibusdam laboriosam exercitationem placeat laborum, ea dolorum est! Nulla atque porro perspiciatis. Voluptas reprehenderit error quo quidem?</p>
     <div className={'xs:w-[90%] w-full'}>
      <div className={`${styles.products} xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row`}>
      {shoeDetails.map((detail) => (
            <div key={detail.id} className={`${styles.product} xs:m-[1rem] m-[2rem] shadow-lg transform hover:scale-105 `}>
              {/* Your record details */}
              <Image
              src={detail.image}
              alt={detail.name}
              width={300} // Adjust width as needed
              height={300} // Adjust height as needed
              className={styles.productImage}
              style={{ borderRadius: '9%' }}
            />
              <p className={styles.name}>{detail.name}</p>
              <p>{detail.price}</p>
              <button className='mt-[1rem] hover:scale-105'>Add to Cart</button>
            </div>
          ))}
       </div>
       </div>
       <div className='mt-[4rem] mb-[5rem] hover:scale-105'>
      <button>View more</button>
      </div>
  </div>
  )
}

export default index