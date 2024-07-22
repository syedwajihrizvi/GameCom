import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/userService"
import { User } from "../entities/User"

const useUser = () => {
    const token = localStorage.getItem('x-auth-token')
    const fetchUser = () => {
        console.log("Fetching User")
        return apiClient.get<User>('/me', {
            headers: {
                'x-auth-token': token
            }
        })
        .then(res => {
            return res.data
        })
        .catch(err => err)
    }

    return useQuery<User>({
        queryKey: ["me"],
        queryFn: fetchUser
    })
}

export default useUser