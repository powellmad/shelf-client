import React from "react"
import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button'
import "./NavBar.css"

export const NavBar = () => {

    return (
        <>
            <div className="header">
                <ul className="navbar">
                    <li className="logo">
                    <NavLink className="navbar__link" to="/">
                        <img className="navbar__logo" src={""} />
                        <h2 className="shelf__title">Shelf</h2>
                    </NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to="/categories">Categories</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to="/shops">Shops</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to="/seller">Become a Seller</NavLink>
                    </li>
                    {/* <li className="navbar__item">
                        <NavLink className="navbar__link" to="/profile">Profile</NavLink>
                    </li> */}
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to="/cart">Shopping Cart</NavLink>
                    </li>
                    <div className="navbar__item">
                        {
                            (localStorage.getItem("shelf_token") !== null) ?
                                <li className="navbar__item">
                                    <Button variant="contained" color="primary"
                                        onClick={() => {
                                            localStorage.removeItem("shelf_token")
                                        }}
                                    >Logout</Button>
                                </li> :
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/register">Register</NavLink>
                                    </li>
                                </>
                        }
                    </div>
                </ul>
            </div>
        </>
    )
}
