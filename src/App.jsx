import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Servicios from './components/Services';
import DiagnosticoForm from './components/FormDiagnotic';
import Footer from './components/Footer';
import AboutUs from './components/AboutUS';
import Blog from './components/Blog';
import Steps from './components/Steps';
import Contacto from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

// Nuevos componentes para el buscador y reparaciones
import DeviceSearch from './components/DeviceSearch'; // Buscador
import DeviceRepairs from './components/DeviceRepairs'; // Reparaciones

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              {/* Buscador de dispositivos al inicio */}
              
              <HeroSection /><DeviceSearch />
              <Servicios />
              <Steps /> 
              <DiagnosticoForm />
              <Footer />
            </>
          } 
        />
        <Route path="/about" element={<><AboutUs /><Footer /></>} />
        <Route path="/blog" element={<><Blog /><Footer /></>} />
        <Route path="/steps" element={<><Steps /><Footer /></>} />
        <Route path="/contact" element={<><Contacto /><Footer /></>} />
        <Route path="/diagnostico" element={<><DiagnosticoForm /><Footer /></>} />
        <Route path="/Servicios" element={<><Servicios /><Footer /></>} />

        {/* Nuevas rutas para el buscador y reparaciones */}
        <Route path="/search" element={<DeviceSearch />} />
        <Route path="/device/:deviceId" element={<DeviceRepairs />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
