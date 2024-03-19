import { v4 as uuidv4 } from 'uuid';
import { capitalize, isObject } from '../../utils';
import SubSubMenu from './SubSubMenu';
import { Link } from 'react-router-dom';

const SubMenu = ({ subMenuItem }: { subMenuItem: TStringOrObject }) => {
  return (
    <ul className="dropdown-menu">
      {Object.entries(subMenuItem).map(
        ([key, val]: [key: string, val: TStringOrObject]) =>
          !isObject(val) ? (
            <li key={uuidv4()}>
              <Link to={`/${val}`} className="dropdown-item">
                {val as string}
              </Link>
            </li>
          ) : (
            <SubSubMenu key={uuidv4()} itemKey={key} value={val} />
          )
      )}
    </ul>
  );
};

export default SubMenu;
