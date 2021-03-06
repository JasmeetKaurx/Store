import React from "react";
import styles from "../CSS/Header.module.css";
import PetsIcon from "@material-ui/icons/PetsRounded";
import ShoppingCartIcon from "@material-ui/icons/AddShoppingCartOutlined";
import IconStyles from "../CSS/IconStyle";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "../misc/custom-hooks";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = IconStyles();
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={styles.header}>
      {isMobile && <Sidebar />}
      <div className={styles.logo}>
        <PetsIcon className={classes.IconStyles} />
        <p>PetStore</p>
      </div>
      <div className={styles.cartContainer}>
        <Link to="/checkout" className={styles.link}>
          <ShoppingCartIcon className={classes.cartIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
