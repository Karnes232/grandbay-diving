import React from "react"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import PayPalButtonWrapper from "../PayPalButtonWrapper/PayPalButtonWrapper"

const CustomPayPal = ({ price }) => {
  const currency = "USD"
  return (
    <div className="flex justify-center">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AaPiNuBE-3bjn86CtDSbnbs5nnaeQ-vNhBk48DdMwZ0vsUYGVuE1_38burybKxv_Qn78gXQYUSKf1UG0",
          components: "buttons",
          currency: "USD",
        }}
      >
        <PayPalButtonWrapper
          currency={currency}
          showSpinner={false}
          amount={price}
        />
      </PayPalScriptProvider>
    </div>
  )
}

export default CustomPayPal
