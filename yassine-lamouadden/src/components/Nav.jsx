import React from "react";

const Nav = () => {
  const handleMenuClick = (item) => {
    alert(`Vous avez cliqué sur : ${item}`);
  };
  return (
    <nav className="menu">
      <ul>
        <li onClick={() => handleMenuClick("Notes")}>Notes</li>
        <li onClick={() => handleMenuClick("Etudiants")}>Etudiants</li>
        <li onClick={() => handleMenuClick("Matières")}>Matières</li>
        <li onClick={() => handleMenuClick("A propos")}>A propos</li>
      </ul>
    </nav>
  );
};

export default Nav;
