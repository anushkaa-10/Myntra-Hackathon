import React from 'react';
import Navbar from "../../components/Navbar";
import './buy.css'; // Import custom CSS file for Buy component

const products = [
  { 
    id: 1, 
    name: 'White Top', 
    price: '$50', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gg5fdLA-gq3h62xI_eaNSRTFILnKRMjB6w&s',
    clothesName: 'White Top',
    ageOfClothes: '1 year',
    brandName: 'Brand A',
    usageIntensity: 'Lightly Used',
    category: 'Female',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet mauris eu libero rhoncus vestibulum.'
  },
  { 
    id: 2, 
    name: 'Maroon Dress', 
    price: '$70', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKKOpWooqxrap4RbvQb7zenywQYo76uUkCQ&s',
    clothesName: 'Maroon Colour Dress',
    ageOfClothes: '6 months',
    brandName: 'Brand B',
    usageIntensity: 'Lightly Used',
    category: 'Female',
    description: 'Pellentesque habitant morbi tristique senectus e'
  },
  { 
    id: 3, 
    name: 'Pink Midi Dress', 
    price: '$50', 
    image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18659986/2024/2/1/d9df4ff9-84ac-4e4a-b5ce-b02dfb8d5d6c1706764921464-Janasya-Pink-Midi-Dress-3631706764921061-1.jpg',
    clothesName: 'Pink Midi Dress',
    ageOfClothes: '2 years',
    brandName: 'Brand C',
    usageIntensity: 'Heavily Used',
    category: 'Female',
    description: 'Nulla facilisi. Ut semper orci eget magna volutpat, vitae convallis mauris ultricies.'
  },
  { 
    id: 4, 
    name: 'Purple Floral Maxi Dress', 
    price: '$50', 
    image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22222480/2023/3/3/50462fd7-df40-40ef-ad84-62e7a38730181677864626684KALINIPurpleFloralLayeredGeorgetteMaxiDress1.jpg',
    clothesName: 'Purple Floral Maxi Dress',
    ageOfClothes: '3 years',
    brandName: 'Brand D',
    usageIntensity: 'Lightly Used',
    category: 'Female',
    description: 'Duis sodales eros vitae ante varius, vel laoreet arcu suscipit.'
  },
  { 
    id: 5, 
    name: 'Black Jacket', 
    price: '$50', 
    image: 'https://www.thewalkdeal.com/cdn/shop/products/Belive-Black.jpg?v=1640675713',
    clothesName: 'Black Jacket',
    ageOfClothes: '1 year',
    brandName: 'Brand E',
    usageIntensity: 'Moderately Used',
    category: 'Male',
    description: 'Integer mattis odio a sapien rutrum, quis finibus urna aliquam.'
  },
  { 
    id: 6, 
    name: 'Blue Jeans', 
    price: '$50', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8sHKhfbTyvwFnd5wqL6I1cm5XC7PkJgdCw&s',
    clothesName: 'Blue Jeans',
    ageOfClothes: '2 years',
    brandName: 'Brand F',
    usageIntensity: 'Heavily Used',
    category: 'Male',
    description: 'Vivamus sit amet nunc ultrices, tristique nulla nec, finibus justo.'
  }
];

const Buy = () => {

  const handleBuy = (productName) => {
    alert(`You clicked Buy for ${productName}`);
    // Implement further logic for purchasing the product
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="section-title">Pre-Owned Store</h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-info"><span className="info-label">Clothes Name:</span> {product.clothesName}</p>
                <p className="product-info"><span className="info-label">Age of Clothes:</span> {product.ageOfClothes}</p>
                <p className="product-info"><span className="info-label">Brand Name:</span> {product.brandName}</p>
                <p className="product-info"><span className="info-label">Usage Intensity:</span> {product.usageIntensity}</p>
                <p className="product-info"><span className="info-label">Category:</span> {product.category}</p>
                <p className="product-description">{product.description}</p>
                <button onClick={() => handleBuy(product.name)} className="buy-button">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buy;
