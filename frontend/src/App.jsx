import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './components/About'
import Projects from "./components/Projects";
import Skills from './components/Skills'
import Experience from "./components/Experience";
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />

      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      <Footer />
    </div>
  )
}

export default App