
import React from 'react';
import ProductList from '../components/ProductList'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 p-4 text-white text-center">Produktübersicht</header>
      
      <main className="p-6">
        <ProductList />  
      </main>

      <footer className="bg-gray-800 p-4 text-white text-center">© 2025 Mein Shop</footer>
    </div>
  );
}

export default App;
