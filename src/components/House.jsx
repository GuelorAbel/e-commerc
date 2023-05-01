// import du context de react
import React, { useContext } from 'react';
// import postcontext
import { PostContext } from '../context/PostContext';
// composants utilent
import Card from './Card';

export default function House() {
  // états, données

  // les #comportements
  // obtenir les posts depuis posts context
  const {posts} = useContext(PostContext);
  console.log(posts);
  // récupération des produits (par rapport à la catégory)
  const filterPosts = posts.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filterPosts);
  // mon affichage
  return (
    <section className='section py-12 overflow-hidden'>
      <div className='mb-4 flex items-center space-x-2'>
        <div className='h-1 w-12 bg-green-300'></div>
          <h2 className='title first-letter:uppercase'> à la une</h2>
        <div className='h-1 w-12 bg-green-300'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 max-w-sm md:max-w-none mx-auto md:mx-0'>
          {/* affichage des produits sous forme de carte */}
          {filterPosts.map(post => {
              return (
                <Card key={post.id} post={post}/>
              );
          })}
      </div>

    </section>
  )
}
