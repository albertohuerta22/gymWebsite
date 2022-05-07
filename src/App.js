import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import RoutesDirectory from './Routes';
import './global.scss';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <RoutesDirectory />
      </div>
      <Footer />
    </div>
  );
}

export default App;
