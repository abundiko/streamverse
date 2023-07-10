import ThemeContextProvider from './context/ThemeContext';
import Home from './pages/Home/Index';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <ThemeContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </ThemeContextProvider>
    </>
  )
}

export default App
