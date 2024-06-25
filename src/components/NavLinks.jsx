import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div className="flex flex-col desktop:flex-row desktop:justify-between">
      <NavLink to={"/"} className="text-secondary-darkGrayishBlue hover:text-primary-red">Home</NavLink>
      <NavLink to={"/new"} className="text-secondary-darkGrayishBlue hover:text-primary-red">New</NavLink>
      <NavLink to={"/popular"} className="text-secondary-darkGrayishBlue hover:text-primary-red">Popular</NavLink>
      <NavLink to={"/trending"} className="text-secondary-darkGrayishBlue hover:text-primary-red">Trending</NavLink>
      <NavLink to={"/categories"} className="text-secondary-darkGrayishBlue hover:text-primary-red">Categories</NavLink>
    </div>
  )
}

export default NavLinks