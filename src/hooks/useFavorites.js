import React, {
    createContext,
    useState,
    useCallback,
    useContext,
    useEffect,
} from 'react';

const FavoritePlacesProvider = createContext({});

const FavoritePlaces = ({children}) => {
    const [favoritePlaces, setFavoritePlaces] = useState([]);

    useEffect(() => {
        console.log(favoritePlaces);
    }, [favoritePlaces]);

    const addToFavorites = useCallback(
        id => {
            const ifAlreadyExist = favoritePlaces.find(
                item => String(item) === String(id),
            );

            if (ifAlreadyExist) {
                removeToFavorites(id);
                return;
            }

            setFavoritePlaces([...favoritePlaces, id]);
        },
        [favoritePlaces, removeToFavorites],
    );

    const removeToFavorites = useCallback(
        id => {
            const newFavoritePlaces = favoritePlaces.filter(
                item => String(item) !== String(id),
            );
            setFavoritePlaces(newFavoritePlaces);
        },
        [favoritePlaces],
    );

    return (
        <FavoritePlacesProvider.Provider
            value={{
                favoritePlaces,
                addToFavorites,
                removeToFavorites,
            }}>
            {children}
        </FavoritePlacesProvider.Provider>
    );
};

const useFavorites = () => {
    return useContext(FavoritePlacesProvider);
};

export {useFavorites, FavoritePlaces};
