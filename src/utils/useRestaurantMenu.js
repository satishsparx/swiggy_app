import {useState, useEffect} from 'react'
import { MENU_URL } from './constants'

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState()

    const fetchMenu = async() => {
        const data = await fetch(MENU_URL+resId)
        const finalMenu = await data.json()
        setResMenu(finalMenu)
    }

    useEffect(()=>{
        fetchMenu()
    },[]) 

    return resMenu
}

export default useRestaurantMenu