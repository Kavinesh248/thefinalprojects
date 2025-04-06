import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon, label, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `list ${isActive ? "listActive" : ""}`}
    >
      <ion-icon name={icon}></ion-icon>
      <span>{label}</span>
    </NavLink>
  );
};

export default NavItem;
