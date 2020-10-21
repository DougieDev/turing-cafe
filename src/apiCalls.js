const baseUrl = 'http://localhost:3001/api/v1/'

export const getReservations = async () => {
    return await fetch(`${baseUrl}reservations`)
    .then(res => res.json())
}

export const postReservation = async (name, date, time, number) => {
    return await fetch(`${baseUrl}reservations`, {
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