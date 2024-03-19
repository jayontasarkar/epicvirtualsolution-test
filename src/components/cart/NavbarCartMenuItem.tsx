import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../icons/ShoppingCartIcon';
import { useAppSelector } from '../../hooks';
import { countProductsOnCart } from '../../store/slices/cartSlice';

const NavbarCartMenuItem = () => {
  const count = useAppSelector(countProductsOnCart) as number;

  return (
    <li className="nav-item">
      <Link className="nav-link" to="/cart">
        <ShoppingCartIcon /> Cart ({count})
      </Link>
    </li>
  );
};

export default NavbarCartMenuItem;
