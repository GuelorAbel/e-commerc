import React, { useContext } from 'react';
// import des liens de react router dom
import { Link } from 'react-router-dom';
// import des icons
import { HiArrowLongRight} from 'react-icons/hi2';
import { FaTrash} from 'react-icons/fa';
// import du composant qui gère le panier
import CardItems from './CardItems';
// import du context
import { SidebarContext } from '../context/SidebarContext';
import { CardContext } from '../context/CardContext';


export default function Sidebar() {
  // états,données
  const {open, handleClose} = useContext(SidebarContext);
  const {bag, handleDeleteAll, total} = useContext(CardContext);
  console.log(useContext(CardContext));
  // affichage
  return (
    <div className={`${open ? 'right-0' : '-right-full'} fixed top-0 w-full h-full bg-white md:w-[38vw] transition-all duration-300 shadow-2xl z-20 px-4 md:px-[35px]`}>
      <div>
        <div className='flex items-center justify-between py-9'>
          <h6 className='uppercase text-sm font-semibold'> mon panier(0) </h6>
          <button className='' onClick={handleClose}>
            <HiArrowLongRight size={25} />
          </button>
        </div>
        <hr />
        {/* les produits qui sont déjà dans le panier */}
        <div className='h-[550px] overflow-y-auto overflow-x-hidden boder-b'>
            {bag.map((item) => {
              return(
                <CardItems item={item} key={item.id} /> 
              );
            })}
        </div>
      </div>
      {/* en dessous des articles */}
      <div className='flex flex-col gap-y-2 py-3 mt-4'>
        <div className='flex justify-between items-center py-2'>
          <div>
            {/* le montant total */}
            <p className='font-semibold uppercase'>
              <span className='mr-3'>Total : </span> € {parseFloat(total).toFixed(2)}
            </p>
          </div>
            {/* nettoyer mon panier(icon de la poubelle) */}
            <button className='bg-red-500 text-white p-2' onClick={handleDeleteAll}>
              <FaTrash  size={14}/>
            </button>
        </div>
      </div>
    </div>
  )
}
