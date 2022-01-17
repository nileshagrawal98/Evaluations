import {createStore, combineReducers} from 'redux';
import { reducer as CompanyReducer } from '../CompanySide/reducer';
import { reducer as ClientReducer } from '../ClientSide/reducer';
import { reducer as AuthReducer } from '../userAuth/reducer';


const rootReducer = combineReducers({
    companyState: CompanyReducer, 
    clientState: ClientReducer,
    authState: AuthReducer
});

export const store = createStore(rootReducer);