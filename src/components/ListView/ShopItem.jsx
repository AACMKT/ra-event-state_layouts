export function ShopItem({ product }) {
    return (
    <>
        <div className="item-container">

            <img className="item-img" src={ product.img }/>
            <h2 className="item-product-name">{ product.name }</h2>
            <span className="item-product-color">{ product.color }</span>
            <div className="item-product-price">{ product.price }</div>
            <button>{"add to chart"}</button>
        </div>
    </>
    )
}