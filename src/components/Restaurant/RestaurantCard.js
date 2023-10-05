const RestaurantCard = (props) => {
    const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo
    } = props?.resData?.info
    
    const imageSrc = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`

    return (
        <div className="card">
            <img className="cusine_logo" width="250px" height="200px" alt="cusine logo" src={imageSrc}/>
            <h3>{name}</h3>
            <h5>{cuisines?.join(",")}</h5>
            <h5>{avgRatingString}</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}

export default RestaurantCard