import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider/Slider';

import { images } from './services/images.js';
 
import './styles/home.scss';

function App() {
  return (
    <div id="home">
      <Navbar />

      <main className="product-container">
        <Slider images={images} />

        <p>
          Some text
        </p>
      </main>
    </div>
  );
}

export default App;
