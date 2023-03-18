import React from 'react';
// système de routage vers les différentes pages
import { Routes, Route } from 'react-router-dom';
// import des #pages du site
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
// les composants header & footer
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <>
        {/* le header du site, il contient le composant du menu */}
        <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/boutique" element={ <Shop /> } />
                <Route path="/post/:id" element={ <PostDetail /> } />
                <Route path="/contact" element={ <Contact /> } />
            </Routes>

        <Sidebar />
        {/* le footer du site, il contient le composant du pied de page */}
        <Footer />
    </>
  )
}
