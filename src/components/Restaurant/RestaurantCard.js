import { CARD_URL } from "../../utils/constants" 
const RestaurantCard = (props) => {
    
    const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo
    } = props?.resData?.info
    
    const imageSrc = `${CARD_URL}${cloudinaryImageId}`

    return (
        <div className="card">
            <img className="cusine_logo" alt="cusine logo" src={imageSrc}/>
            <h3>{name}</h3>
            <h4>{cuisines?.join(",")}</h4>
            <h3>{avgRatingString}</h3>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard