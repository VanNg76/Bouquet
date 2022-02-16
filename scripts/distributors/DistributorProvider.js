let distributors = []

export const getDistributors = () => {
    return fetch("http://localhost:8088/distributors")
        .then(response => response.json())
        .then(distributorData => distributors = distributorData)
}

export const useDistributors = () => {
    return distributors.slice()
}

