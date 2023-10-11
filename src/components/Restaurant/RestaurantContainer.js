import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { CDN_URL } from "../../utils/constants" 
import RestaurantCard, { withVegLabel } from "./RestaurantCard"
import Shimmer from "../Shimmer"

const RestaurantContainer = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filterRes, setFilterRes] = useState([]) 
    const [searchText, setSearchText] = useState("") 

    const VegRestaurantCard = withVegLabel(RestaurantCard)

    const fetchData = async() => {
        const data = await fetch(CDN_URL)
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
            <div className="flex items-center">
                <div className="m-4 p-4">
                    <input type="search" placeholder="Search" onChange={(e) => {
                        setSearchText(e.target.value)
                    }} className="border border-solid border-black"/>
                    <button className="px-4 m-4 rounded-sm bg-blue-200" onClick={() => {
                       const searchResults = restaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilterRes(searchResults)
                    }}>Search</button>
                </div>
                <div className="px-4 rounded-sm bg-blue-200">
                    <button className="filter-btn" onClick={() => {
                        const filteredRestaurants = restaurants.filter((res)=> res.info.avgRating >= 4.5)
                        setFilterRes(filteredRestaurants)
                    }}>Top rated restaurants</button>

                </div>
            </div>
        

            {restaurants.length === 0? (<Shimmer />): (            
            <div className="flex flex-wrap">
                {filterRes?.map(res => {
                    return (<Link to={`/resmenu/${res.info.id}`}>
                        {res?.info?.veg ? (<VegRestaurantCard resData={res}/>):
                        (<RestaurantCard resData={res}/>)
                        }
                        </Link>)
                })}
            </div>)}
        </div>
    )
}

export default RestaurantContainer