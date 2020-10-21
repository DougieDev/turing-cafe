const baseUrl = 'http://localhost:3001/api/v1/'

export const getReservations = () => {
    return fetch(`${baseUrl}reservations`)
    .then(res => res.json())
}

export const postReservation = (name, date, time, number) => {
    return fetch(`${baseUrl}reservations`, {
        method: postReservation,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            date,
            time,
            number
        })
    })
}