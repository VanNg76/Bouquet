import { useRetailers } from "./RetailerProvider.js"
import { useDistributors } from "../distributors/DistributorProvider.js"
import { useFlowerNurseries } from "../nurseries/FlowerNurseryProvider.js"
import { useDistributorNurseries } from "../nurseries/DistributorNurseryProvider.js"
import { useNurseries } from "../nurseries/NurseryProvider.js"
import { useFlowers } from "../flowers/FlowerProvider.js"
import { useFlowerColors } from "../flowers/FlowerColorProvider.js"

export const Retailers = () => {
    const retailers = useRetailers()
    const distributors = useDistributors()
    const nurseries = useNurseries()
    const flowers = useFlowers()
    const flowerColors = useFlowerColors()
    const flowerNurseries = useFlowerNurseries()
    const distributorNurseries = useDistributorNurseries()

    // to get distributor name from an id
    const findDistributor = (id) => {
        return distributors.find(distributor => distributor.id === id)
    }

    // to get nursery name from an id
    const findNursery = (id) => {
        return nurseries.find(nursery => nursery.id === id)
    }

    // to find flower name from an id
    const findFlower = (id) => {
        return flowers.find(flower => flower.id === id)
    }
    // to find flower color
    const findColor = (colorId) => {
        return flowerColors.find(flowerColor => flowerColor.id === colorId)
    }

    // to get all nurseries belong to a distributor
    const findDistributorNurseries = (id) => {
        return distributorNurseries.filter(elem => elem.distributorId === id)
    }

    // to get all flowers belong to a nursery
    const findFlowerNurseries = (id) => {
        return flowerNurseries.filter(elem => elem.nurseryId === id)
    } 

    return `
        <h2>Retailers list</h2>
            ${retailers.map(retailer => {
                // to look for corresponding distributor
                const foundDistributor = findDistributor(retailer.distributorId)

                // to look up for nursery names
                const foundDistributorNurseries = findDistributorNurseries(foundDistributor.id)
                const foundNurseryIds = foundDistributorNurseries.map(obj => {
                    return obj.nurseryId
                })
                const foundNurseryNames = foundNurseryIds.map(id => {
                    const foundNursery = findNursery(id)
                    return foundNursery.name + " Nursery Center"
                }).join(", and ")

                // to look for flower names
                let foundFlowerNurseries = foundNurseryIds.map(nurseryId => {
                    return findFlowerNurseries(nurseryId)
                })
                foundFlowerNurseries = foundFlowerNurseries.flat()
                const foundFlowerIds = foundFlowerNurseries.map(obj => {
                    return obj.flowerId
                })
                const retailFlowers = foundFlowerIds.map(flowerId => {
                    const foundFlower = findFlower(flowerId)
                    const foundColor = findColor(foundFlower.colorId)
                    return foundColor.name + " " + foundFlower.name
                }).join(", ")

                return `<h4>${retailer.name}</h4>
                        <div>Buying from Distributor: ${foundDistributor.name}</div>
                        <div>Supply from Nurseries: ${foundNurseryNames}</div>
                        <div>Flowers available: ${retailFlowers}</div>`
            }).join("")
            }
        `
}
