import React, { useContext } from 'react';
// module des liens
import { Link } from 'react-router-dom';
// les icons
import { GiBlackBook } from 'react-icons/gi';
import { GiShoppingBag } from 'react-icons/gi';
// import du cardcontext et sidebarcontext
import { SidebarContext } from '../context/SidebarContext';
import { CardContext } from '../context/CardContext';

export default function NavMenu() {
      // état du context
      const {open, setOpen} = useContext(SidebarContext);
      const {itemAdd} = useContext(CardContext);
      
      // affichage
      return (
            <nav className='section navbar bg-transparent'>
                  <div className="flex-1">
                        <Link to="/" className="flex items-center"> 
                              <GiBlackBook size={50} /> 
                              <span className='uppercase font-semibold'>Le quotidien</span>
                        </Link>
                  </div>
                  {/* les liens vers les #pages de l'app */}
                  <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 space-x-6">
                              <li>
                                    <Link to="/"> accueil </Link>
                              </li>
                              <li>
                                    <Link to="/boutique"> boutique </Link>
                              </li>
                              <li>
                                    <Link to="/contact"> contact </Link>
                              </li>
                              {/* le boutton qui ouvre le panier */}
                              <li className='relative flex items-center mr-3' onClick={() => setOpen(!open)}>
                                    <div className="indicator">
                                          <span className="indicator-item badge font-bold"> {itemAdd} </span>
                                          <GiShoppingBag size={25} className="grid h-8 place-items-center" />
                                    </div>
                              </li>
                        </ul>
                        
                  </div>
            </nav>
      )
}
