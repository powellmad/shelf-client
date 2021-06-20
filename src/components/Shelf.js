import React from "react"
import { Route, Redirect, useHistory } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import Button from '@material-ui/core/Button';


export const Shelf = () => {
const history = useHistory()

return (
    <>
        <Route render={() => {
            if (localStorage.getItem("shelf_token")) {
                return <>
                <h1>Welcome to Shelf!</h1>


                {(localStorage.getItem("shelf_token") !== null) ?
                        <Button variant="contained" color="primary"
                            onClick={() => {
                                localStorage.removeItem("shelf_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</Button> : <></>
            
                /* <Route render={NavBar} />
                   <Route render={props => <ApplicationViews {...props} />} /> */}
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
)
}