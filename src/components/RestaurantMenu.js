import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { MENU_URL } from "../utils/constants" 
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () => {    
    const {resId} = useParams()

    const resMenu = useRestaurantMenu(resId)

    if(resMenu === undefined) return <Shimmer />
    
    const {name, cuisines} = resMenu?.data?.cards[0]?.card?.card?.info
    const categories = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(cat => cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log("##########")
    console.log(categories)

    return (
        <div className="text-center">
            <h1 className="my-4 font-bold text-2xl">{name}</h1>
            <h2 className="font-bold">{cuisines.join(",")}</h2>
            {
                categories.map((category, index) => (
                    <RestaurantCategory data={category.card.card}/>
                ))
            }
        </div>
    )
}

export default RestaurantMenu