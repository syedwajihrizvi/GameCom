import { createBrowserRouter } from "react-router-dom";
import Home from "../components/common/Home";
import GameDetails from "../components/games/gameDetails/GameDetails";
import Layout from "../components/common/Layout";
import ErrorPage from "../components/common/ErrorPage";
import Main from "../components/common/Main";
import Login from "../components/account/Login";
import SetupAccount from "../components/setup/SetupAccount";
import Register from "../components/setup/Register";
import ChoosePlan from "../components/plans/ChoosePlan";
import PlanGrid from "../components/plans/PlanGrid";
import PaymentOptions from "../components/setup/PaymentOptions";
import CreditDetails from "../components/account/CreditDetails";
import Setup from "../components/setup/Setup";
import AccountSettings from "../components/account/AccountSettings";
import AccountCard from "../components/account/AccountCard";

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
    {
        path: '/account',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: '', element: <AccountSettings/>},
            {path: 'plans', element: <PlanGrid/>},
            {path: 'payment', element: <AccountCard/>}
        ]
    }
])

export default router