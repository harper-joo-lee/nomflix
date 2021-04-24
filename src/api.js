import axios from "axios";

const api = axios.create({
   baseURL:"https://api.themoviedb.org/3/",
   params: {
       api_key: "1033a01ef4235d15c11a02d7b3ebc62e",
       language: "en-US"
   } 
});

export const MoviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("moive/popular"),
    movieDetail: id => api.get(`movie/${id}`, {
        params : {
            append_to_response:"videos"
        }
    }),
    search: term =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term)
            }
    })
}

export const TVApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id => api.get(`tv/${id}`, {
        params: {
            append_to_response:"videos"
        }
    }),
    search: term =>
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term)
            }
        })
}

// api.get("tv/popular");

// export default api;