const baseUrl = 'http://localhost:3001/api/v1/'

export const getReservations = () => {
    return fetch(`${baseUrl}reservations`)
    .then(res => res.json())
}