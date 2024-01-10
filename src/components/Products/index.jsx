import React, { useState } from 'react';
import styles from './style.module.scss';
import { shoeDetails } from './data.js';
import Image from 'next/image';
import ProductDetails from '../ProductDetail';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../Cart/CartContext'; // Import useCart hook

function Index() {
  const { dispatch } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const addToCart = (item, e) => {
    const event = e.touches ? e.touches[0] : e;
    setSelectedProduct(item);
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  const handleViewMore = () => {
    const noMoreProducts = true; // Replace this with your condition to check for more products

    if (noMoreProducts) {
      toast.error('No more products to display', {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <div className={`${styles.main} min-h-screen`}>
      <h1 className={styles.heading}>Shop</h1>
      <p className={`${styles.description} xs:text-[1rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[1.4rem]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, laudantium dignissimos magni tempora quibusdam laboriosam exercitationem placeat laborum, ea dolorum est! Nulla atque porro perspiciatis. Voluptas reprehenderit error quo quidem?
      </p>
      <div className={'xs:w-[90%] w-full'}>
        <div className={`${styles.products} xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row`}>
          {shoeDetails.map((detail) => (
            <div key={detail.id} className={`${styles.product} xs:m-[1rem] m-[2rem] shadow-lg transform hover:scale-105`}>
              <Image
                src={detail.image}
                alt={detail.name}
                width={300}
                height={300}
                priority={true}
                className={styles.productImage}
                style={{ borderRadius: '9%' }}
              />
              <p className={styles.name}>{detail.name}</p>
              <p>R {detail.price}</p>
              <button
                className='mt-[1rem] hover:scale-105'
                onClick={(e) => addToCart(detail, e)}
                onTouchStart={(e) => addToCart(detail, e)}
              >
                Add to Cart
              </button>
            </div>
          ))}
          {selectedProduct && (
            <div className={styles.productDetailsContainer} style={{ top: `${position.y}px`, left: `${position.x}px` }}>
              <ProductDetails product={selectedProduct} onClose={closeDetails} />
            </div>
          )}
        </div>
      </div>
      <div className='mt-[4rem] mb-[5rem] hover:scale-105'>
        <button onClick={handleViewMore}>View more</button>
      </div>
    </div>
  );
}

export default Index;
