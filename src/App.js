import './App.css';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Trips from './pages/Trips';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/trips' Component={Trips} />
            <Route path='/signIn' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='*' Component={NotFound} />
          </Routes>
        </Router>
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