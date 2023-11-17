import React from "react";
import styles from "./Navbar.module.css"
import Logo from "../Logo/Logo"
import Search from "../Search/Search"
import Button from "../Button/Button"

const Navbar=()=>{
    return(
<nav className={styles.navbar}>
   <a href="/">
   <Logo/>
   </a>
    <Search placeholder="search your song of your Choice"/>
    <Button>Give Feedback</Button>
</nav>
    )
}
export default Navbar