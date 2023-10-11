import { CARD_URL } from "../../utils/constants" 

const RestaurantCard = (props) => {
    const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo
    } = props?.resData?.info
    
    const imageSrc = `${CARD_URL}${cloudinaryImageId}`

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-blue-200">
            <img className="rounded-sm" alt="cusine logo" src={imageSrc}/>
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines?.join(",")}</h4>
            <h3>{avgRatingString}</h3>
            <h4>{costForTwo}</h4>
        </div>
    )
}

// Higher order function which takes Component as argument 
// and return another component
export const withVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute bg-green-500 text-white m-2 p-2 rounded-lg">Veg</label>
                <RestaurantCard {...props} />
            </>
        )
    }
}

export default RestaurantCard