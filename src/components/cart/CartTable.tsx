import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  addItemIntoCart,
  removeItemFromCart,
  subtractCartItemQuantity,
  totalAmountOnCart,
} from '../../store/slices/cartSlice';
import './CartTable.scss';
import Button from '../ui/Button';
import TrashIcon from '../icons/TrashIcon';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartTable = ({ cartItems }: { cartItems: TCartProduct[] }) => {
  const dispatch = useAppDispatch();
  const totalAmount = useAppSelector(totalAmountOnCart);

  const handleOnRemove = (item: TCartProduct) => {
    dispatch(removeItemFromCart(item));
    toast.success('Product removed from cart.');
  };

  const handleOnIncrement = (item: TCartProduct) => {
    dispatch(
      addItemIntoCart({
        ...item,
        Quantity: 1,
      })
    );
  };

  const handleOnDecrement = (item: TCartProduct) => {
    if (item.Quantity > 1) {
      dispatch(
        subtractCartItemQuantity({
          ...item,
          Quantity: 1,
        })
      );
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Shopping Cart</h2>
      </div>
      <div className="card-body">
        <div className="table-responsive mb-4">
          <table className="table table-bordered m-0">
            <thead>
              <tr>
                <th
                  className="text-center py-3 px-4"
                  style={{ minWidth: '300px' }}
                >
                  Product Name &amp; Details
                </th>
                <th className="text-right py-3 px-4" style={{ width: '150px' }}>
                  Unit Price
                </th>
                <th
                  className="text-center py-3 px-4"
                  style={{ width: '120px' }}
                >
                  Quantity
                </th>
                <th className="text-right py-3 px-4" style={{ width: '100px' }}>
                  Total
                </th>
                <th
                  className="text-center align-middle py-3 px-0"
                  style={{ width: '60px' }}
                >
                  <a
                    href="#"
                    className="shop-tooltip float-none text-light"
                    title=""
                    data-original-title="Clear cart"
                  >
                    <i className="ino ion-md-trash"></i>
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.Title}>
                  <td className="p-3">
                    <div className="media d-flex gap-3 align-items-center">
                      <img
                        src={item.Image}
                        className="d-block w-80 rounded ui-bordered mr-4"
                        alt={item.Title}
                      />
                      <div className="media-body">
                        <h6 className="d-block text-dark">{item.Title}</h6>
                        <small>
                          <span className="text-muted">
                            Released on {item.Year}
                          </span>
                        </small>
                      </div>
                    </div>
                  </td>
                  <td className="text-right font-weight-semibold align-middle p-3">
                    ${item.Price}
                  </td>
                  <td className="align-middle p-3">
                    <span
                      className={`${
                        item.Quantity > 1
                          ? 'cursor-pointer'
                          : 'cursor-not-allowed'
                      }`}
                      onClick={() => handleOnDecrement(item)}
                    >
                      -
                    </span>
                    <span className="px-3 py-1 border rounded mx-2">
                      {item.Quantity}
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={() => handleOnIncrement(item)}
                    >
                      +
                    </span>
                  </td>
                  <td className="text-right font-weight-semibold align-middle p-3">
                    ${parseFloat(item.Price) * item.Quantity}
                  </td>
                  <td className="text-center align-middle px-0">
                    <Button
                      onClick={() => handleOnRemove(item)}
                      size="small"
                      variant="danger"
                    >
                      <TrashIcon />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={3} className="text-end p-3">
                  Total Amount
                </th>
                <th className="p-3">${totalAmount}</th>
                <th className="p-3"></th>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="d-flex justify-content-between">
          <Link
            to="/Mobile"
            className="btn btn-lg btn-link md-btn-flat mt-2 mr-3"
          >
            Continue shopping
          </Link>
          <Button variant="primary" size="large">
            Checkout ${totalAmount}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
