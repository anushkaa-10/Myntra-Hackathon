import React from 'react'
import { createContext } from 'react';
import SoldItems from '../../components/SoldItems';
import UploadForm from '../../components/UploadForm';
import DetailsForm from '../../components/DetailsForm';

export const NameContext = createContext();


export default function Sell() {
    return (
        <div className="App">

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