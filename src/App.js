import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Countries from './components/College'
import Admin from './components/Admin'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import Signup from './components/Auth/Signup'
import {AuthProvider} from './components/Auth/AuthProvider'
import ProtectedRoutes from './components/Auth/ProtectedRoutes'
import College from './components/College'
import DemoRoute1 from './components/DemoRoute1'
import DemoRoute2 from './components/DemoRoute2'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header/>
          <Navigation/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/college" element={<College/>}/>
            <Route path="/admin" element={<ProtectedRoutes/>}>
              <Route path="" element={<Admin/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/demo1" element={<DemoRoute1/>}/>
            <Route path="/demo2" element={<DemoRoute2/>}/>
          </Routes>
        
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
