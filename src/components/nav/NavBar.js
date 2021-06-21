import React from "react"
import '@fontsource/roboto';
import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar';
import "./NavBar.css"
import shelf from "../images/shelf.png"
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const NavBar = () => {

    return (
        <>
            <div className="header">
                <div> </div>
                <NavLink className="navbar__logo" to="/">
                    <img className="navbar__logo" src={shelf} />
                </NavLink>
                <div className="logout">
                    {(localStorage.getItem("shelf_token") !== null) ?
                        <li className="navbar__item navbar__button">
                            <Button variant="default" color="primary"
                                onClick={() => {
                                    localStorage.removeItem("shelf_token")
                                }}>Logout</Button>
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
            </div>

            <AppBar position="sticky">
                <Toolbar className="navbar">
                    <ul className="navbar">
                        <li className="navbar__item">
                            <Typography >
                                <NavLink className="navbar__link" to="/categories">Shop By Category</NavLink>
                            </Typography>
                        </li>
                        <li className="navbar__item">
                            <Typography>
                                <NavLink className="navbar__link" to="/shops"> Browse Shops</NavLink>
                            </Typography>
                        </li>
                        <li className="navbar__item">
                            <Typography>
                                <NavLink className="navbar__link" to="/seller">Become a Seller</NavLink>
                            </Typography>
                        </li>
                    </ul>
                    <ul className="navbar">
                        <li className="navbar__item">
                            <Typography>
                                <NavLink className="navbar__icon" to="/profile">
                                    <AccountCircleIcon />
                                </NavLink>
                            </Typography>
                        </li>
                        <li className="navbar__item">
                            <Typography>
                                <NavLink className="navbar__icon" to="/cart">
                                    <ShoppingCartIcon />
                                </NavLink>
                            </Typography>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </>
    )
}