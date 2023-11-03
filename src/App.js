import React from 'react';
import { NavBar, Footer, Header } from './components';
import { Payments, Services, SignUp } from './container';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Payments />
      <Services />
      <SignUp />
      <Footer />
    </div>
  );
};

export default App;
