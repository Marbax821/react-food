import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import { NotFound } from './pages/NotFound';

import './App.css';


function App() {
  return (
    <Router basename='/react-food'>
      <div>
        <Header />
        <main className='container content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contact />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Recipe />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
