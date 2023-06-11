import React from 'react';
import './App.css';
import Head from './Component/Head';
import Banner from './Component/Conten';
import Foorter from './Component/Foorter';

function App(){
  return (
   <div className='App'>
    <Head/>
    <Banner/>
    <Foorter/>
   </div>
  );
}

export default App;
