let distributorNurseries = []

export const getDistributorNurseries = () => {
    return fetch("http://localhost:8088/distributorNurseries")
        .then(response => response.json())
        .then(distributorNurseryData => distributorNurseries = distributorNurseryData)
}

export const useDistributorNurseries = () => {
    return distributorNurseries.slice()
}
