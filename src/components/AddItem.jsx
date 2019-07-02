import React from 'react';

class AddItem extends React.Component {
    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.onSubmit}>
                    <label>Total Price: <span></span></label>
                    <div className="form-group">
                        <p>
                            <label htmlFor="productsQuantity">Quantity </label>
                            <input className="form-control" name="quantity"></input>
                        </p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="productsOption">Products</label>
                        <select className="form-control" name="product">
                            {this.props.products.map(item => (
                                <option key={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddItem;