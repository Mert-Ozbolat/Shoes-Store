import { useQuery } from "@tanstack/react-query";
import { authApi } from "../services/api";

export default function useUser() {
    const { data } = useQuery({
        queryKey: ['user'],
        queryFn: () => authApi.getCurrentUser(),
        retry: false,
        select: (res) => res.data.user
    })
}