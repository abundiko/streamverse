import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppButton from './AppButton'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const MainNav = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={`MainNav h-16 z-30 w-full fixed top-0 left-0 flex justify-between items-center px-[10vw]
        ${scrolled && 'bg-background-light dark:bg-background-dark shadow-lg'}
      `}>
      <Link to="/">
        <img src="/assets/images/logo_text.png" alt="logo"
          className="w-40"
        />
      </Link>
      <div className=" scale-75 text-text-light">
        <AppButton text="Login" icon={faUser} onClick={() => navigate('/login')} />
      </div>
    </header>
  )
}

export default MainNav