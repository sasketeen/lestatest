import logoImage from "@/images/free-icon-game-boy-4902572.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <img
        src={logoImage}
        alt="Логотип в виде игровой приставки с надписью Games"
        className="header__logo"
      />
      <nav className="header__navigation">
        <NavLink
          to="lestatest/"
          className={({ isActive }) =>
            isActive
              ? "link header__navlink header__navlink_active"
              : "link header__navlink"
          }
        >
          Ответы
        </NavLink>
        <NavLink
          to="lestatest/game"
          className={({ isActive }) =>
            isActive
              ? "link header__navlink header__navlink_active"
              : "link header__navlink"
          }
        >
          Игра
        </NavLink>
      </nav>
    </header>
  );
}
