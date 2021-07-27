import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';

import './styles/home.scss';

function App() {
  return (
    <div id="home">
      <Navbar />

      <main className="product-container">
        <Slider />

        <p>
          Some text
        </p>
      </main>
    </div>
  );
}

export default App;
