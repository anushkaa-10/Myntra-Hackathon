import React from 'react';
import './soldItems.css'; 
import { useEffect, useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Product 1', price: 'SOLD - $50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gg5fdLA-gq3h62xI_eaNSRTFILnKRMjB6w&s', status: 'sold' },
  { id: 2, name: 'Product 2', price: 'NOT SOLD YET', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKKOpWooqxrap4RbvQb7zenywQYo76uUkCQ&s', status: 'not-sold' },
  { id: 3, name: 'Product 3', price: 'SOLD - 25$', image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18659986/2024/2/1/d9df4ff9-84ac-4e4a-b5ce-b02dfb8d5d6c1706764921464-Janasya-Pink-Midi-Dress-3631706764921061-1.jpg', status: 'sold' },
];

const SoldItems = () => {

    const [products, setProducts] = useState(initialProducts);
    useEffect(() => {
        if (localStorage.getItem('firstLoadDone') === null) {
          localStorage.setItem('firstLoadDone', 1);
        //   alert("first time")
        } else {
            const newItem = {
                id: 4,
                name: 'New Product',
                price: '$75',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gg5fdLA-gq3h62xI_eaNSRTFILnKRMjB6w&s',
                status: 'not-sold'
              };
              setProducts(prevProducts => [...prevProducts, newItem]);
        //   alert("refresh")
        }
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
