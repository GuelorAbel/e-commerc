import React, { useContext } from 'react';
// les icons et les liens 
import { Link } from 'react-router-dom';
import {ImEyePlus} from 'react-icons/im';
import {FaCartPlus} from 'react-icons/fa';
// import du module context de la card
import { CardContext } from '../context/CardContext';  

export default function Card({post}) {
      // état
      const {handleAdd} = useContext(CardContext);
      return (
            <div className='hover:shadow-md transition-all duration-300 hover:scale-95'>
                  {/* image produit, bouttons panier et voir les détails */}
                  <div className='w-90 h-80 flex flex-col items-center border border-gray-300 mb-4 group transition relative cursor-pointer'>
                        <div className='w-full h-full flex items-center justify-center'>
                              {/* mon image */}
                              <img src={post.image} alt={post.title} className="max-h-[200px] group-hover:scale-110 duration-300" />
                        </div>
                        {/* boutton ajout au panier + voir détails du produit */}
                        <div className='absolute top-6 -right-0 flex flex-col items-center justify-center gap-3 w-16 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300
                        group-hover:right-5'>
                              {/* ajouter au panier */}
                              <button title="Ajouter au panier" onClick={() => handleAdd(post, post.id)} >
                                    <div className='flex items-center justify-center p-3 bg-green-300 w-full text-gray-800'>
                                          <FaCartPlus size={25} />
                                    </div>
                              </button>
                              {/* voir le détails du produit */}
                              <Link to={`post/${post.id}`} className='p-3 bg-white flex items-center justify-center w-full text-gray-800' title="Voir plus...">
                                    <ImEyePlus size={25}/>
                              </Link>
                        </div>
                  </div>
                  {/* titre produit, catégorie & prix */}
                  <div className='mb-1'>
                        <div className='flex justify-between items-center px-2 mb-3'>
                              <p className='text-gray-500 capitalize'> {post.category} </p>
                              <p className='badge bg-green-300 font-bold rounded-lg'> €  {post.price} </p>
                        </div>

                        <Link to={`/post/${post.id}`}>
                              <h3 className='font-semibold uppercase mb-2 text-center px-2'>{ post.title }</h3>
                        </Link>
                  </div>
            </div>
      )
}

