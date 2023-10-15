import Navbar from "./components/Navbar"
import { Route , Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Profile from "./pages/Profile"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    </>
  )
}

export default App
