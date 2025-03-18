import { useQuery } from "@tanstack/react-query"
import userClient from "../utils/services/userService"
import { User } from "../entities/User"

const useUser = () => {
    const token = localStorage.getItem('x-auth-token')
    const headers = {'x-auth-token': token}
    const fetchUser = () => 
        userClient.get<User>('/me', {headers})
                  .then(res => res.data)
                  .catch(err => err)

    return useQuery<User>({
        queryKey: ["me"],
        queryFn: fetchUser
    })
}

export default useUser