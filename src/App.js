import { useEffect, useState } from "react"
import Header from "./components/Header"
import RestaurantContainer from "./components/Restaurant/RestaurantContainer"

const App = () => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.492774840521797&lng=78.38635582476854&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        .then(response => {
            return response.json()
        })
        .then(res => {
            const cards = res?.data?.cards

            const restaurants = cards?.filter(cardVal => cardVal?.card?.card?.gridElements?.infoWithStyle.hasOwnProperty('restaurants'))

            let mergeRes = []

            restaurants?.forEach(rest => {
               mergeRes = [...mergeRes, ...rest?.card?.card?.gridElements?.infoWithStyle?.restaurants]
            })

            setRestaurants(mergeRes)
        })
    },[])

    return (
        <div id="app">
            <Header />
            <RestaurantContainer data={restaurants}/>
        </div>
    )
}

export default App