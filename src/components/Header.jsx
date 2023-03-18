import React, { useState, useEffect } from 'react';
// import du composant qui gère la navigation 
import NavMenu from './NavMenu';

export default function Header() {
   // état, il gère l'animation du menu au scroll
  const [show, setShow] = useState(false);

  // #comportements
  // changement de couleur au scroll vers le bas
  useEffect (() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setShow(true) : setShow(false);
    });
  });

  return (
    <header className={`${ show ? 'bg-green-300/40 backdrop-blur-md shadow-md' : 'bg-none'} text-xl py-5 sticky top-0 left-0 z-10 transition-all duration-500 `}>
            <NavMenu />
    </header>
  )
}
