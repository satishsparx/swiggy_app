import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "../Shimmer"

const RestaurantContainer = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filterRes, setFilterRes] = useState([]) 
    const [searchText, setSearchText] = useState("")

    const fetchData = async() => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.492774840521797&lng=78.38635582476854&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const resData = await data.json()
        const cards = resData?.data?.cards
        const restaurants = cards?.filter(cardVal => cardVal?.card?.card?.gridElements?.infoWithStyle.hasOwnProperty('restaurants'))
        let mergeRes = []
        restaurants?.forEach(rest => {
            mergeRes = [...mergeRes, ...rest?.card?.card?.gridElements?.infoWithStyle?.restaurants]
        })

        setRestaurants(mergeRes)
        setFilterRes(mergeRes)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="res_container">
            <div className="filter-container">
                <div className="search_res">
                    <input type="search" placeholder="Search restaurants" onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {
                       const searchResults = restaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilterRes(searchResults)
                    }}>Search</button>
                </div>
                <div className="filter-search">
                    <button className="filter-btn" onClick={() => {
                        const filteredRestaurants = restaurants.filter((res)=> res.info.avgRating >= 4.5)
                        setFilterRes(filteredRestaurants)
                    }}>Top rated restaurants</button>

                </div>
            </div>
        

            {restaurants.length === 0? (<Shimmer />): (            
            <div className="res_card">
                {filterRes?.map(res => {
                    return <RestaurantCard resData={res}/>
                })}
            </div>)}
        </div>
    )
}

export default RestaurantContainer