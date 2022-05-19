export const fetchServices = async() => {
    return fetch('http://localhost:8000/service/')
        .then(response => response.json());
}

export default fetchServices()
