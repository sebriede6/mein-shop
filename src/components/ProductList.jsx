
import ProductCard from './ProductCard'; 

function ProductList() {
  const products = [
    { id: 1, 
      name: "RS6", 
      price: 140000.00, available: true, 
      thumbnail:"src/assets/rs6.jpeg" 
     },
     
    { id: 2,
       name: "Simson s60 4-Kanal",
        price: 3500, available: false,
         thumbnail: "src/assets/S-51-E.jpg"
          },

    { id: 3,
      name: "Luftballons",
      price: 110,
      available: true,
      thumbnail: "src/assets/luftballons.jpg" 
  },
    { id: 4,
       name: "Polo GT", 
       price: 100,
       available: true,
      thumbnail:"src/assets/polo.jpg"
         },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
