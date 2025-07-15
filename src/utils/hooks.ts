import { useState } from "react"
import { useMediaQuery } from "hooks-ts"

export const useToggle = () => {
    const [isBurger, setIsBurger] = useState<boolean>(false)

    const openBurger = ():void => setIsBurger(true)
    const closeBurger = ():void => setIsBurger(false)
    const toggleBurger = ():void => setIsBurger(!isBurger)

    return {openBurger, closeBurger, isBurger, toggleBurger}
}


export const useScreenSize = () => {
const isDesktop = useMediaQuery("(min-width:1280px)")
const isTablet = useMediaQuery("(min-width: 768px)")

return {isDesktop, isTablet}
}