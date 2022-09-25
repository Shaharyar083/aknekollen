import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../src/components/Redux/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

document.addEventListener("DOMContentLoaded", async () => {
  const stripePromise = await loadStripe(
    "pk_test_51KU3zKDbQstxkApUiW2PevRbocTMKDRHChMyjQAIUA0t4zTB4RpjFYLjlODilPZh0vujIhBfwxhKs1k9E087Irxr00TSXeeeUU"
  );
  console.log("stripePromise", stripePromise);
  ReactDOM.render(
    <React.StrictMode>
      <Elements stripe={stripePromise}>
        <Provider store={store}>
          <App />
        </Provider>
      </Elements>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
reportWebVitals();
