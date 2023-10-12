import ItemList from "./ItemList"
import { useState } from "react"

const RestaurantCategory = ({data}) => {
    const [openAccordion, setOpenAccordion] = useState(false)
    return (
        <div className="bg-gray-50 w-6/12 mx-auto my-4 shadow-lg p-4">
            <div className="flex justify-between" >
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span onClick={() => {setOpenAccordion(!openAccordion)}}>Open</span>
            </div>

           { openAccordion && <ItemList items={data.itemCards}/>}
            
        </div>
    )
}

export default RestaurantCategory