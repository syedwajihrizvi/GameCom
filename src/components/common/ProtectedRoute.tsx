import { Navigate, Outlet } from 'react-router-dom'
import { useGlobalContext } from '../../providers/global-provider'

export const ProtectedRoute = () => {
  const {isLoggedIn} = useGlobalContext()
  return isLoggedIn ? <Outlet/> : <Navigate to="/home"/>
}
