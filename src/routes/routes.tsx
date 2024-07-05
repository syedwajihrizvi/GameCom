import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import GameDetails from "../components/games/gameDetails/GameDetails";
import Layout from "../components/Layout";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: '', element: <Home/>},
            {path: 'games/:id', element: <GameDetails/>}
        ]
    }
])

export default router