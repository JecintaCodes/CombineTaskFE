import {createBrowserRouter} from "react-router-dom"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"
import TaskScreen from "../pages/TaskScreen"


export const mainRoute = createBrowserRouter([
    {
        path:"/sign-up",
        element:<SignUp/>
    },
    {
        path:"/sign-in",
        element:<SignIn/>
    },
    
    {
        path:"/",
        element:<TaskScreen/>
    },

])