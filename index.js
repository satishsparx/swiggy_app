import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Contact from './src/components/Contact'
import Error from './src/components/Error'
import RestaurantContainer from './src/components/Restaurant/RestaurantContainer'
import {createBrowserRouter,  RouterProvider, Outlet} from "react-router-dom"
import './src/App.css'
import RestaurantMenu from './src/components/RestaurantMenu'
import UserContext from './src/utils/UserContext'
import { Provider } from 'react-redux'
import appStore from './src/utils/store/appStore'

const About = lazy(() => import("./src/components/About"))

const App = () => {
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: "Swiggy user", country: "India"}}>
                <div id="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
                element: <Suspense fallback={<h3>Loading...</h3>}>
                            <About />
                        </Suspense>
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




