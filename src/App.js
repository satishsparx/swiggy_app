import { useEffect, useState } from "react"
import Header from "./components/Header"
import RestaurantContainer from "./components/Restaurant/RestaurantContainer"

const App = () => {
    return (
        <div id="app">
            <Header />
            <RestaurantContainer />
        </div>
    )
}

export default App