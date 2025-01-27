
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-red-600 to-purple-500">
      <Header />
      
      <main className="p-6">
        <ProductList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
