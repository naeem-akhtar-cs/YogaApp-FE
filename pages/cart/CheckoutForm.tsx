import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Modal from "./Modal";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [inputError, setInputError] = useState<string | null>(null);
    const [isPaymentElementComplete, setIsPaymentElementComplete] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error("Stripe or Elements not loaded");
            return <div>Error: Stripe context is missing</div>;
        }

        setIsLoading(true);
        stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: process.env.NEXT_PUBLIC_RETURN_URL,
            },
            redirect: "if_required"
        }).then(result => {
            const paymentIntent = result.paymentIntent;
            if (paymentIntent && paymentIntent.status === "succeeded") {
                setMessage("Payment successful");
                setShowModal(true);
                localStorage.removeItem("cart");
            } else {
                setMessage(result.error?.message || "Payment failed");
                setShowModal(true);
            }
            setIsLoading(false);
        }).catch(error => {
            console.log(error);
            setMessage("Error processing your payment, please try again");
            setShowModal(true);
            setIsLoading(false);
        });
    };

    const handleChange = (event: any) => {
        if (event.error) {
            setInputError(event.error.message);
            setIsPaymentElementComplete(false);
        } else {
            setInputError(null);
            setIsPaymentElementComplete(event.complete);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" onChange={handleChange} />
                {inputError && <div id="input-error" style={{ color: 'red' }}>{inputError}</div>}
                <button disabled={isLoading || !stripe || !elements} id="submit" className="mt-4 flex items-center w-full justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm bg-cyan-500 hover:bg-cyan-600">
                    <span id="button-text">
                        {isLoading ? "Processing..." : "Pay now"}
                    </span>
                </button>
            </form>
            <Modal show={showModal} message={message || ""} onClose={closeModal} />
        </div>
    );
}
