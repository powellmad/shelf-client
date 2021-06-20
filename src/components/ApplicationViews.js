import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"
import { CategoryDetail } from "./categories/CategoryDetail.js"
import { ShopDetail } from "./shops/ShopDetail.js"
import { ShopProvider } from "./shops/ShopProvider"
import { ShopList } from "./shops/ShopList"
import { ShopForm } from "./shops/ShopForm"
import { NewShop } from "./shops/NewShop"

export const ApplicationViews = () => {
    return (
        <>
            <main style={{
                margin: "5rem 2rem",
                lineHeight: "1.75rem"
            }}>
            </main>

            <Route exact path="/">
                <Home />
            </Route>

            <CategoryProvider>
                <Route exact path="/categories">
                    <CategoryList />
                </Route>

                <Route exact path="/categories/:categoryId(\d+)">
                    <CategoryDetail />
                </Route>
            </CategoryProvider>

            <ShopProvider>
                <CategoryProvider>
                    <Route exact path="/shops">
                        <ShopList />
                    </Route>

                    <Route exact path="/shops/:shopId(\d+)">
                        <ShopDetail />
                    </Route>

                    <Route exact path="/seller">
                        <NewShop />
                    </Route>

                    <Route exact path="/shops/create">
                        <ShopForm />
                    </Route>
                </CategoryProvider>
            </ShopProvider>
        </>
    )
}
