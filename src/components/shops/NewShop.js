import React from "react"
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'
import image from "../images/seller.jpg"
import "./Shop.css"

export const NewShop = () => {
    const history = useHistory()

    return (
        <div className="new-shop">
            <div className="shop-header-text">
                <h1>Add Your Business to SHELF</h1>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed arcu dolor. Sed hendrerit fringilla porttitor. Aliquam dignissim ex auctor leo volutpat, id vestibulum mi posuere. Aenean pretium feugiat purus, bibendum dictum purus consequat aliquet. Cras lorem odio, tristique porta dolor ut, auctor euismod magna. Donec tincidunt pharetra ipsum vitae ultrices. Vestibulum faucibus at leo a cursus. Duis sagittis neque sagittis, venenatis metus eu, rutrum sem. Quisque sit amet ultricies nulla. Quisque sagittis metus arcu, sit amet efficitur mauris rutrum ut.</p>
                <Button variant="contained" color="primary" size="large" onClick={() => history.push("/shops/create")}>
                    Create Shop
                </Button>
            </div>
            <img className="shop-header-image" src={image} alt="stock image of a shop owner shipping a package" />
        </div>
    )
}