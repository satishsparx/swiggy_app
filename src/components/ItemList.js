import { CARD_URL } from "../utils/constants" 
import { useDispatch } from 'react-redux'
import { addItems } from "../utils/store/cartSlice"

const ItemList = ({items}) => {

    const dispatch = useDispatch()

    const handleClick = (item) => {
        dispatch(addItems(item))
    }

    return (
        <div>
            {
                items.map(item => (
                    <div className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">
                        <div className="w-3/12">
                            <button className="p-2 mx-14 rounded-lg bg-black text-white shadow-lg absolute" onClick={() => handleClick(item)}>Add+</button>
                            <img src={CARD_URL+ item.card.info.imageId} className="rounded-2xl"/>
                        </div>
                        <div className="w-9/12 ml-3">
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span className="px-6">{item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>    
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList