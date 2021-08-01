import { useState } from 'react';

import menuIcon from '../assets/menu.png';
import closeIcon from '../assets/close.png';

import '../styles/navbar.scss';

export function Navbar() {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className={menu ? "navbar mobile" : "navbar"}>
      <div className="nav-interactions">
        <h2 className="title">Quadros</h2>
        
        <img 
          className="mobile nav-icon" 
          src={menu ? closeIcon : menuIcon } alt="Navbar icon" 
          onClick={handleMenu}
        />
      </div>

      <ul className="link-container">
        <li className="nav-link">Novos lançamentos</li>
        <li className="nav-link">Sobre nós</li>
        <li className="nav-link">Ajuda</li>
      </ul>
    </div>
  );
}