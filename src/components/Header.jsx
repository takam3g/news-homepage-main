import Nav from './Nav';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <img src={Logo} alt="Logo" className="w-12 desktop:w-16"/>
      <Nav />
    </div>
  )
}

export default Header