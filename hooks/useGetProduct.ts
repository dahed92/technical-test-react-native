import { productListResponse } from "@/constants/http-response";
import { isSuccessful } from "@/constants/http-status";
import { productDetails } from "@/constants/items";
import { queryKeys } from "@/constants/queryKeys";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const defaultStalteTime = 5 * 60 * 1000

const PRODUCTLIST_BASE_URL = "https://technical-test-react-native-back-master-oibbvb.laravel.cloud/api/v1/products"

const PRODUCT_DETAIL_BASE_URL = "https://technical-test-react-native-back-master-oibbvb.laravel.cloud/api/v1/products/"
//https://technical-test-react-native-back-master-oibbvb.laravel.cloud/api/v1/products/1

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
    const apiUrl = `${PRODUCTLIST_BASE_URL}?${u.toString()}`

    try {
        const res = await fetch(apiUrl, {
            headers: { Authorization: `Bearer ${Bearer}` }
        })

        if (res.status === 400 || res.status === 404) {
            return { items: [], pagination: {} } as unknown as productListResponse
        }

        if (!isSuccessful(res.status)) {
            throw new Error("An erro occured in fetching products")
        }

        const json = await res.json()

        return json as productListResponse

    } catch (error) {
        console.error(`An error occured in fetchProducts  ${error}`)
        throw error
    }
}

const fetchSingleProduct = async (id: string) => {

    const finalUrl = PRODUCT_DETAIL_BASE_URL + id

    try {
        const res = await fetch(finalUrl, {
            headers: { Authorization: `Bearer ${Bearer}` }
        })

        if (res.status === 400 || res.status === 404) {
            return { items: [], pagination: {} } as unknown as productDetails
        }

        if (!isSuccessful(res.status)) {
            throw new Error("An erro occured in fetchSingleProduct ")
        }

        const json = await res.json()

        return json as productDetails

    } catch (error) {
        console.error(`An error occured in fetchSingleProduct  ${error}`)
        throw error
    }
}


export const useGetProducts = (status?: productStatus) => {

    return useInfiniteQuery({
        queryKey: [queryKeys.productList, status],
        queryFn: () => fetchProducts(LIMIT, status),
        initialPageParam: "",
        getNextPageParam: (response) => response.pagination.next_page_url,
        staleTime: defaultStalteTime
    })

}

export const useGetProcutDetails = (id: string) => {
    return useQuery({
        queryKey: [queryKeys.productDetails, id],
        queryFn: () => fetchSingleProduct(id),
        staleTime: defaultStalteTime
    })
}

