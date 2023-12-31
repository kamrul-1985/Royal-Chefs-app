import React from 'react';
import NavBar from '../shared/NavBar';
import {Outlet} from 'react-router-dom'
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Main = () => {
      return (
            <div>
                  <Header></Header>
                  <NavBar></NavBar>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Main;