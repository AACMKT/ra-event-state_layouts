export function ShopCard({ product }) {
    return (
        <>
    <div className="card-container">
        <h2 className="card-product-name">{ product.name }</h2>
        <span className="card-product-color">{ product.color }</span>
            <div className="card-product-img">
                <img className="card-img" src={ product.img }/>
            </div>
            
        <div className="card-chart-wapper">
            <div className="card-product-price">{ product.price }</div>
            <button className="card-product-btn">{"add to chart"}</button>
        </div>
    </div>

        </>
    )
}