// App.jsx define el router principal de la aplicación.
// Aquí se asignan las rutas a los componentes correspondientes.
import { BrowserRouter as Router, Routes, Route } from 'react-router' // Importa el router y los componentes necesarios para definir rutas.

import Login from './pages/Login' // Página de inicio de sesión
import Posts from './pages/Posts'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </>
  )
}

export default App