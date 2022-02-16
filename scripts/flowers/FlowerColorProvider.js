let flowerColors = []

export const getFlowerColors = () => {
    return fetch("http://localhost:8088/flowerColors")
        .then(response => response.json())
        .then(flowerColorData => flowerColors = flowerColorData)
}

export const useFlowerColors = () => {
    return flowerColors.slice()
}

