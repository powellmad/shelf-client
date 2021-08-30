import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { CategoryContext } from "./CategoryProvider"
import { CategoryCard } from "./CategoryCard"
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

            <div className="category__cards">
                {categories.map(category => {
                    return <Typography variant="h5" component="h2" key={category.id} className="category__label lb">
                                <Link to={`/categories/${category.id}`}>
                                    <CategoryCard className="category_card" key={category.id} category={category} />
                                </Link>
                        </Typography>
                })}
            </div>
        </div>
    )
}