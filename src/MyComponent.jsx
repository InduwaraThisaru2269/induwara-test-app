import React, {useState} from "react"

function MyComponent(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value)
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter some text" cols="30" rows="10"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">Gift Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange} />
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping method: {shipping}</p>
        </div>
    );
}

export default MyComponent