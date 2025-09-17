import { customResponse } from "@/constants/http-response";
import { isSuccessful } from "@/constants/http-status";
import { queryKeys } from "@/constants/queryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";

const BASE_URL = "https://technical-test-react-native-back-master-oibbvb.laravel.cloud/api/v1/products"

// mettre dans .env plus tard
const Bearer = "cDVI7vBrvS2U4BlBzLFpO9lTOu2ahuqNbyF1fa4S8ndOD7T3gCnzSx7TqT3s"

const LIMIT = 20;

export type productStatus = "in_stock" | "low_stock" | "out_of_stock"

const fetchProducts = async (limit: number, status?: productStatus) => {
    const u = new URLSearchParams({
        limit: limit.toString()
    })
    if (status) {
        u.append("status", status.toString())
    }
    const apiUrl = `${BASE_URL}?${u.toString()}`

    try {
        const res = await fetch(apiUrl, {
            headers: { Authorization: `Bearer ${Bearer}` }
        })

        if (res.status === 400 || res.status === 404) {
            return { items: [], pagination: {} } as unknown as customResponse
        }

        if (!isSuccessful(res.status)) {
            throw new Error("An erro occured in fetching products")
        }

        const json = await res.json()

        return json as customResponse

    } catch (error) {
        console.error(`An error occured in fetchProducts  ${error}`)
        throw error
    }
}


export const useGetProducts = (status?: productStatus) => {

    return useInfiniteQuery({
        queryKey: [queryKeys.productList, status],
        queryFn: () => fetchProducts(LIMIT, status),
        initialPageParam: "",
        getNextPageParam: (response) => response.pagination.next_page_url
    })

}