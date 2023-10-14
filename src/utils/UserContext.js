import { createContext } from 'react'

const UserContext = createContext({
    loggedInUser: "Swiggyuser1",
    country: "India"
})

export default UserContext