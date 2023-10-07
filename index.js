import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Error from './src/components/Error'
import RestaurantContainer from './src/components/Restaurant/RestaurantContainer'
import {createBrowserRouter,  RouterProvider, Outlet} from "react-router-dom"
import './src/App.css'
import RestaurantMenu from './src/components/RestaurantMenu'

const App = () => {
    return (
        <div id="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRoutes =  createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <RestaurantContainer />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: '/resmenu/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
   
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRoutes}/>)




