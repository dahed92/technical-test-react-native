export type pagination =
    {
        per_page: number,
        next_cursor: string,
        prev_cursor: string,
        has_more_pages: boolean,
        next_page_url: string,
        prev_page_url: string
    }