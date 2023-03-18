import React, { useContext }  from 'react';
// import react router dom + icons
import {Link} from 'react-router-dom';
import {IoCloseSharp} from 'react-icons/io5';
import {RxMinus, RxPlus} from 'react-icons/rx';
// import card context
import { CardContext } from '../context/CardContext';

export default function CardItems({item}) {
    // usecontext
    const {handleDelete, bagMore, BagRemove} = useContext(CardContext);
    // affichage
    return (
        <div className="flex flex-col w-full">
            <div className='w-full max-h-[125px] flex items-center my-4 space-x-2'>
                {/* bloc de l'image */}
                <Link to={`/post/${item.id}`}>
                    <img src={item.image} alt={item.title} className="max-w-[82px]" />
                </Link>
                <div>
                    <div className="w-full flex items-center justify-between">
                        {/* le title et l'icon de suppression du panier */}
                        <Link to={`/post/${item.id}`} className="hover:underline underline-offset-4">
                            <h6 className='text-sm font-medium max-w-[270px]'> {item.title} </h6>
                        </Link>
                        {/* supprimer le produit du panier */}
                        <button onClick={() => handleDelete(item.id)}> 
                            <IoCloseSharp size={25} className="hover:text-red-600 transition-all duration-300"/> 
                        </button>
                    </div>
                    {/* qté, item price*/}
                    <div className="flex space-x-2 justify-center h-[40px] my-2">
                        {/* qté */}
                        <div className="flex flex-1 max-w-[100px] items-center border text-sm">
                            {/* diminuer la quantité */}
                            <div onClick={() => BagRemove(item.id)} className='flex-1 flex justify-center items-center px-2 h-full cursor-pointer redVariant'>
                                <RxMinus />
                            </div>
                            {/* quantité */}
                            <div className='flex justify-center items-center h-full px-2 text-gray-500 text-xs'>
                                {item.amount}
                            </div>
                            {/* augmenté la quantité */}
                            <div onClick={() => bagMore(item.id)} className='flex-1 flex justify-center items-center px-2 h-full cursor-pointer greenVariant'>
                                <RxPlus />
                            </div>
                        </div>
                        {/* prix de l'article */}
                        <p className='flex-1 flex justify-around items-center text-xs text-gray-500'>
                            € {item.price}
                        </p>
                        {/* coût final */}
                        <p className='flex-1 flex justify-end items-center text-xs text-gray-500 font-bold'>
                            {`€ ${parseFloat(item.price * item.amount).toFixed(2)}`}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
    }
