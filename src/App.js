import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Search from './pages/Search.js';
import Explore from './pages/Explore.js';
import CreateAccount from './pages/CreateAccount.js';
import Establishments from './pages/Establishments.js';
import Profile from './pages/Profile.js';
import Bookmarks from './pages/Bookmarks.js';


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
              <Route path="/explore" element={<Explore />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/createAccount" element={<CreateAccount />} />
              <Route path="/establishments" element={<Establishments />} />
              <Route path="/bookmarks" element={<Bookmarks />} />

            </Routes>
          </section>
        </main>
      </BrowserRouter >
    </>
  );
}

export default App;