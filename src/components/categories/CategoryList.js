import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { CategoryContext } from "./CategoryProvider"
import Typography from '@material-ui/core/Typography';
import "./Category.css"

export const CategoryList = () => {
    const { categories, getCategories } = useContext(CategoryContext)

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="category__component">
            <Typography className="categories-header" variant="h3">Categories</Typography>


            <div className="categories">
                {categories.map(category => {
                        return <Typography variant="h5" key={category.id} className="category__label">
                            <Link to={`/categories/${category.id}`}>{ category.label }</Link>
                            </Typography>
                            
                    })
                }
            </div>
        </div>
    )
}