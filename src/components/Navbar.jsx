import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <img 
              src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png?f=webp&w=256" 
              alt="Myntra Logo" 
              className="h-10"
            />
          </div>
          <ul className="hidden md:flex space-x-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Men</li>
            <li className="cursor-pointer">Women</li>
            <li className="cursor-pointer">Kids</li>
            <li className="cursor-pointer">Beauty</li>
          </ul>
        </div>
        <div className="flex-1 mx-4">
          <input 
            type="text" 
            placeholder="Search for products" 
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer flex flex-col items-center">
            <img 
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/recycled-clothing-4349796-3604500.png?f=webp&w=256" 
              alt="Recycle Icon" 
              className="h-8"
            />
            <span>Recycle</span>
          </div>
          <div className="cursor-pointer flex flex-col items-center">
            <img 
              src="https://www.svgrepo.com/show/43426/profile.svg" 
              alt="Profile Icon" 
              className="h-8"
            />
            <span>Profile</span>
          </div>
          <div className="cursor-pointer flex flex-col items-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUVTGLqdaMFuYl5u9T8pWN9vCndMErgsXXA&s" 
              alt="Wishlist Icon" 
              className="h-8"
            />
            <span>Wishlist</span>
          </div>
          <div className="cursor-pointer flex flex-col items-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyE7NSW_UDUef0rR49CfqQYRrzMtXroXkWQ&s" 
              alt="Cart Icon" 
              className="h-8"
            />
            <span>Cart</span>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center mt-2">
        <ul className="flex space-x-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Men</li>
          <li className="cursor-pointer">Women</li>
          <li className="cursor-pointer">Kids</li>
          <li className="cursor-pointer">Beauty</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
