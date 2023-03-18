import React from 'react'
import { useContext } from 'react';
// import des paramètres 
import { useParams } from 'react-router-dom';
// import des contextes 
import { CardContext } from '../context/CardContext';
import { PostContext } from '../context/PostContext';
// import icon
import {FaCartPlus} from 'react-icons/fa';

export default function PostItem() {
      // récupération du produit reçu dans l'url
      const { id } = useParams();
      const { posts } = useContext(PostContext);
      const { handleAdd } = useContext(CardContext);
      // récupérer un seul produit en se basant sur son id
      const post = posts.find(item => {
            return item.id === parseInt(id);
      });
      // si le produit n'est pas trouvé
      if (!post) {
            return (
                  <div className='h-screen flex justify-center items-center'>
                        <h1>Le produit n'existe pas...</h1>
                  </div>
            )
      };
      // destructuration du produit
      const { title, image, price, description } = post;
      return (
      <section>
            <div className='grid md:grid-cols-2 gap-4'>
                  {/* bloc image du produit */}
                  <div>
                        <img src={image} alt={title} className='mx-auto max-w-[130px] lg:max-w-sm max-h-[380px] ' />
                  </div>
                  {/* bloc de la description du produit */}
                  <div className='my-auto px-2 md:px-0'>
                        <h2 className='text-center md:text-left text-xl font-black uppercase underline mb-4'>
                              { title }
                        </h2>
                        <p className='font-bold px-2 text-red-600 text-right mb-2'>
                              € { price }
                        </p>
                        <p className='text-sm text-justify mb-4'>
                              { description }
                        </p>

                        <button onClick={ () => handleAdd(post, post.id) } className="bg-gray-900 text-white btn">
                              Ajouter au panier 
                        </button>
                  </div>  
            </div>
      </section>
      )
}
