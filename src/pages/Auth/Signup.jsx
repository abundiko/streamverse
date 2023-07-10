import React from 'react'
import AnimatedPage from '../../components/AnimatedPage'
import { Link } from 'react-router-dom'
import MainNav from '../../components/MainNav'
import Footer from '../Home/Footer'

const Signup = () => {
  return (
    <AnimatedPage>
      <MainNav />
      <main className="Signup">
        <section className="h-screen flex flex-row-reverse dark:text-text-light">
          <img src="/assets/images/bg.jpg" alt="background"
            className="hidden md:block md:w-1/2 h-full object-cover" />
          <div className="h-full w-full md:w-1/2 flex justify-center md:justify-start items-center px-3 md:px-8 lg:px-10 2xl:px-16 ">
            <div className="max-w-[500px] 2xl:max-w-[700px]">
              <h1 className="font-extrabold text-3xl md:text-[4vw]">Join Streamverse!</h1>
              <p className="opacity-80 text-lg my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, possimus. Veniam, qui!</p>
              <form action=""
                className='flex flex-col py-4'>
                <label htmlFor="username">Username:</label>
                <input
                  className='p-3 rounded-md shadow outline-none bg-[#00000022] dark:bg-background-light  text-text-dark mb-2'
                  type="text" placeholder='enter username here' id="username" />
                <label htmlFor="email">Email:</label>
                <input
                  className='p-3 rounded-md shadow outline-none bg-[#00000022] dark:bg-background-light  text-text-dark mb-2'
                  type="email" placeholder='yourname@example.com' id="email" />
                <label htmlFor="password">Password:</label>
                <input
                  className='p-3 rounded-md shadow outline-none bg-[#00000022] dark:bg-background-light  text-text-dark mb-2'
                  type="password" placeholder='enter password here' id="password" />
                <input
                  className='p-3 rounded-md shadow outline-none bg-primary-dark dark:bg-primary-light  text-text-light my-3 font-bold text-lg'
                  type="submit" value='Submit' />

              </form>
              <div className="flex justify-between">
                <Link className='hover:text-primary-light' to="/login">Login instead?</Link>
                <Link className='hover:text-primary-light' to="/recover">Forgot Pasword?</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </AnimatedPage>
  )
}

export default Signup