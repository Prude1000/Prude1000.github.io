import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Smartphone Pro X',
      category: 'Electrónica',
      price: 799.99,
      rating: 4,
      image: '/smartphone.jpg'
    },
    {
      id: 2,
      name: 'Auriculares Noise Cancelling',
      category: 'Audio',
      price: 249.99,
      rating: 5,
      image: '/headphones.jpg'
    },
    // Más productos...
  ]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;