import { useSelector } from "react-redux";
import { Login } from "../Features/userAuth/Login";

export const PrivateRoute = ({children}) => {

    const isAuth = useSelector(state => state.authState.role);

    return isAuth ? children : <Login />

}