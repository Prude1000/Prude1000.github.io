import React from 'react';

const Sidebar = () => {
  const categories = [
    'Electrónica', 'Moda', 'Hogar', 'Libros', 
    'Deportes', 'Belleza', 'Juguetes'
  ];

  return (
    <aside className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 mt-16 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Categorías</h2>
      <nav>
        {categories.map((category, index) => (
          <button 
            key={index} 
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors mb-2"
          >
            {category}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;