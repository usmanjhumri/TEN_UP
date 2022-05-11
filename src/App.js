import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/header/NavBar';
import TenUpSection from './components/What_is_TenUp/TenUpSection';
// import Particles from 'react-particles-js';
// import ParticlesAnimation from './components/ParticlesAnimation';
function App() {
  return (
    <div className="App">
      
      <NavBar />
      <TenUpSection/>
      
      <Routes>
        {/* <Route path="/" element={<NavBar />} /> */}
      </Routes>
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
