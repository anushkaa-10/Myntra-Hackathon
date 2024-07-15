import React from 'react'
import { createContext } from 'react';
import SoldItems from '../../components/SoldItems';
import UploadForm from '../../components/UploadForm';
import DetailsForm from '../../components/DetailsForm';
import Navbar from "../../components/Navbar";

export const NameContext = createContext();


export default function Sell() {
    return (
        <div className="App">
          <Navbar/>
          <main>
            <div className="container">
             <SoldItems />
              <UploadForm />
              <DetailsForm />
            </div>
          </main>
        </div>
      );
    
}