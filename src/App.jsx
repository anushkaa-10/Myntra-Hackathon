import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
