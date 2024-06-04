import { ShopCard } from "./ShopCard"

export function CardsView({ products }) {
    return (

    <div className="cards-holder">
      { products.map((product, index) => {
        return (
            <ShopCard key = {index} product = { product }/>
        )    
      })}
    </div>
    )
}