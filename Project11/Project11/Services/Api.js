import axios from "axios"

export function Api() {
    const api = axios.create({
        baseURL: baseURL
    })

    return api
}

export const baseURL = "http://localhost:3000"



