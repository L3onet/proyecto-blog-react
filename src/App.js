import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import { categorias, posts } from './data/posts';
import PostGrid from './components/PostGrid/PostGrid';

function App() {

  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");

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
            categorias={categorias}
            categoriaActiva={categoriaActiva}
            onCambiarCategoria={setCategoriaActiva}
          />

          <PostGrid
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
