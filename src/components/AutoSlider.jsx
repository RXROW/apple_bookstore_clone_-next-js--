 "use client";
import Image from 'next/image';

export const AutoSlider = ({ images, duration }) => {
  return (
    <div className='slider h-72 mt-10 overflow-hidden flex'>
      <div
        className='flex gap-5 cursor-pointer animate-swipe hover:[animation-play-state:paused]'
        style={{ animationDuration: `${duration}s` }}
      >
        {[...images, ...images, ...images].map(({ src, title, author }, index) => (
          <div className='flex flex-col items-start flex-shrink-0' key={index}>
            <Image src={src} alt={title} width={195} height={195} className='w-52 h-52 object-cover rounded-md' />
            <span className='pt-2 font-bold'>{title}</span>
            <span className='text-gray-600 dark:text-gray-300'>{author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};