import React from 'react'
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  )
}