import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import { CartProvider } from '../components/Cart/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shoebox',
  description: 'shoebox is an e-commerce store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CartProvider>
        {children}
        <ToastContainer />
        </CartProvider>
        </body>
       
    </html>
  )
}
