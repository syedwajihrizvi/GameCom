import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import GameDetails from "../components/games/gameDetails/GameDetails";
import Layout from "../components/Layout";
import ErrorPage from "../components/ErrorPage";
import Main from "../components/Main";
import Login from "../components/Login";
import SetupAccount from "../components/SetupAccount";
import Register from "../components/Register";
import ChoosePlan from "../components/ChoosePlan";
import PlanGrid from "../components/PlanGrid";
import PaymentOptions from "../components/PaymentOptions";
import CreditDetails from "../components/CreditDetails";
import Setup from "../components/Setup";

const router = createBrowserRouter([
    {path: '/', element: <Main/>},
    {path: '/login', element: <Login/>},
    {
        path: '/setup',
        element: <Setup/>,
        children: [
            {path: '', element: <SetupAccount/>},
            {path: 'register', element: <Register/>},
            {path: 'choose-plan', element: <ChoosePlan/>},
            {path: 'plans', element: <PlanGrid/>},
            {path: 'payment', element: <PaymentOptions/>},
            {path: 'creditoption', element: <CreditDetails/>}
        ]
    },
    {
        path: '/games', 
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: '', element: <Home/>},
            {path: ':id', element: <GameDetails/>}
        ]
    },
])

export default router