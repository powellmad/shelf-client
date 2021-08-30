import React from "react"
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button'
import "./Auth.css"

export const Profile = () => {

    const currentUser = localStorage.getItem("shelf_token")
    console.log(currentUser)
        
    return (
        <main style={{ textAlign: "center" }}>

            <div className="profile">
                <h1 className="h3 mb-3 font-weight-normal">User Information</h1>
                <div>First Name: {currentUser.firstName}</div>
                <div>Last Name: {currentUser.lastName}</div>
        </main>
    )
}
