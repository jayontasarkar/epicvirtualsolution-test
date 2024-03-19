import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './navbar.scss';
import { capitalize, isObject } from '../../utils';
import { APP_NAME } from '../../constants';
import SubMenu from './SubMenu';
import ShoppingCartIcon from '../icons/ShoppingCartIcon';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import NavbarCartMenuItem from '../cart/NavbarCartMenuItem';

const Navbar = () => {
  const menuItems = useAppSelector((state) => state.menus.data) as TNavMenu;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {APP_NAME}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="mb-2 navbar-nav me-auto mb-lg-0">
            {Object.keys(menuItems).length &&
              Object.entries(menuItems).map(([objKey, objVal]) =>
                isObject(objVal) ? (
                  <li className="nav-item dropdown" key={uuidv4()}>
                    <Link
                      to={`/${objKey}`}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="nav-link dropdown-toggle"
                    >
                      {objKey}
                    </Link>
                    <SubMenu key={uuidv4()} subMenuItem={objVal} />
                  </li>
                ) : (
                  <li className="nav-item" key={uuidv4()}>
                    <Link to={`/${objVal}`} className="nav-link">
                      {capitalize(objVal)}
                    </Link>
                  </li>
                )
              )}
          </ul>
          <ul className="navbar-nav">
            <NavbarCartMenuItem />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
