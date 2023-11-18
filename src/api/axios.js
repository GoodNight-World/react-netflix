import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: process.env.API_KEY,
        language: "ko-KR",
    }
})

export default instance;

// api_access_token = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2QwNDg3NGY5MGM1YjFhZDcxNjI1ZmJmYjBkYmQwNCIsInN1YiI6IjY1NTcyYWM4NTM4NjZlMDBlMjkzYzJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZDR9Bsmk78vJvXgJDYNpVO8NFcglecih0Xc9DLSiFg0