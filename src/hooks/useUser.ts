import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/userService"

interface User {
    id: string
}

const useUser = () => {
    const token = localStorage.getItem('x-auth-token')
    const fetchUser = () => {
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
        queryKey: ["me", token],
        queryFn: fetchUser
    })
}

export default useUser