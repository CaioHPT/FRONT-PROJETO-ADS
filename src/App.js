import './App.css';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Trips from './pages/Trips';
import Adm from './pages/Adm';
import ModalProvider from './context/Modal';
import TripsProvider from './context/Trips';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <TripsProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path='/' exact Component={Home} />
              <Route path='/trips' Component={Trips} />
              <Route path='/signIn' Component={Login} />
              <Route path='/register' Component={Register} />
              <Route path='/adm' Component={Adm} />
              <Route path='*' Component={NotFound} />
            </Routes>
          </Router>
        </TripsProvider>
      </ModalProvider>
    </div>
  );
}

export default App;

//Mudar depois para uma pagina
const NotFound = () => {
  return (
    <>
      <h1>404</h1>
    </>
  )
}