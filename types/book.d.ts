export interface Book {
    author: string,
    cover: string,
    created_at: string,
    description: string,
    id: number,
    name: string,
    price: number,
    sales: number,
    slug: string,
    likes_aggregate : {
        aggregate: {
            count: number
        }
    }
}
