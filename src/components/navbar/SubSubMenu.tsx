import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { isObject } from '../../utils';
import { Link } from 'react-router-dom';

const SubSubMenu = ({
  itemKey,
  value,
}: {
  itemKey: TNumberOrString;
  value: TStringOrObject;
}) => {
  const itemLabel = (isObject(value) ? itemKey : value) as string;

  return (
    <li className="nav-item dropend" key={uuidv4()}>
      <Link
        to={`/${itemKey}`}
        className="nav-link dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {itemLabel}
      </Link>

      <ul className="dropdown-menu">
        {Object.entries(value).map(([key, val]) =>
          isObject(val) ? (
            <SubSubMenu key={uuidv4()} itemKey={key} value={val} />
          ) : (
            <li key={uuidv4()}>
              <Link to={`/${val}`} className="dropdown-item">
                {val as string}
              </Link>
            </li>
          )
        )}
      </ul>
    </li>
  );
};

export default SubSubMenu;
