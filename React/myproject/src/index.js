import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header,Footer,Form } from './function';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header props="10" by="#"/>
    Hello 
    <Header props="20"/>
    <Form add="true"/>
    <Footer/>
  </>
);