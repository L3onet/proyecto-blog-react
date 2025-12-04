import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';

function App() {

  const [busqueda, setBusqueda] = useState("");

  const enlaces = [
    { texto: "Inicio", url: "/" },
    { texto: "Sobre nosotros", url: "#" },
    { texto: "Testimonios", url: "#" },
    { texto: "Contacto", url: "#" }
  ];

  return (
    <div className="App">
      <Header 
        titulo="Mi Blog de desarrollo"
        subtitulo="Aprende programación web con React"
      />

      <main className="main-container">
        <div className="main-content">
          <SearchBar 
            busqueda={busqueda}
            onBuscar={setBusqueda}
          />

          <CategoryFilter

          />
        </div>
      </main>

      <Footer 
        anio={new Date().getFullYear()}
        nombreEmpresa="L3oNeT Dev"
        enlaces={enlaces}
      />
    </div>
  );
}

export default App;
