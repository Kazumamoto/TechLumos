import './App.css';
import Navbar from './components/Navbar/navbar';
import MainPage from './pages/MainPage/mainPage';
import Footer from './components/Footer/footer';
import Contact from './pages/Contact/contact';
import image from './images/boxes.svg'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <img src={image} style={{position:'right'}}></img> */}
      {/* <MainPage/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
