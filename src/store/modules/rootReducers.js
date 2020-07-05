import {combineReducers} from 'redux';

import Order from './Order/reducer';
import CurrentPlace from './CurrentPlace/reducer';
import CurrentMenu from './CurrentMenu/reducer';
import Cashbes from './CashBes/reducer';

export default combineReducers({
    Order,
    CurrentPlace,
    CurrentMenu,
    Cashbes,
});
