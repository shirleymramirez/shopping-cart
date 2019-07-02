import React from "react";

const CartItem = ( {cartItem} ) => {
    return (
        <div className="collection-item">
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">{cartItem.product.name}</div>
                        <div className="col-md-2">{cartItem.product.priceInCents}</div>
                        <div className="col-md-2">{cartItem.quantity}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;