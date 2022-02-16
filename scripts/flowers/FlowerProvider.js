let flowers = []

export const getFlowers = () => {
    return fetch("http://localhost:8088/flowers")
        .then(response => response.json())
        .then(flowerData => flowers = flowerData)
}

export const useFlowers = () => {
    return flowers.slice()
}

