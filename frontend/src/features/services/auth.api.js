import axios from 'axios'

const api = axios.create({
    url: "http://localhost:3000",
    withCredentials: true
})

export async function register({username, email, password}) {
    const response = await api.post("/api/auth/register", {
        username,
        email,
        password
    });

    return response.data;
}

export async function login({username, email, password}) {
    const response = await api.post('/api/auth/login', {
        username,
        email,
        password
    });

    return response.data;
}

export async function profile() {
    const response = await api.get('api/auth/profile')

    return response.data;
}

export async function logout() {
    const response = await api.get('/api/auth/logout')

    return response.data;
}
