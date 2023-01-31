import React from 'react';
import ProducsList from './services/components/producsList';
import Navbar from './services/components/navbar';
import Footer from './services/components/footer';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './services/components/productPage';

export default function App() {
  return (
    <div className="container app-container d-flex flex-column justify-content-between">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProducsList />} />
        <Route path="/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
