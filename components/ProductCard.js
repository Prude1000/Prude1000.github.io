import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Añadir al carrito
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.category}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                xmlns="http://www.w3.org/2000/svg" 
                fill={i < product.rating ? "currentColor" : "none"} 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className={`w-4 h-4 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;