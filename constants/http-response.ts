import { product } from "./items";
import { pagination } from "./pagination";

export type customResponse = {
    items: product[],
    pagination: pagination
}