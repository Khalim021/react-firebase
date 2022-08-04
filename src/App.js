import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home'
import Checkouts from './pages/Checkouts';
import Login from './pages/Login';

function App() {
  return (
      <div className="App">
         <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/checkout' element={<Checkouts />} />
            <Route path='/login' element={<Login />}/>
          </Routes>
        </main>
      </div>
  );
}

export default App;
