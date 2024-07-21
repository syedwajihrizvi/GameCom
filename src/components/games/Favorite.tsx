import { useState } from "react"
import { GoHeartFill } from "react-icons/go"

interface Props {
    likeFor: number,
    isActive: boolean,
    onFavoriteClick: (id: number, currentState: boolean) => Promise<number>
}

function FavoriteIcon({likeFor, isActive, onFavoriteClick}: Props) {
    const [active, setActive] = useState<boolean>(isActive)

    const handleSelectingFavorite = async () => {
        setActive(!active)
        const status = await onFavoriteClick(likeFor, active)
        if (status != 200) {
            setActive(!active)
        }
    }

    return (
        <GoHeartFill size={24} color={active?"red":""} cursor="pointer" onClick={handleSelectingFavorite}/>
    )
}

export default FavoriteIcon