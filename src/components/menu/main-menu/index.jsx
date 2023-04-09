import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import clsx from "clsx";
import SubMenu from "./submenu";
import MegaMenu from "./megamenu";
import { Link } from "react-scroll";

const MainMenu = ({ menu }) => (
  <ul className="mainmenu">
    {menu.map((nav) => (
      <li
        key={nav.id}
        className={clsx(
          !!nav.submenu && "has-droupdown has-menu-child-item",
          !!nav.megamenu && "with-megamenu"
        )}
      >
        <Link to={nav.path} smooth={true} duration={1000}>
          <p
            style={{ cursor: "pointer" }}
            
          >
            {nav.text}
          </p>
        </Link>

        {nav?.submenu && <SubMenu menu={nav.submenu} />}
        {nav?.megamenu && <MegaMenu menu={nav.megamenu} />}
      </li>
    ))}
  </ul>
);

MainMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MainMenu;
