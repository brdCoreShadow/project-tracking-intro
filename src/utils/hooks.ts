import { useState } from "react"

export const useToggle = () => {
    const [isBurger, setIsBurger] = useState<boolean>(false)

    const openBurger = ():void => setIsBurger(true)
    const closeBurger = ():void => setIsBurger(false)
    const toggleBurger = ():void => setIsBurger(!isBurger)

    return {openBurger, closeBurger, isBurger, toggleBurger}
}