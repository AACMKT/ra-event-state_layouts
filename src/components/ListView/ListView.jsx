import { ShopItem } from "./ShopItem"

export function ListWiew({ products }) {
    return (
    <div className="list-holder">
      { products.map((product, index) => {
        return (

            <ShopItem key = {index} product = { product }/>
        )
        
      })}
    </div>
    )
}