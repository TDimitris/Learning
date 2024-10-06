import { useState } from "react";


export default function ValidatedShoppingListForm({ addItem }) {

    const [formData, setFormData] = useState({
        product: "",
        quantity: 0
    });

    const [productIsValid, setProductIsValid] = useState(false);

    const handleChange = (evt) => {
        if(evt.target.name === "product"){
            validate(evt.target.value);
        }
        
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
        
    };

    const validate = (product) => {
        if(product.length === 0){
            setProductIsValid(false);
        }
        else {
            setProductIsValid(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(productIsValid){
            addItem(formData);
            setFormData({ //fields reset after submit
                product: "",
                quantity: 0
        });
        }
        
    }


    return(
        <form onSubmit={handleSubmit}>
            <h1>Product is : {formData.product}</h1>
            <label htmlFor="product">Product Name</label>
            <input 
                type="text"
                placeholder="product name"
                name="product"
                id="product"
                onChange={handleChange}
                value={formData.product}
            />
            {!productIsValid && (<p style={{color: "red"}}>Product name cannot be empty!</p>)};
            <label htmlFor="quantity">Product Quantity</label>
            <input 
                type="number"
                placeholder="product quantity"
                name="quantity"
                id="quantity"
                onChange={handleChange}
                value={formData.quantity}
            />
            <button disabled={!productIsValid}>Add item</button>
        </form>
    );
};