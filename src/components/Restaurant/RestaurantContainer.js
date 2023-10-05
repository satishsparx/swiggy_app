import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "../Shimmer"

const RestaurantContainer = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")

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
            setFilteredRestaurants(mergeRes)
        })
    },[])

    console.log("Hello world")
    console.log(typeof searchText)

    return (
        <div className="res_container">
            <div className="filter-search">
                <div className="search_container">
                    <input type="search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=> {
                        const filteredRestaurants = restaurants.filter((res=> res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                        setFilteredRestaurants(filteredRestaurants)
                   }}>Search</button>
                </div>

                <div className="filter-res">
                    <button className="filter-btn" onClick={() => {
                        const filterRes = restaurants?.filter(res => res.info.avgRating > 4.5)
                        setRestaurants(filterRes)
                    }}>Top rated restaurants</button>
                </div>
            </div>
        

            {restaurants.length === 0? (<Shimmer />): (            
            <div className="res_card">
                {filteredRestaurants?.map(res => {
                    return <RestaurantCard resData={res}/>
                })}
            </div>)}
        </div>
    )
}

export default RestaurantContainer