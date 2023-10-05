import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "../Shimmer"

const RestaurantContainer = (props) => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(props.data)
    
    useState(()=> {
        setFilteredRestaurants(props.data)
    },[props.data])
    return (
        <div className="res_container">

            <div className="filter-search">
                <div className="search_container">
                    <label>Search</label>
                    <input type="search" />
                </div>

                <div className="filter-res">
                    <button className="filter-btn" onClick={() => {
                        
                        const filterRes = filteredRestaurants?.filter(res => res.info.avgRating > 4.5)
                        console.log(filteredRestaurants)
                        setFilteredRestaurants(filterRes)
                    }}>Top rated restaurants</button>
                </div>
            </div>
        

            {props.data.length === 0? (<Shimmer />): (            
            <div className="res_card">
                {props.data?.map(res => {
                    return <RestaurantCard resData={res}/>
                })}
            </div>)}
        </div>
    )
}

export default RestaurantContainer