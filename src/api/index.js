import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const insertMovie = bodyLoader => api.post(`/movie`, bodyLoader)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, bodyLoader) => api.put(`/movie/${id}`, bodyLoader)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis