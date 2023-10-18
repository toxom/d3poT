import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/Pages.css';

interface Product {
    brand: string;
    model: string;
    // ... Add other fields here based on the CSV columns ...
}

function AddProduct() {
    const [product, setProduct] = useState<Product>({
        brand: "",
        model: "",
        // ... Initialize other fields with empty strings ...
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/add-product", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                alert("Data saved successfully.");
            } else {
                console.error("Failed to save the product.");
            }
        } catch (error) {
            console.error("There was an error saving the product:", error);
        }
    };

    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit}>
                <input type="text" name="brand" value={product.brand} onChange={handleChange} placeholder="Brand" />
                <input type="text" name="model" value={product.model} onChange={handleChange} placeholder="Model" />
                {/* Render other input fields similarly based on the CSV columns ... */}
                <button type="submit">Save to CSV</button>
            </form>
        </div>
    );
}

export default AddProduct;
