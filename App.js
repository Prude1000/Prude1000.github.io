import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="ml-64 pt-20 w-full">
          <ProductGrid />
        </main>
      </div>
    </div>
  );
};

export default App;

// DONE