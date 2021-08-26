import React from 'react'
import GroceryImage from '../../assets/groceryheader.jfif'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
    return (
        <>
         <header className={classes.header}>
             <h1>GroceryStop<span>.</span></h1>
             <HeaderCartButton onClick={props.onShowCart} />
         </header>
         <div className={classes.mainimage}>
             <img src={GroceryImage} alt="Header Image" />
         </div>
        </>
    )
}

export default Header
