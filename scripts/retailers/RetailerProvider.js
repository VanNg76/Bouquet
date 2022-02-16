let retailers = []

export const getRetailers = () => {
    return fetch("http://localhost:8088/retailers")
        .then(response => response.json())
        .then(retailerData => retailers = retailerData)
}

export const useRetailers = () => {
    return retailers.slice()
}

