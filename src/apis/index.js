import axios from "axios"

export const api = axios.create({
    baseURL: 'https://gorest.co.in/public/v2/',
    headers: {
        Authorization: 'Bearer b412a09c34c794028e292eb1348d1d7949a2de5c22cb06a67c6e60d11fa6c917'
    }
})
