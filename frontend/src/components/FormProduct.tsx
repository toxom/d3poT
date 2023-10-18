import React, { useState, ChangeEvent, FormEvent } from "react";

interface Product {
    name: string;
    price: string;
}

function FormProduct() {
    const [product, setProduct] = useState<Product>({ name: "", price: "" });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                />
                <input
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Product Price"
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default FormProduct;
