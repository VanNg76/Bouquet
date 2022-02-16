import { getFlowers } from "./flowers/FlowerProvider.js"
import { getFlowerColors } from "./flowers/FlowerColorProvider.js"
import { getRetailers } from "./retailers/RetailerProvider.js"
import { getNurseries } from "./nurseries/NurseryProvider.js"
import { getDistributors } from "./distributors/DistributorProvider.js"
import { getDistributorNurseries } from "./nurseries/DistributorNurseryProvider.js"
import { getFlowerNurseries } from "./nurseries/FlowerNurseryProvider.js"

import { Flowers } from "./flowers/Flowers.js"
import { Retailers } from "./retailers/Retailers.js"


const render = () => {
    getFlowers()
        .then(getFlowerColors)
        .then(getRetailers)
        .then(getDistributors)
        .then(getDistributorNurseries)
        .then(getNurseries)
        .then(getFlowerNurseries)
        .then(() => {
            document.querySelector(".flowers").innerHTML = Flowers()
            document.querySelector(".retailers").innerHTML = Retailers()
        })
}

render()

