import { Navbar } from './components/Navbar';
import { ProductDetails } from './components/ProductDetails';
import { Slider } from './components/Slider/Slider';

import { images } from './services/images.js';
 
import './styles/home.scss';

function App() {
  return (
    <div id="home">
      <Navbar />

      <main className="product-container">
        <Slider images={images} />
        <ProductDetails />
      </main>
    </div>
  );
}

export default App;
