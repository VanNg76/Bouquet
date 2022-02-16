import { useFlowers } from "./FlowerProvider.js"
import { useFlowerColors } from "./FlowerColorProvider.js"

export const Flowers = () => {
    const flowers = useFlowers()
    const flowerColors = useFlowerColors()

    const findColor = (colorId) => {
        return flowerColors.find(flowerColor => flowerColor.id === colorId)
    }

    return `
        <h2>Flowers list</h2>
        <ul>
            ${flowers.map(flower => {
                const foundColor = findColor(flower.colorId)
                return `<li>${foundColor.name} ${flower.name}</li>`
            }).join("")
            }
        </ul>
        <hr>
        `
}