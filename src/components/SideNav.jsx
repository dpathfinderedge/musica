import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainCategories, profileCategories } from '../assets/constants';

const SideNav = () => {
  const navLink = (arg) => arg.isActive ? 'nav-link active' : 'nav-link';
  const divStyle ='bg-dark-alt rounded-[32px] px-4 pt-7'
  const imgStyle = 'nav-icon pb-7 transition-all scale-125 hover:scale-150';

  return (
    <aside className="md:block hidden md:mx-8 sm:mx-4 mx-2">
      <div className={`${divStyle} mb-5`}>  
        {mainCategories.map((category) => (
          <NavLink 
            key={category.name}
            to={`/${category.name}`}
            className={navLink}
          >
            <img 
              className={imgStyle} 
              src={category.icon} 
              alt={category.name}  
            /> 
            <img 
              className={`${imgStyle} nav-icon-a`}
              src={category.activeIcon} 
              alt={category.name}  
            /> 
          </NavLink>
        ))}
      </div>
      <div className={divStyle}>
        {profileCategories.map((category) => (
          <NavLink 
            key={category.name}
            to={`/${category.name}`}
          >
            <img 
              className={imgStyle} 
              src={category.icon} 
              alt={category.name} 
            />
            <img 
              className={`${imgStyle} nav-icon-a`} 
              src={category.activeIcon} 
              alt={category.name} 
            />
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default SideNav;