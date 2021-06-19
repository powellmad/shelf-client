import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { CategoryContext } from "./CategoryProvider"

export const CategoryDetail = () => {
    const { getCategoryById } = useContext(CategoryContext)
    const [ categories, setCategories ] = useState([])
    const { categoryId } = useParams()

    // console.log(categoryId)
    // console.log(categories)

    useEffect(() => {
        getCategoryById(categoryId)
            .then((response) => {
                setCategories(response)
            })
    }, [])

    /* Following lines work on initial render then break on refresh
    Error: shops and products undefined 
    Getting 200 ok response - no backend errors

    const shops = categories?.shop_set
    // console.log(shops[0].products)
    const products = shops[0].products
    // console.log(products) */


    return (
        <section className="category__products">
            <h1>{categories.label}</h1>
            {/* <div>
                {shops.map(shop => {
                    return <p>{shop?.name}</p>
                })} 
            </div>*/}
        </section>
    )

}