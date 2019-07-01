import React  from "react";

const AddItem =( { products, handler } ) => {
    // let productList = products.map(productItem => <Product key={productItem.id} cartItem={productItem} />)
    return (
        <form onSubmit = { e => {
           
        }}>
            <label>Total Price: <span></span></label>
            <div class="form-group">
                <p>
                    <label htmlFor="productsQuantity">Quantity </label>
                    <input class="form-control" 
                        name="quantity"
                        onChange = { handler }
                    />
                </p>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1" htmlFor="productsOption">Products</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Select an option...</option>
                    <option>{products}</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <button type="button" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddItem;