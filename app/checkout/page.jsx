// app/checkout/page.js
import React from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout Page</h1>
      <AddressForm />
      <PaymentForm />
      <Review />
    </div>
  );
}
