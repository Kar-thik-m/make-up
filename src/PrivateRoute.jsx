import { Navigate } from "react-router-dom";


const PrivateRoute = ({element}) => {
 if(localStorage.getItem('users')&&JSON.parse(localStorage.getItem('users'))){
    return element;
 }
 return <Navigate to={'/items/login'} replace/>
}

export default PrivateRoute