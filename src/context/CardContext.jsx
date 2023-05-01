import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
// création du context
export const CardContext = createContext();

const CardProvider = ({children}) => {
      // états
      const [bag, setBag] = useState([]);
      const [itemAdd, setItemAdd] = useState(0);
      const [total, setTotal] = useState(0);

      // *comportements : ajouter un produit dans le panier
      const handleAdd = (post, id) => {
            const newItem = {...post, amount: 1};
            // nous vérifions ici si l'item est bien dans le panier
            const cardItem = bag.find((item )=> {
                  return item.id === id;
            });
            if(cardItem) {
                  const newCard = [...bag].map(item => {
                        if(item.id === id) {
                              return {...item, amount: cardItem.amount + 1};
                        } else {
                              return item;
                        }
                  });
                  setBag(newCard);
            } else {
                  setBag([...bag, newItem]);
            }
      };

      // supprimer un produit du panier
      const handleDelete = (id) => {
            const newCard = bag.filter(item => {
                  return item.id !== id;
            })
            setBag(newCard);
      };

      // nettoyage du panier (suppression de *les articles)
      const handleDeleteAll = (id) => {
            // cette fonction renvoi un tableu vide
            setBag([]);
      };

      // mettre à jour l'article ajouté
      useEffect(() => {
            if (bag) {
                  const amount = bag.reduce((accumulator, currentItem) => {
                        return accumulator + currentItem.amount;
                  }, 0);
                  setItemAdd(amount);
            }

      }, [bag]);

      // augmenter la qté d'un article
      const bagMore = (id) => {
            // cette fonction incrémente de +1 quand j'appuis sur + dans le panier
            const cardItem = bag.find((item) => item.id === id);
            // réutilisation de la fonction(handleadd) qui ajoute un produit dans le panier
            handleAdd(cardItem, id);
      };

      // la fonction qui diminue la qté d'un article
      const BagRemove = (id) => {
            // cette fonction décrémente de -1 quand j'appuis sur - dans le panier
            const cardItem = bag.find((item) => {
                  return item.id === id;
            });
            // vérification
            if(cardItem) {
                  const newbag = bag.map(item => {
                        if(item.id === id) {
                              return {...item, amount: cardItem.amount - 1}
                        } else {
                              return item;
                        }
                  });
                  // renvoi la valeur du nouveau panier
                  setBag(newbag);
            };
                  
            if(cardItem.amount < 2) {
                  handleDelete(id);   
            }

      };

      // la fonction qui calcule le total des achats
      useEffect(() => {
            const total = bag.reduce((accumulator, currentItem) => {
                  return accumulator + currentItem.price * currentItem.amount;
            }, 0);
            setTotal(total);
      });


      // affichage
      return (
      <CardContext.Provider value={{bag, handleAdd, handleDelete, handleDeleteAll, bagMore, BagRemove, itemAdd, total}}>
            {/* gère le context du single poste */}
            { children }
      </CardContext.Provider>
      )
}

export default CardProvider;
