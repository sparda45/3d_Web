import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import {Home, About, Projects, Contact} from './pages/Index';
const App = () => {
  return (
   <main className="bg-slate-300/20 h-[100vh]">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/contacts" element={<Contact/>}/>
      </Routes>
    </Router>
   </main>
  )
}

export default App