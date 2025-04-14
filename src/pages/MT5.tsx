import React from 'react';
import MT5Hero from '@/components/MT5Hero';
import ContactForm from '@/components/ContactForm';
import Promotions from '../components/Promotions';
import FAQ from '@/components/FAQ';



const MT5 = () => {
  // Exact colors extracted from your YoPips theme
   return (
    <>
       <MT5Hero /> 
       <Promotions/>
       <ContactForm />
       <FAQ/>
      
       
    </>
   )
  
};

export default MT5;