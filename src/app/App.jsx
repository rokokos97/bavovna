import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {SalePage} from '../pages/salePage/salePage';
import {NotFoundPage} from '../pages/notFoundPage/notFoundPage';
import {ShopPage} from '../pages/shopPage/shopPage';
import {Card} from '../pages/card';
import './App.css';
import '../components/header/Header.css';
import '../pages/card/Card.css';
import '../components/footer/Footer.css';
import {AboutUsPage} from '../pages/aboutUs';
import AppLoader from '../hoc/appLoader';
import LoginLayout from '../components/LoginLayout/LoginLayout';
import {Layout} from '../components/layout';

function App() {
  return (
    <div className="App">
      <AppLoader>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SalePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="aboutus" element={<AboutUsPage/>} />
            <Route path="card" element={<Card searchingId='1'/>} />
            <Route path="login/*" element={<LoginLayout /> } />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AppLoader>
    </div>
  );
}

export default App;
