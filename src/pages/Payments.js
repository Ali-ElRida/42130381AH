import React, { useState } from "react";

function Payment() {
    const [formData, setFormData] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { cardNumber, expiry, cvv } = formData;
        if (!cardNumber || !expiry || !cvv) {
            alert("Please fill in all payment details.");
            return;
        }

        alert("Payment successful!");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Payment</h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto space-y-4"
            >
                <p className="text-gray-700 mb-4">
                    Total Amount: <span className="font-semibold">$50</span>
                </p>

                <div>
                    <label className="block font-semibold mb-1">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        maxLength={16}
                        placeholder="1234 5678 9012 3456"
                        className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block font-semibold mb-1">Expiry Date</label>
                        <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="flex-1">
                        <label className="block font-semibold mb-1">CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            maxLength={4}
                            placeholder="123"
                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
}

export default Payment;
