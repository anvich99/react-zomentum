import React from 'react';
import './ui/styles.scss'
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Offer } from './components/Offer/Offer';

export const App = ()=> {
  return (
    <div className='zomentum-content'>
      <Header/>
      <Hero/>
      <Offer/>
    </div>
  );
}


