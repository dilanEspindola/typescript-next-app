export interface ApiResponse {
    results: Characters[]
}

export interface Characters {
    id: number,
    name: string,
    gender: string,
    image: string
}