import React, { createContext, useState, useEffect } from 'react';
// création du context
export const PostContext = createContext();


// ma fonction principale
const PostProvider  = ({children}) => {
  // état, données
  const [posts, setPosts] = useState([]);

  // fetch (allez chercher)
  useEffect(() => {
      const fetchPosts = async () => {
        // récupération des post depuis l'url
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setPosts(data);
      };
      fetchPosts();
  }, []);

  // mon affichage
  return (
    <PostContext.Provider value={ {posts} }>
      {/* gère le context des produits */}
      { children }
    </PostContext.Provider>
  )
}

export default PostProvider;
