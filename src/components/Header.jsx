import { useState, useEffect } from 'react';
import './header.css';
import { NavLink, useLocation } from 'react-router-dom';
import { links } from '../data/links';
import { useContext } from 'react'
import { ProductContext } from '../context/dataContext'
import Icon from './parts/Icon';


const Header = () => {
  const { productSummaries, handleShowCalc, closeCalc } = useContext(ProductContext);

  //Navbar
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = () => {
    if (window.innerWidth <= 750) {
      setShowNavbar(false);
    }
  };

  // Header color
  const [color, setColor] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/services') {
      setColor(false);

    } else {
      setColor(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (!color) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [color]);

  return (
    <header className={`header ${color ? 'header--dark' : 'header--transparent'} ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <div className="header__logo">
          <span>Drevo</span>
          <span> a </span>
          <span>Sluzby</span>
        </div>
        <nav className="navigation">
          <ul className={`navigation__menuItems ${showNavbar ? 'navigation__menuItems--show' : ''}`}>
            {links.filter(link => link.navlink).map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) => `menuItem ${isActive ? "menuItem--active" : ""}`}
                    to={link.url}
                
                    onClick={() => { closeNavbar(); closeCalc(); }}
                  >
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>

        </nav>
        <div className="header__icons">
          <div className={`icon icon-kosik ${productSummaries.length > 0 ? 'icon-kosik--view' : ''}`} onClick={handleShowCalc}>
            <Icon icon="Shop" />
            <span className='shop-count'>{productSummaries.length}</span>
          </div>
          <a href="https://www.facebook.com/jakub.keklak?locale=sk_SK" target='blank' className="icon">

            <Icon icon="Facebook" />
          </a>
          <a href="https://www.facebook.com/jakub.keklak?locale=sk_SK" target='blank' className="icon">

            <Icon icon="Instagram" />
          </a>
          <NavLink to="/contact" className="icon" onClick={closeCalc}>
            <Icon icon="Mail" />
          </NavLink>
          <div className="navigation__toggle">
            <div
              className={`navigation__toggleLines ${showNavbar ? 'navigation__toggleLines--close' : ''}`}
              onClick={() => { handleShowNavbar(); }}
            >
              <div className="navigation__toggleLine"></div>
              <div className="navigation__toggleLine"></div>
              <div className="navigation__toggleLine"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;