import React from "react";

const CartItem = ( {cartItem} ) => {
    return (
        <div class="collection-item">
            <div className="list-group">
                <div className="list-group-item">
                    <div class="row">
                        <div class="col-md-8">{cartItem.product.name}</div>
                        <div class="col-md-2">{cartItem.product.priceInCents}</div>
                        <div class="col-md-2">{cartItem.quantity}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;