import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { categorias, posts } from './data/posts';
import PostGrid from './components/PostGrid/PostGrid';

function App() {

  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");
  const [postSeleccionado, setPostSeleccionado] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);


  // Filtrar posts
  const postsFiltrados = posts.filter(post => {
    const coincideBusqueda = post.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                             post.resumen.toLowerCase().includes(busqueda.toLowerCase());
    
    const coincideCategoria = categoriaActiva === "Todas" || 
                              post.categoria === categoriaActiva;
    
    return coincideBusqueda && coincideCategoria;
  });

  const handleLeerMas = (postId) => {
    const post = posts.find(p => p.id === postId);
    setPostSeleccionado(post);
    setModalAbierto(true);
  };

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
            posts={postsFiltrados}
            onLeerMas={handleLeerMas}
          />
        </div>
      </main>

      <Footer 
        anio={new Date().getFullYear()}
        nombreEmpresa="L3oNeT Dev"
        enlaces={enlaces}
      />

      {/* Modal para ver post completo */}
      <Modal
                isOpen={modalAbierto}
                onClose={() => setModalAbierto(false)}
                titulo={postSeleccionado?.titulo}
                footer={
                    <>
                        <Button 
                            texto="Cerrar"
                            tipo="secondary"
                            onClick={() => setModalAbierto(false)}
                        />
                        <Button 
                            texto="Me gusta"
                            tipo="primary"
                            icono="❤️"
                            onClick={() => alert('¡Gracias por tu like!')}
                        />
                    </>
                }
            >
                {postSeleccionado && (
                    <div>
                        <img 
                            src={postSeleccionado.imagen} 
                            alt={postSeleccionado.titulo}
                            style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }}
                        />
                        <p><strong>Autor:</strong> {postSeleccionado.autor}</p>
                        <p><strong>Fecha:</strong> {postSeleccionado.fecha}</p>
                        <p><strong>Categoría:</strong> {postSeleccionado.categoria}</p>
                        <hr />
                        <p>{postSeleccionado.contenido}</p>
                    </div>
                )}
            </Modal>
    </div>
  );
}

export default App;
