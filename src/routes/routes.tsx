import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import GameDetails from "../components/games/gameDetails/GameDetails";
import Layout from "../components/Layout";
import ErrorPage from "../components/ErrorPage";
import Main from "../components/Main";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: 'games', element: <Home/>},
            {path: 'games/:id', element: <GameDetails/>}
        ]
    },
    {path: '/home', element: <Main/>},
])

export default router