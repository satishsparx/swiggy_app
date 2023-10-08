import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { MENU_URL } from "../utils/constants" 
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {    
    const {resId} = useParams()

    const resMenu = useRestaurantMenu(resId)

    if(resMenu === undefined) return <Shimmer />
    
    const {name, cuisines} = resMenu?.data?.cards[0]?.card?.card?.info
    const categories = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(cat => cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (<div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(",")}</h3>
       
        <ul>
        {categories?.[0]?.card?.card?.itemCards?.map(cat => {
            return (
                <li>{cat?.card?.info?.name} - Rs. {cat?.card?.info?.price/100}</li>
            )
        })
         }
        </ul>
    </div>)
}

export default RestaurantMenu