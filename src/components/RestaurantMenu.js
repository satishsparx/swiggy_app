import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {    
    const [resMenu, setResMenu] = useState()
    const {resId} = useParams()

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5235373&lng=78.2789365&restaurantId="+resId)
        const finalMenu = await data.json()
        setResMenu(finalMenu)
    }

    useEffect(()=>{
        fetchMenu()
    },[]) 

    console.log(resMenu)

    if(resMenu === undefined) return <Shimmer />

    const {name, cuisines} = resMenu?.data?.cards[0]?.card?.card?.info

    const categories = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(cat => cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(categories)

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