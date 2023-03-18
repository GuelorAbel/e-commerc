import React from 'react';
// image de couverture
import CoverImg from '../assets/hero.svg';

export default function Hero() {
      return (
      <section className='py-10'>
            <div className="section">
                  
                  <div className='grid md:grid-cols-2 gap-2 md:gap-5'>
                        <div className='my-auto'>
                              <h1 className='title'>La matinale</h1>
                              <h6 className='texte mb-2'>
                                    Bienvenue dans notre journal ! Nous sommes heureux de vous présenter des publications qui ont 
                                    pour but de vous informer sur l'actualité nationale et internationale de manière impartiale et objective. <br />
                                    Nous mettons à votre disposition une équipe de journalistes professionnels qui travaillent sans relâche pour
                                    vous offrir les meilleures informations du moment.
                              </h6>
                              {/* mon bouton */}
                              <button className='btn bg-green-300'>Démarrez avec nous</button>
                        </div>

                        {/* l'image de couverture se trouve ici */}
                        <div className=''>
                              <img src={CoverImg} alt=""  className='h-[500px] mx-auto'/>
                        </div>
                  </div>
            </div>
      </section>
      )
}
