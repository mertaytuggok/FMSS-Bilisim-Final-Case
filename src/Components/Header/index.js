import React from "react";
import styles from "./Header.module.css";
import StarWarsLogo from "../../Asset/StarWars.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to={"/"}>
        <img
          src={StarWarsLogo}
          alt="Star Wars Logo"
          className={styles.HeaderLogo}
        />
      </Link>
    </div>
  );
};

export default Header;
