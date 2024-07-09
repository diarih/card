import React from 'react';
import Image from '../assets/images/illustration-article.svg'
import Avatar from '../assets/images/image-avatar.webp'


const Card = () => {
  return (
    <div className={'relative group w-96 font-figtree'}>
      <div
        className="absolute -right-2 -bottom-2 bg-black h-full w-full rounded-xl group-hover:-right-4 group-hover:-bottom-4 transition-all"></div>
      <div>
        <div className={'rounded-xl border-2 border-neutral-950 bg-white p-6 space-y-5 relative'}>
          <img className={'rounded-lg'} src={Image}/>
          <div className={'space-y-3'}>
            <div className={'text-xs rounded-md py-2 px-2 font-bold bg-amber-300 inline-block'}>
              Learning
            </div>
            <div>
              <p className={'font-semibold text-xs'}>Published 21 Dec 2023</p>
            </div>
            <div>
                <a href="https://dihza.tech/" target="_blank" rel="noopener noreferrer">
                <h1 className={'text-xl font-bold group-hover:text-amber-400 cursor-pointer'}>HTML & CSS
                  foundations</h1>
              </a>
            </div>
            <div>
              <p className={'text-gray-400'}>These languages are the backbone of every website, defining structure,
                content, and presentation.</p>
            </div>
          </div>
          <div className={'flex items-center space-x-2'}>
            <img className={'h-10 w-10 rounded-full'} src={Avatar}/>
            <div>
              <p className={'text-xs font-bold'}>Greg Hooper</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Card;