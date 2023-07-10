import React from 'react'
import { footerData } from '../../data/HomeData'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="Footer py-10 bg-[#00000044] text-text-light">
      <div className="container mx-auto flex flex-wrap">
        {
          footerData.map((item, index) => {
            return (
              <div className='w-1/2 md:w-3/12' key={index}>
                {
                  item.map(({ title, to }) =>
                    <Link
                      className='block mb-2 opacity-80 hover:opacity-100'
                      to={to} key={title}>{title}</Link>
                  )
                }
              </div>
            )
          })
        }
      </div>
    </footer>
  )
}

export default Footer