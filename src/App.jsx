import './App.css'
import { useState } from 'react'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from "./compoment/Footer";
import Header from "./compoment/Header";

const getPages = (handleNavClick) => ({
  Home: <Home onNavigate={handleNavClick} />,
  Services: <Services />,
  About: <About />,
  Portfolio: <Portfolio />,
  Contact: <Contact />,
})

function App() {
  const [page, setPage] = useState('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (selectedPage) => {
    setPage(selectedPage)
    setIsMenuOpen(false) // refermer le menu après clic
  }
  return (
    <div className="main-frame inspired-layout">
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        page={page}
        handleNavClick={handleNavClick}
      />
      <main>
        {getPages(handleNavClick)[page]}
      </main>
      <Footer />
    </div>
  )
}

export default App
