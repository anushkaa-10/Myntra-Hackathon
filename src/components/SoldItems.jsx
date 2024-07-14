import React from 'react';
import './soldItems.css'; 
import { useEffect, useState } from 'react';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
const initialProducts = [
  { id: 1, name: 'White Top', price: 'SOLD - $50', image: pic2, status: 'sold' },
  { id: 2, name: 'Maroon Colour Dress', price: 'NOT SOLD YET', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKKOpWooqxrap4RbvQb7zenywQYo76uUkCQ&s', status: 'not-sold' },

];

const newProduct = {
    id: 3,
    name: 'Blue Dress',
    price: 'NOT SOLD YET',
    image: pic1,
    status: 'not-sold'
  };

const SoldItems = () => {

    const [products, setProducts] = useState(initialProducts);
    useEffect(() => {
        const timer = setTimeout(() => {
            setProducts(prevProducts => [...prevProducts, newProduct]);
            // alert('New product added!');
          }, 20000); 
      
          return () => clearTimeout(timer);
      }, []);

  return (
    <section className="sold-items">
      <h1>Your Current Items Status</h1>
      {/* <h3>{name}</h3> */}
      <div className="item-list">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <div key={product.id} className="item">
              <img src={product.image} alt={product.name} className="item-image" />
              <div className="item-details">
                <h3 className="item-name">{product.name}</h3>
                <p className={`item-price ${product.status}`}><b>{product.price}</b></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoldItems;
