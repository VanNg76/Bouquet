let flowerNurseries = []

export const getFlowerNurseries = () => {
    return fetch("http://localhost:8088/flowerNurseries")
        .then(response => response.json())
        .then(flowerNurseryData => flowerNurseries = flowerNurseryData)
}

export const useFlowerNurseries = () => {
    return flowerNurseries.slice()
}
