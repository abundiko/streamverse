import React from 'react'

const FeatureCard = ({ reversed, img, title, subtitle }) => {
  return (
    <div className={` text-text-dark dark:text-text-light mb-3 flex ${reversed ? 'flex-wrap-reverse flex-row-reverse' : 'flex-wrap-reverse'}`}>
      <article className='p-10 md:p-16 w-full md:w-6/12  flex flex-col justify-center'>
        <h1 className="font-extrabold text-3xl">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </article>
      <div className="h-[40vh] md:h-[50vh] w-full md:w-6/12 overflow-hidden relative">
        <img src={`/assets/images/${img}`}
          alt={title}
          className="absolute w-full h-full top-0 left-0 blur-lg" />
        <img src={`/assets/images/${img}`}
          alt={title}
          className="absolute w-8/12 h-[80%] top-1/2 left-1/2 shadow-black shadow-xl -translate-x-[50%] -translate-y-[50%] " />

      </div>
    </div>
  )
}

export default FeatureCard