import './styles/App.scss'
import './styles/_Theme.scss'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'



function App() {


  return (
    <>
      <Background />
      <Navbar />
      <Home />
      <About />
      
    </>
  )
}

export default App
