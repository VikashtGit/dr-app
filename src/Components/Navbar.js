import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import '../Styles/main.css';
import Logo from '../Images/hidLogo.PNG'
export default function Header(){
   const navRef = useRef();

   const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
   }
  return(
    <header>
      <img src={Logo} alt="LOgo" />
    <nav>
    <a href="#">Social Network</a>
    <a href="#">Home</a>
    <a href="#">Drug Database</a>
    <a href="#">Medical Calculator</a>
    <a href="#">Articles</a>
    <a href="#">News</a>
    <a href="#">Quezzes</a>
    <a href="#">Surveys</a>
    <a href="#">Drug Interaction</a>
    <a href="#">Diseases Database</a>
    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
      <FaTimes/>
    </button>
       
    </nav>
    <button className='nav-btn' onClick={showNavbar}>
      <FaBars size={28}/>
    </button>
    </header>
  )
}