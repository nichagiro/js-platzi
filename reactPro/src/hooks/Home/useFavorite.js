import { useCallback, useState } from 'react'

const useFavorite = () => {
    const [favorite, setFavorite] = useState([])

    const setFavoritePerson = useCallback(
        (personaje) => {
            if (exist(personaje)) {
                setFavorite(favorite.filter(fav => fav.id !== personaje.id));
            } else {
                setFavorite([
                    ...favorite,
                    personaje
                ]);
            }
        }, [favorite]
    )

    const exist = useCallback(
        (personaje) => {
            return favorite.find(fav => personaje.id === fav.id)
        },
        [favorite]
    )

    return { favorite, setFavoritePerson }
}

export default useFavorite