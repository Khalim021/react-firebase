import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home'
import Checkouts from './pages/Checkouts';
import Login from './pages/Login';
import { auth } from './firebase';
import { StateValue } from './StateProvider';
import { useEffect } from 'react';

function App() {
  const [{basket}, dispatch] = StateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: "AUTH_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "AUTH_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);

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
