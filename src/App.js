import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Search from './pages/Search.js';
import CreateAccount from './pages/CreateAccount.js';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navigation /> */}

        <main>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/search" element={<Search />} />
              <Route path="/createAccount" element={<CreateAccount />} />
            </Routes>
          </section>

        </main>
      </BrowserRouter >
    </>
  );
}

export default App;