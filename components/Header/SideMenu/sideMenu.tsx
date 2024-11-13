import Link from "next/link";
import {
  menu,
  menuBackground,
  menuBackgroundVisible,
  sideMenu,
  sideMenuHidden,
  sideMenuItem,
  sideMenuLink,
} from "~/components/Header/SideMenu/sideMenu.css";

type SideMenuProps = {
  isOpen: boolean;
};

export const SideMenu = ({ isOpen }: SideMenuProps): JSX.Element => {
  return (
    <div className={menu}>
      <div
        className={`${menuBackground} ${isOpen ? menuBackgroundVisible : ""}`}
      />
      <ul className={`${sideMenu} ${!isOpen ? sideMenuHidden : ""}`}>
        <li className={sideMenuItem}>
          <Link className={sideMenuLink} href="/">
            Home
          </Link>
        </li>
        <li className={sideMenuItem}>
          <Link className={sideMenuLink} href="/bookmarks">
            BookMark
          </Link>
        </li>
        <li className={sideMenuItem}>
          <Link className={sideMenuLink} href="/settings">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};
