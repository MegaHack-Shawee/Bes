import React from 'react';

import {FavoritePlaces} from './useFavorites';

const ContextProvider = ({children}) => {
    return <FavoritePlaces>{children}</FavoritePlaces>;
};

export default ContextProvider;
