import React from 'react';

const products = [
  
  { id: 1, name: 'Product 1', price: '$50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gg5fdLA-gq3h62xI_eaNSRTFILnKRMjB6w&s' },
  { id: 2, name: 'Product 2', price: '$70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKKOpWooqxrap4RbvQb7zenywQYo76uUkCQ&s' },
  { id: 3, name: 'Product 3', price: '$50', image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18659986/2024/2/1/d9df4ff9-84ac-4e4a-b5ce-b02dfb8d5d6c1706764921464-Janasya-Pink-Midi-Dress-3631706764921061-1.jpg' },
  { id: 4, name: 'Product 4', price: '$50', image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22222480/2023/3/3/50462fd7-df40-40ef-ad84-62e7a38730181677864626684KALINIPurpleFloralLayeredGeorgetteMaxiDress1.jpg' },
  { id: 5, name: 'Product 5', price: '$50', image: 'https://www.thewalkdeal.com/cdn/shop/products/Belive-Black.jpg?v=1640675713' },
  { id: 6, name: 'Product 6', price: '$50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8sHKhfbTyvwFnd5wqL6I1cm5XC7PkJgdCw&s' },
  
  
];

const ProductList = () => {
    return (
      <div>
        
        <div className="w-full flex justify-center">
        <img 
          src="https://images.freekaamaal.com/post_images/1683544641.webp" 
          alt="Header Image" 
          className="w-auto h-auto"
          style={{ maxWidth: '100%' }} // ensures the image is responsive
        />
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
  
  export default ProductList;
