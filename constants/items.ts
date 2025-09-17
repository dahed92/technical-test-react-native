export type product = {
    id: number,
    account_id: number,
    category_id: number,
    name: string,
    quantity: number,
    min_threshold: number,
    created_at: string,
    updated_at: string,
    deleted_at: string | null,
    image_url: string | null,
    category: {
        id: number,
        name: string
    }
}

export type productDetails = {

    id: number,
    account_id: number,
    category_id: number,
    name: string,
    quantity: number,
    min_threshold: number,
    image_url: string,
    category: {
        id: number,
        name: string
    },
    created_at: string,
    updated_at: string,
    stock_movements: [
        {
            id: number,
            account_id: number,
            product_id: number,
            type: string,
            quantity: number,
            created_at: string,
            updated_at: string
        }
    ]

}