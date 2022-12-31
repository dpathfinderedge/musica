import React from 'react'
import { NavLink } from 'react-router-dom';
import { mobileNav } from '../assets/constants';

const MobileNav = ({ handleCloseSideMenu}) => {
  return (
    <nav 
      className={`md:hidden fixed inset-0 -left-full w-full slide-down transition-all pt-20 pl-10 bg-dark-alt z-50`}
    > 
      <button onClick={handleCloseSideMenu} className="absolute text-white top-4 right-4 text-2xl" >X</button>
      <div className='flex flex-col gap-6'>
        {mobileNav.map((item) => (
          <NavLink 
            key={item.name}
            to={`/${item.name}`} 
            onClick={handleCloseSideMenu}
            className="flex gap-3"
          >
            <img src={item.icon} alt={item.icon} />
            <span className="capitalize hover:text-gray-300">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default MobileNav;
