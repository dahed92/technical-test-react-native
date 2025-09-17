import { product } from "./items";
import { pagination } from "./pagination";

export type productListResponse = {
    items: product[],
    pagination: pagination
}