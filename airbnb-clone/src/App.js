import './App.css';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Banner />
      <Cards />
      <Footer />

    </div>
  );
}

export default App;
