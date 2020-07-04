import React, {
    createContext,
    useState,
    useCallback,
    useContext,
    useEffect,
} from 'react';
import {AsyncStorage} from 'react-native';

const FavoritePlacesProvider = createContext({});

const FavoritePlaces = ({children}) => {
    const [favoritePlaces, setFavoritePlaces] = useState([]);

    useEffect(() => {
        async function loadStoragedData() {
            const places = await AsyncStorage.getItem('@Ambev:places');

            if (places) {
                setFavoritePlaces(places);
            }
        }
        loadStoragedData();
    }, []);

    useEffect(() => {
        console.log(favoritePlaces);
    }, [favoritePlaces]);

    const addToFavorites = useCallback(
        async place => {
            setFavoritePlaces([...favoritePlaces, place]);

            await AsyncStorage.setItem(
                '@Ambev:places',
                JSON.stringify(favoritePlaces),
            );
        },
        [favoritePlaces],
    );

    const removeToFavorites = useCallback(
        async id => {
            const newFavoritePlaces = favoritePlaces.filter(
                item => item.id !== id,
            );
            setFavoritePlaces(newFavoritePlaces);

            await AsyncStorage.setItem(
                '@Ambev:places',
                JSON.stringify(newFavoritePlaces),
            );
        },
        [favoritePlaces],
    );

    const clearFavorites = useCallback(async () => {
        await AsyncStorage.removeItem('@Ambev:places');
        setFavoritePlaces([]);
    }, []);

    return (
        <FavoritePlacesProvider.Provider
            value={{
                favoritePlaces,
                addToFavorites,
                removeToFavorites,
                clearFavorites,
            }}>
            {children}
        </FavoritePlacesProvider.Provider>
    );
};

const useFavorites = () => {
    const context = useContext(FavoritePlacesProvider);

    return context;
};

export {useFavorites, FavoritePlaces};
