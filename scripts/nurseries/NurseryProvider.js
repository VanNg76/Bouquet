let nurseries = []

export const getNurseries = () => {
    return fetch("http://localhost:8088/nurseries")
        .then(response => response.json())
        .then(nurseryData => nurseries = nurseryData)
}

export const useNurseries = () => {
    return nurseries.slice()
}
