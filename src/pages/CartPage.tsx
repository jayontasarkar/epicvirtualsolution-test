import React from 'react';
import { useAppSelector } from '../hooks';
import Alert from '../components/ui/Alert';
import CartTable from '../components/cart/CartTable';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.data);

  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        {cartItems.length ? (
          <CartTable cartItems={cartItems} />
        ) : (
          <Alert type="danger">
            No item added into cart.
            <Link to="/Mobile" className="mx-2">
              Continue shopping
            </Link>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default CartPage;
