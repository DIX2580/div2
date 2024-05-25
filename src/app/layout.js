"use client"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Adjust the duration as needed
      },
    },
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={navVariants}
        >
          <Navbar />
        </motion.div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
