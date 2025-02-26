import { useMutation, useQuery } from "@tanstack/react-query";
import { shoesApi } from "../services/api";
import { ShoeData } from "../types";


export function useShoes() {

    const shoes = useQuery({
        queryKey: ['shoes'],
        queryFn: () => shoesApi.getAll().then((res) => res.data),
    })

    const shoe = (id: string) => useQuery({
        queryKey: ['shoe', id],
        queryFn: () => shoesApi.getById(id).then((res) => res.data)
    })

    const create = (data: ShoeData) =>
        useMutation({
            mutationFn: () => shoesApi.create(data),
            onSuccess: () => {
                alert('Oluşturuldu');
            }
        })

    const edit = (id: string, data: ShoeData) =>
        useMutation({
            mutationFn: () => shoesApi.edit(id, data),
            onSuccess: () => {
                alert('Düzenlendi');
            }
        })

    const remove = (id: string) =>
        useMutation({
            mutationFn: () => shoesApi.delete(id),
            onSuccess: () => {
                alert('Kaldırıldı');
            }
        })


    return { shoes, shoe, create, edit, remove }
}